import { NextRequest, NextResponse, after } from 'next/server';
import { settleEpayPayment } from '@/lib/epay';
import { logPaymentEvent } from '@/lib/db';

/**
 * ePay's webhook (POST, form-encoded or JSON). It is unsigned, so nothing in the body is trusted except
 * `reference` (our payment id), which only tells us WHICH payment to re-check: settleEpayPayment() asks
 * ePay's status API directly and verifies amount and currency before marking anything paid.
 * Always answers 200 so ePay does not keep retrying; the work runs after the response.
 */
async function readReference(req: NextRequest): Promise<string> {
  const type = req.headers.get('content-type') || '';
  try {
    if (type.includes('application/json')) {
      const body = await req.json();
      return String(body?.reference ?? '');
    }
    const form = await req.formData();
    return String(form.get('reference') ?? '');
  } catch {
    return '';
  }
}

export async function POST(req: NextRequest) {
  const reference = (await readReference(req)).trim();
  if (!reference) {
    console.warn('[ePay Webhook] no reference in payload');
    return NextResponse.json({ received: true });
  }
  after(async () => {
    try {
      const result = await settleEpayPayment(reference);
      await logPaymentEvent('webhook', { paymentId: reference, detail: result });
    } catch (err) {
      console.error('[ePay Webhook Error]', err);
    }
  });
  return NextResponse.json({ received: true });
}

export async function GET() {
  return NextResponse.json({ status: 'active' });
}
