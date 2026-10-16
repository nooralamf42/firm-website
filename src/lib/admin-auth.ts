/**
 * Admin auth for the payment-link panel: a single shared password (ADMIN_PASSWORD) and an HMAC-signed,
 * expiring, host-only cookie. The panel is served on its own subdomain (ADMIN_HOST); the cookie is never
 * sent to the main domain.
 *
 * Uses the Web Crypto API (crypto.subtle), not Node's `crypto` module: this file is imported by
 * src/proxy.ts (the app's middleware), and Next.js refuses to build middleware that pulls in Node-only
 * APIs when targeting Cloudflare Workers via OpenNext ("Node.js middleware is not currently supported").
 * Web Crypto works identically in Edge runtime, Workers, and modern Node, so this isn't a tradeoff.
 */

export const ADMIN_COOKIE = 'nt_admin';
const SESSION_HOURS = 12;

const te = new TextEncoder();

function toBase64Url(bytes: ArrayBuffer): string {
  let binary = '';
  for (const b of new Uint8Array(bytes)) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4);
  const binary = atob(b64);
  const arr = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
  return arr;
}

function toHex(bytes: ArrayBuffer): string {
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmacSha256(payload: string, key: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey('raw', te.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, te.encode(payload));
  return toBase64Url(sig);
}

async function sha256Hex(v: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', te.encode(v));
  return toHex(digest);
}

/** Fixed-length hex digests in, so this never leaks timing from early-exit comparison. */
function timingSafeEqualStr(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function secret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET?.trim();
  return s && s.length >= 16 ? s : null;
}

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD?.trim() && secret());
}

export async function checkAdminPassword(input: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected || !secret()) return false;
  // Hash both sides first so the comparison length never depends on the password length.
  const [h1, h2] = await Promise.all([sha256Hex(input), sha256Hex(expected)]);
  return timingSafeEqualStr(h1, h2);
}

export async function createAdminSession(): Promise<{ value: string; maxAge: number }> {
  const key = secret();
  if (!key) throw new Error('ADMIN_SESSION_SECRET is not configured');
  const exp = Date.now() + SESSION_HOURS * 3600 * 1000;
  const payload = toBase64Url(te.encode(JSON.stringify({ exp })).buffer as ArrayBuffer);
  return { value: `${payload}.${await hmacSha256(payload, key)}`, maxAge: SESSION_HOURS * 3600 };
}

export async function verifyAdminSession(cookie: string | undefined | null): Promise<boolean> {
  const key = secret();
  if (!key || !cookie) return false;
  const [payload, sig] = cookie.split('.');
  if (!payload || !sig) return false;
  const expectedSig = await hmacSha256(payload, key);
  if (!timingSafeEqualStr(sig, expectedSig)) return false;
  try {
    const { exp } = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
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
