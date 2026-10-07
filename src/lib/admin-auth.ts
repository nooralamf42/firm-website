import crypto from 'crypto';

/**
 * Admin auth for the payment-link panel: a single shared password (ADMIN_PASSWORD) and an HMAC-signed,
 * expiring, host-only cookie. The panel is served on its own subdomain (ADMIN_HOST); the cookie is never
 * sent to the main domain.
 */

export const ADMIN_COOKIE = 'nt_admin';
const SESSION_HOURS = 12;

function secret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET?.trim();
  return s && s.length >= 16 ? s : null;
}

function sign(payload: string, key: string): string {
  return crypto.createHmac('sha256', key).update(payload).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD?.trim() && secret());
}

export function checkAdminPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected || !secret()) return false;
  // Hash both sides first so the comparison length never depends on the password length.
  const h = (v: string) => crypto.createHash('sha256').update(v).digest('hex');
  return safeEqual(h(input), h(expected));
}

export function createAdminSession(): { value: string; maxAge: number } {
  const key = secret();
  if (!key) throw new Error('ADMIN_SESSION_SECRET is not configured');
  const exp = Date.now() + SESSION_HOURS * 3600 * 1000;
  const payload = Buffer.from(JSON.stringify({ exp })).toString('base64url');
  return { value: `${payload}.${sign(payload, key)}`, maxAge: SESSION_HOURS * 3600 };
}

export function verifyAdminSession(cookie: string | undefined | null): boolean {
  const key = secret();
  if (!key || !cookie) return false;
  const [payload, sig] = cookie.split('.');
  if (!payload || !sig || !safeEqual(sig, sign(payload, key))) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

/** Hostname (no port, lowercase) the admin panel is served on, e.g. "admin.nationaltallytech.com". */
export function adminHostname(): string | null {
  const raw = process.env.ADMIN_HOST?.trim().toLowerCase();
  return raw ? raw.replace(/:\d+$/, '') : null;
}

export function isAdminHost(hostHeader: string | null | undefined): boolean {
  const admin = adminHostname();
  if (!admin || !hostHeader) return false;
  return hostHeader.toLowerCase().replace(/:\d+$/, '') === admin;
}
