import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, isAdminHost, verifyAdminSession } from '@/lib/admin-auth';

/**
 * Keeps the admin panel on its own subdomain (ADMIN_HOST) and invisible on the main domain.
 *
 * The matcher below means this only runs for /admin, /api/admin and "/" on an admin.* host; every other
 * request to the public site (pages, assets, /pay, /api/epay…) never reaches this file.
 *  - Main domain: /admin and /api/admin answer 404, exactly as if they did not exist.
 *  - Admin host: "/" shows the dashboard; everything else under /admin needs the signed session cookie.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const onAdminHost = isAdminHost(req.headers.get('host'));

  if (!onAdminHost) {
    // Not the admin subdomain (or ADMIN_HOST is unset): pretend these routes do not exist.
    return NextResponse.rewrite(new URL('/__not-found', req.url), { status: 404 });
  }

  const headers = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };
  const isApi = pathname.startsWith('/api/admin');
  const isLogin = pathname === '/admin/login' || pathname === '/api/admin/login';

  if (pathname === '/') {
    if (!verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    const res = NextResponse.rewrite(new URL('/admin', req.url));
    Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }

  if (!isLogin && !verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) {
    if (isApi) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers });
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  const res = NextResponse.next();
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
    // Only the admin subdomain's root; the main site's "/" is not matched.
    { source: '/', has: [{ type: 'host', value: 'admin\\..+' }] },
  ],
};
