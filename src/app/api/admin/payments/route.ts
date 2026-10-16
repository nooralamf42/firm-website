import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifyAdminSession } from '@/lib/admin-auth';
import { getDb } from '@/lib/db';
import { settleEpayPayment } from '@/lib/epay';

async function unauthorized(req: NextRequest) {
  return (await verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) ? null : NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

/** Payment records + the event log, for the admin "Logs" page. */
async function handleGET(req: NextRequest) {
  const denied = await unauthorized(req);
  if (denied) return denied;
  const db = await getDb();
  const [payments, events, links] = await Promise.all([
    // The signature image is large, so the list only says whether one exists (see /[id]/signature).
    db.collection('payments').find({}, { projection: { 'consent.signature': 0 } }).sort({ createdAt: -1 }).limit(500).toArray(),
    db.collection('paymentEvents').find({}).sort({ at: -1 }).limit(2000).toArray(),
    db.collection('paymentLinks').find({}, { projection: { token: 1, productName: 1, amount: 1, currency: 1, customerName: 1, customerEmail: 1 } }).limit(1000).toArray(),
  ]);
  return NextResponse.json({
    payments: payments.map((p) => ({ ...p, _id: String(p._id) })),
    events: events.map((e) => ({ ...e, _id: String(e._id) })),
    links: links.map((l) => ({ ...l, _id: String(l._id) })),
  });
}

/** "Verify with ePay": re-check one payment against ePay's own records. { paymentId } */
async function handlePOST(req: NextRequest) {
  const denied = await unauthorized(req);
  if (denied) return denied;
  const { paymentId } = await req.json().catch(() => ({}));
  if (typeof paymentId !== 'string') return NextResponse.json({ error: 'paymentId is required' }, { status: 400 });
  return NextResponse.json(await settleEpayPayment(paymentId));
}

async function guarded(label: string, run: () => Promise<NextResponse>) {
  try {
    return await run();
  } catch (err) {
    console.error(`[admin payments ${label}]`, err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}

export const GET = (req: NextRequest) => guarded('GET', () => handleGET(req));
export const POST = (req: NextRequest) => guarded('POST', () => handlePOST(req));
