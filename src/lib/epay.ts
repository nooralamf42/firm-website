import { ObjectId } from 'mongodb';
import { getDb, logPaymentEvent } from '@/lib/db';

/**
 * ePay hosted checkout (https://gtw.online-epayment.com/developers/).
 *
 * Flow: /api/pay/[token]/start creates a local `payments` row and redirects the customer to ePay's hosted
 * page. ePay then (a) POSTs our webhook and (b) redirects the customer to /pay/result. NEITHER is trusted:
 * the webhook carries no signature, so both paths call settleEpayPayment(), which re-reads the transaction
 * from ePay's status API and only marks the payment paid when reference, amount and currency match what we
 * created. Card numbers never reach this server.
 */

const GATEWAY = (process.env.EPAY_GATEWAY_URL || 'https://gtw.online-epayment.com').replace(/\/+$/, '');

export interface EpayConfig {
  publicKey: string;
  terNO: string;
}

export function getEpayConfig(): EpayConfig | null {
  const publicKey = process.env.EPAY_PUBLIC_KEY?.trim();
  const terNO = process.env.EPAY_TERNO?.trim();
  if (!publicKey || !terNO) return null;
  return { publicKey, terNO };
}

/** The URL to send the customer to: ePay's public-key checkout (no private key, no encryption). */
export function buildEpayCheckoutUrl(cfg: EpayConfig, params: Record<string, string>): string {
  const query = new URLSearchParams({ public_key: cfg.publicKey, terNO: cfg.terNO, 'integration-type': 'Encode-Checkout', ...params }).toString();
  return `${GATEWAY}/checkout?${query}`;
}

export interface EpayTxn {
  transID: string;
  order_status: number;
  status?: string;
  bill_amt?: string;
  bill_currency?: string;
  reference?: string;
  response?: string;
  mop?: string;
  ccno?: string;
  tdate?: string;
}

/** Looks a transaction up by our payment reference. Returns null when ePay has no such transaction yet (it
 *  answers {"error":"Invalid Parameter"} then), when it is unreachable, or when the reply is not usable. */
export async function fetchEpayTransaction(reference: string): Promise<EpayTxn | null> {
  const publicKey = process.env.EPAY_PUBLIC_KEY?.trim();
  if (!publicKey) return null;
  const url = `${GATEWAY}/fetch_trnsStatus?public_key=${encodeURIComponent(publicKey)}&reference=${encodeURIComponent(reference)}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
    const text = await res.text();
    let json: any;
    try { json = JSON.parse(text); } catch { return null; }
    if (!json || typeof json !== 'object' || json.error || json.Error || json.order_status === undefined || !json.transID) return null;
    return { ...json, transID: String(json.transID), order_status: Number(json.order_status) } as EpayTxn;
  } catch (err) {
    console.error('[ePay] status lookup failed:', err);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

const APPROVED = 1;
const TEST = 9;
const FAILED_STATUSES = new Set([2, 22, 23, 24]); // declined, expired, cancelled, failed

export type SettleResult =
  | { status: 'completed' | 'already_completed' | 'pending' | 'failed' | 'not_found' | 'test_ignored' }
  | { status: 'mismatch'; detail: string };

/**
 * Decides whether one of our payments is paid, from ePay's own records. Safe to call repeatedly and from
 * both the webhook and the return-page sync: the Completed update is conditional, so only one call flips it.
 */
export async function settleEpayPayment(paymentId: string): Promise<SettleResult> {
  if (!ObjectId.isValid(paymentId)) return { status: 'not_found' };
  const db = await getDb();
  const payments = db.collection('payments');
  const _id = new ObjectId(paymentId);
  const record = await payments.findOne({ _id });
  if (!record || record.gateway !== 'ePay') return { status: 'not_found' };
  if (record.status === 'Completed') return { status: 'already_completed' };

  const txn = await fetchEpayTransaction(paymentId);
  if (!txn) return { status: 'pending' };
  // Remember that ePay saw this as a test transaction, so the admin "Test Transactions" filter can show it.
  if (txn.order_status === TEST && !record.testTransaction) {
    await payments.updateOne({ _id }, { $set: { testTransaction: true, updatedAt: new Date() } });
  }
  if (String(txn.reference || '') !== paymentId) {
    await logPaymentEvent('reference_mismatch', { paymentId, linkToken: record.linkToken, detail: { got: txn.reference } });
    return { status: 'mismatch', detail: 'reference does not match' };
  }

  if (txn.order_status === APPROVED || (txn.order_status === TEST && process.env.EPAY_ALLOW_TEST === 'true')) {
    const paid = Number(txn.bill_amt);
    const expected = Number(record.amount);
    const expectedCurrency = String(record.currency).toUpperCase();
    const currency = String(txn.bill_currency || expectedCurrency).toUpperCase();
    if (!Number.isFinite(paid) || Math.abs(paid - expected) > 0.005 || currency !== expectedCurrency) {
      const detail = `ePay reported ${txn.bill_amt} ${currency}, expected ${expected} ${expectedCurrency}`;
      console.error('[ePay] amount/currency mismatch for', paymentId, detail);
      await payments.updateOne({ _id }, { $set: { epayMismatch: detail, epayTransId: txn.transID, updatedAt: new Date() } });
      await logPaymentEvent('amount_mismatch', { paymentId, linkToken: record.linkToken, detail });
      return { status: 'mismatch', detail: 'paid amount does not match the payment' };
    }

    const last4 = txn.ccno?.match(/(\d{4})\s*$/)?.[1];
    const brand = txn.mop && txn.mop !== 'null' ? txn.mop : undefined;
    const res = await payments.updateOne(
      { _id, status: { $ne: 'Completed' } },
      {
        $set: {
          status: 'Completed',
          epayTransId: txn.transID,
          paidAt: new Date(),
          cardType: brand,
          cardLast4: last4,
          updatedAt: new Date(),
        },
        // A completed payment should not keep notes left by earlier failed or mismatched attempts.
        $unset: { failureReason: '', failedAt: '', epayMismatch: '' },
      },
    );
    if (res.modifiedCount !== 1) return { status: 'already_completed' };

    await db.collection('paymentLinks').updateOne({ token: record.linkToken }, { $set: { paidAt: new Date() } });
    await logPaymentEvent('payment_completed', { paymentId, linkToken: record.linkToken, detail: { transID: txn.transID, amount: expected, currency: expectedCurrency, brand, last4 } });
    return { status: 'completed' };
  }

  if (txn.order_status === TEST) return { status: 'test_ignored' };

  if (FAILED_STATUSES.has(txn.order_status)) {
    // Recorded as Failed, but a later approved attempt on the same payment can still move it to Completed.
    const res = await payments.updateOne(
      { _id, status: { $nin: ['Completed'] } },
      { $set: { status: 'Failed', failureReason: txn.response || txn.status || 'Declined', failedAt: new Date(), epayTransId: txn.transID, updatedAt: new Date() } },
    );
    if (res.modifiedCount === 1 && record.status !== 'Failed') {
      await logPaymentEvent('payment_failed', { paymentId, linkToken: record.linkToken, detail: { transID: txn.transID, reason: txn.response || txn.status } });
    }
    return { status: 'failed' };
  }

  return { status: 'pending' };
}
