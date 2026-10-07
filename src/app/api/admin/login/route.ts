import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, adminConfigured, checkAdminPassword, createAdminSession } from '@/lib/admin-auth';
import { logPaymentEvent } from '@/lib/db';

// Per-instance brute-force throttle: 5 wrong passwords per IP per 15 minutes.
const attempts = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export async function POST(req: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: 'Admin login is not configured (ADMIN_PASSWORD / ADMIN_SESSION_SECRET)' }, { status: 503 });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const entry = attempts.get(ip);
  if (entry && now - entry.first < WINDOW_MS && entry.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many attempts. Try again in a few minutes.' }, { status: 429 });
  }

  let password = '';
  try {
    password = String((await req.json())?.password ?? '');
  } catch {}

  if (!checkAdminPassword(password)) {
    const fresh = !entry || now - entry.first >= WINDOW_MS;
    attempts.set(ip, { count: fresh ? 1 : entry!.count + 1, first: fresh ? now : entry!.first });
    await logPaymentEvent('admin_login_failed', { ip });
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  attempts.delete(ip);
  const session = createAdminSession();
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
