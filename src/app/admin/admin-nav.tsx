'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === '/admin/login') return null;

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const tab = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-md text-sm ${pathname === href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold mr-4">National Tally · Admin</span>
          {tab('/admin', 'Create Link')}
          {tab('/admin/payments', 'Logs')}
        </div>
        <button onClick={logout} className="text-sm text-muted-foreground hover:text-foreground">Log out</button>
      </div>
    </header>
  );
}
