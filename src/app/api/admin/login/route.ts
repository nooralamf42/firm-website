import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, adminConfigured, checkAdminPassword, createAdminSession } from '@/lib/admin-auth';
import { clearRateLimit, isRateLimited, logPaymentEvent, recordRateLimitFailure } from '@/lib/db';

// Brute-force throttle: 5 wrong passwords per IP per 15 minutes. Backed by MongoDB (see
// isRateLimited/recordRateLimitFailure in lib/db.ts) rather than an in-memory Map, which isn't
// reliably shared across Cloudflare Workers invocations/isolates.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export async function POST(req: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: 'Admin login is not configured (ADMIN_PASSWORD / ADMIN_SESSION_SECRET)' }, { status: 503 });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const rateLimitKey = `admin_login:${ip}`;
  if (await isRateLimited(rateLimitKey, WINDOW_MS, MAX_ATTEMPTS)) {
    return NextResponse.json({ error: 'Too many attempts. Try again in a few minutes.' }, { status: 429 });
  }

  let password = '';
  try {
    password = String((await req.json())?.password ?? '');
  } catch {}

  if (!(await checkAdminPassword(password))) {
    await recordRateLimitFailure(rateLimitKey, WINDOW_MS);
    await logPaymentEvent('admin_login_failed', { ip });
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  await clearRateLimit(rateLimitKey);
  const session = await createAdminSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, session.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: session.maxAge,
  });
  await logPaymentEvent('admin_login', { ip });
  return res;
}
