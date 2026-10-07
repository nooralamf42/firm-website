/** Who is calling: client IP plus a coarse device / browser label for the activity timeline. */
export function requestInfo(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : req.headers.get('x-real-ip') || 'unknown';
  const ua = (req.headers.get('user-agent') || '').slice(0, 300);
  const device = /mobile|android|iphone|ipad/i.test(ua) ? 'Mobile' : 'Desktop';
  const browser = ua.match(/(edg|chrome|firefox|safari|opera)[\/\s][\d.]+/i)?.[0] || ua.slice(0, 60) || 'Unknown';
  return { ip, ua, device, browser };
}
