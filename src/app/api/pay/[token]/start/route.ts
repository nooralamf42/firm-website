import { NextRequest, NextResponse } from 'next/server';
import { getDb, logPaymentEvent, type Payment, type PaymentLink } from '@/lib/db';
import { buildEpayCheckoutUrl, getEpayConfig } from '@/lib/epay';
import { requestInfo } from '@/lib/request-info';
import { CURRENCY } from '@/lib/products';

const clean = (v: unknown, max = 120) => String(v ?? '').trim().slice(0, max);
const SIGNATURE_PREFIX = 'data:image/png;base64,';
const MAX_SIGNATURE_CHARS = 400_000;

/** The customer submitted the order page (billing details, terms, signature): record the attempt and the
 *  signed consent, then send them to ePay. */
export async function POST(req: NextRequest, ctx: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await ctx.params;
    const cfg = getEpayConfig();
    if (!cfg) {
      console.error('[Pay] EPAY_PUBLIC_KEY / EPAY_TERNO are not configured');
      return NextResponse.json({ error: 'Online payments are not available right now.' }, { status: 503 });
    }

    const db = await getDb();
    const link = (await db.collection('paymentLinks').findOne({ token })) as (PaymentLink & { _id: unknown }) | null;
    if (!link) return NextResponse.json({ error: 'This payment link is not valid.' }, { status: 404 });
    if (link.status !== 'active') return NextResponse.json({ error: 'This payment link is no longer active.' }, { status: 410 });
    if (link.paidAt) return NextResponse.json({ error: 'This payment link has already been paid.' }, { status: 410 });
    if (link.expiresAt && new Date(link.expiresAt).getTime() < Date.now()) return NextResponse.json({ error: 'This payment link has expired.' }, { status: 410 });

    const body = await req.json().catch(() => ({}));
    const firstName = clean(body.firstName, 60);
    const lastName = clean(body.lastName, 60);
    const customer = {
      fullName: `${firstName} ${lastName}`.trim(),
      firstName,
      lastName,
      companyName: clean(body.companyName, 120) || undefined,
      ein: clean(body.ein, 20),
      email: clean(body.email),
      phone: clean(body.phone, 30),
      address: clean(body.address, 200),
      city: clean(body.city, 80),
      state: clean(body.state, 80) || undefined,
      zip: clean(body.zip, 20) || undefined,
      country: clean(body.country, 10).toUpperCase(),
    };
    if (!firstName || !lastName || !customer.companyName || !customer.address || !customer.city || customer.phone.length < 8) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }
    if (!/^\d{2}-\d{7}$/.test(customer.ein)) return NextResponse.json({ error: 'Please enter your EIN in the format 12-3456789.' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    // Not truncated: anything other than a 2-letter ISO code is rejected rather than guessed.
    if (!/^[A-Z]{2}$/.test(customer.country)) return NextResponse.json({ error: 'Please choose your country.' }, { status: 400 });

    // Signed consent is mandatory, enforced here and not just in the browser.
    const signature = String(body.signature ?? '');
    if (body.agreedToTerms !== true) return NextResponse.json({ error: 'You must agree to the Terms of Service to continue.' }, { status: 400 });
    if (!signature.startsWith(SIGNATURE_PREFIX) || signature.length < SIGNATURE_PREFIX.length + 50 || signature.length > MAX_SIGNATURE_CHARS) {
      return NextResponse.json({ error: 'Please sign to authorise this payment.' }, { status: 400 });
    }

    const { ip: ipAddress, ua, device, browser } = requestInfo(req);
    const now = new Date();
    const payment: Payment = {
      linkToken: link.token,
      amount: link.amount,
      currency: CURRENCY,
      productName: link.productName,
      plan: link.plan,
      customer,
      consent: { agreedToTerms: true, agreedAt: now, signature, signatureMode: body.signatureMode === 'type' ? 'type' : 'draw' },
      status: 'Pending',
      gateway: 'ePay',
      ipAddress,
      userAgent: ua,
      createdAt: now,
      updatedAt: now,
    };
    const inserted = await db.collection('payments').insertOne({ ...payment });
    const paymentId = inserted.insertedId.toString();
    await logPaymentEvent('checkout_started', { paymentId, linkToken: link.token, ip: ipAddress, device, browser, ua, detail: { amount: link.amount, currency: CURRENCY, email: customer.email, signed: true } });

    const base = (process.env.SITE_URL?.trim() || 'http://localhost:3000').replace(/\/+$/, '');
    const redirectUrl = buildEpayCheckoutUrl(cfg, {
      bill_ip: ipAddress,
      source_url: base,
      retrycount: '5',
      bill_amt: link.amount.toFixed(2),
      bill_currency: CURRENCY,
      product_name: link.productName,
      fullname: customer.fullName,
      bill_email: customer.email,
      bill_address: customer.address,
      bill_city: customer.city,
      bill_state: customer.state || '',
      bill_country: customer.country,
      bill_zip: customer.zip || '',
      bill_phone: customer.phone,
      // Our payment id: ePay echoes it back, and settleEpayPayment() looks the transaction up by it.
      reference: paymentId,
      webhook_url: `${base}/api/epay/webhook`,
      return_url: `${base}/pay/result?ref=${paymentId}`,
    });

    return NextResponse.json({ redirectUrl });
  } catch (error) {
    console.error('[Pay Start Error]', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
