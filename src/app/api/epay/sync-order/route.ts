import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { settleEpayPayment } from '@/lib/epay';
import { getDb, logPaymentEvent } from '@/lib/db';
import { requestInfo } from '@/lib/request-info';

/** Return-page check: the customer came back from ePay, so verify the payment against ePay's records now
 *  instead of waiting for the webhook. Same verification as the webhook (see settleEpayPayment). */
export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();
    if (!paymentId || typeof paymentId !== 'string') {
      return NextResponse.json({ error: 'paymentId is required' }, { status: 400 });
    }

    // Log the customer's return once (this route is polled a few times while ePay finalises).
    if (ObjectId.isValid(paymentId)) {
      const db = await getDb();
      const payment = await db.collection('payments').findOne({ _id: new ObjectId(paymentId) }, { projection: { linkToken: 1 } });
      if (payment && !(await db.collection('paymentEvents').findOne({ type: 'returned_to_site', paymentId }, { projection: { _id: 1 } }))) {
        const info = requestInfo(req);
        await logPaymentEvent('returned_to_site', { paymentId, linkToken: payment.linkToken, ip: info.ip, device: info.device, browser: info.browser, ua: info.ua });
      }
    }

    const result = await settleEpayPayment(paymentId);

    // For the success page: show what was paid, but only once it is confirmed paid.
    if ((result.status === 'completed' || result.status === 'already_completed') && ObjectId.isValid(paymentId)) {
      const db = await getDb();
      const p = await db.collection('payments').findOne({ _id: new ObjectId(paymentId) }, { projection: { amount: 1, currency: 1, productName: 1, epayTransId: 1 } });
      if (p) return NextResponse.json({ ...result, payment: { amount: p.amount, currency: p.currency, productName: p.productName, transactionId: p.epayTransId } });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error('[ePay Sync Error]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
