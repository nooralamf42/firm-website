import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifyAdminSession } from '@/lib/admin-auth';
import { getDb, logPaymentEvent, type PaymentLink } from '@/lib/db';
import { CURRENCY, describePlan, isEdition, isKnownProduct } from '@/lib/products';

// The proxy already guards /api/admin; checking again here keeps the route safe even if the matcher changes.
function unauthorized(req: NextRequest) {
  return verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value) ? null : NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

function siteUrl() {
  return (process.env.SITE_URL?.trim() || 'http://localhost:3000').replace(/\/+$/, '');
}

const round2 = (n: number) => Math.round(n * 100) / 100;

async function handleGET(req: NextRequest) {
  const denied = unauthorized(req);
  if (denied) return denied;
  const db = await getDb();
  const links = await db.collection('paymentLinks').find({}).sort({ createdAt: -1 }).limit(200).toArray();
  return NextResponse.json({
    links: links.map((l) => ({ ...l, _id: String(l._id), url: `${siteUrl()}/pay/${l.token}` })),
  });
}

/** Create a link: { product, users?, years?, price, discount?, customerName?, customerEmail?, note?, expiresInDays? } */
async function handlePOST(req: NextRequest) {
  const denied = unauthorized(req);
  if (denied) return denied;

  const body = await req.json().catch(() => ({}));
  const product = String(body.product || '').trim();
  if (!isKnownProduct(product)) return NextResponse.json({ error: 'Choose a product' }, { status: 400 });

  const basePrice = round2(Number(body.price));
  const discount = round2(Number(body.discount) || 0);
  if (!Number.isFinite(basePrice) || basePrice <= 0 || basePrice > 1_000_000) return NextResponse.json({ error: 'Enter a valid price' }, { status: 400 });
  if (!Number.isFinite(discount) || discount < 0) return NextResponse.json({ error: 'Discount is not valid' }, { status: 400 });
  if (discount > basePrice) return NextResponse.json({ error: 'Discount cannot be greater than the price' }, { status: 400 });
  const amount = round2(basePrice - discount);
  if (amount <= 0) return NextResponse.json({ error: 'Total must be greater than zero' }, { status: 400 });

  let users: number | undefined;
  let years: number | undefined;
  if (isEdition(product)) {
    users = Math.floor(Number(body.users));
    years = Math.floor(Number(body.years));
    if (!Number.isFinite(users) || users < 1 || users > 9999) return NextResponse.json({ error: 'Users must be between 1 and 9999' }, { status: 400 });
    if (![1, 2, 3].includes(years)) return NextResponse.json({ error: 'Contract period must be 1, 2 or 3 years' }, { status: 400 });
  }

  const currency = CURRENCY; // always US dollars, whatever the request says

  const customerEmail = String(body.customerEmail || '').trim();
  if (customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) return NextResponse.json({ error: 'Customer email looks invalid' }, { status: 400 });

  const days = Number(body.expiresInDays);
  const productName = describePlan(product, users, years);
  const link: PaymentLink = {
    token: crypto.randomBytes(16).toString('base64url'),
    amount,
    currency,
    productName,
    plan: { product, users, years, basePrice, discount },
    note: String(body.note || '').trim().slice(0, 500) || undefined,
    customerName: String(body.customerName || '').trim().slice(0, 120) || undefined,
    customerEmail: customerEmail || undefined,
    status: 'active',
    expiresAt: Number.isFinite(days) && days > 0 ? new Date(Date.now() + Math.min(days, 365) * 86400000) : undefined,
    createdAt: new Date(),
  };

  const db = await getDb();
  await db.collection('paymentLinks').insertOne({ ...link });
  await logPaymentEvent('link_created', { linkToken: link.token, detail: { amount, currency, productName, basePrice, discount } });
  return NextResponse.json({ link: { ...link, url: `${siteUrl()}/pay/${link.token}` } });
}

/** Enable / disable a link: { token, status: 'active' | 'disabled' } */
async function handlePATCH(req: NextRequest) {
  const denied = unauthorized(req);
  if (denied) return denied;
  const { token, status } = await req.json().catch(() => ({}));
  if (typeof token !== 'string' || (status !== 'active' && status !== 'disabled')) return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  const db = await getDb();
  const res = await db.collection('paymentLinks').updateOne({ token }, { $set: { status } });
  if (!res.matchedCount) return NextResponse.json({ error: 'Link not found' }, { status: 404 });
  await logPaymentEvent(status === 'disabled' ? 'link_disabled' : 'link_enabled', { linkToken: token });
  return NextResponse.json({ ok: true });
}

async function guarded(label: string, run: () => Promise<NextResponse>) {
  try {
    return await run();
  } catch (err) {
    console.error(`[admin links ${label}]`, err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}

export const GET = (req: NextRequest) => guarded('GET', () => handleGET(req));
export const POST = (req: NextRequest) => guarded('POST', () => handlePOST(req));
export const PATCH = (req: NextRequest) => guarded('PATCH', () => handlePATCH(req));
