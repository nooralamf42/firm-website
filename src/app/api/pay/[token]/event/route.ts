import { NextRequest, NextResponse } from 'next/server';
import { getDb, isRateLimited, logPaymentEvent, recordRateLimitFailure } from '@/lib/db';
import { requestInfo } from '@/lib/request-info';

/**
 * Customer-side engagement beacon for the Logs page timeline. Public, so it is deliberately narrow:
 * a fixed list of event names, the link must exist, nothing from the body is stored except the event
 * name, and each IP is limited to a handful of calls per minute. Backed by MongoDB (see
 * isRateLimited/recordRateLimitFailure in lib/db.ts) rather than an in-memory Map, which isn't
 * reliably shared across Cloudflare Workers invocations/isolates.
 */
const ALLOWED = new Set(['link_opened', 'email_entered', 'form_started', 'terms_accepted', 'signature_added']);
const WINDOW_MS = 60_000;
const MAX_HITS = 20;

export async function POST(req: NextRequest, ctx: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await ctx.params;
    const info = requestInfo(req);

    const rateLimitKey = `pay_event:${info.ip}`;
    if (await isRateLimited(rateLimitKey, WINDOW_MS, MAX_HITS)) return NextResponse.json({ ok: true }); // silently drop floods
    await recordRateLimitFailure(rateLimitKey, WINDOW_MS);

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
