import { NextRequest, NextResponse } from 'next/server';
import { getDb, logPaymentEvent } from '@/lib/db';
import { requestInfo } from '@/lib/request-info';

/**
 * Customer-side engagement beacon for the Logs page timeline. Public, so it is deliberately narrow:
 * a fixed list of event names, the link must exist, nothing from the body is stored except the event
 * name, and each IP is limited to a handful of calls per minute.
 */
const ALLOWED = new Set(['link_opened', 'email_entered', 'form_started', 'terms_accepted', 'signature_added']);
const hits = new Map<string, { n: number; first: number }>();

export async function POST(req: NextRequest, ctx: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await ctx.params;
    const info = requestInfo(req);

    const now = Date.now();
    const h = hits.get(info.ip);
    if (!h || now - h.first > 60_000) hits.set(info.ip, { n: 1, first: now });
    else if (++h.n > 20) return NextResponse.json({ ok: true }); // silently drop floods

    const body = await req.json().catch(() => ({}));
    const event = String(body?.event || '');
    if (!ALLOWED.has(event) || typeof token !== 'string' || token.length > 64) return NextResponse.json({ ok: false }, { status: 400 });

    const db = await getDb();
    if (!(await db.collection('paymentLinks').findOne({ token }, { projection: { _id: 1 } }))) return NextResponse.json({ ok: false }, { status: 404 });

    // The only free-text we keep is the email typed on the first step, and only if it looks like one.
    const email = String(body?.email || '').trim().slice(0, 200);
    const detail = event === 'email_entered' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { email } : undefined;

    await logPaymentEvent(event, { linkToken: token, ip: info.ip, device: info.device, browser: info.browser, ua: info.ua, detail });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Pay event]', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
