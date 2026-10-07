import type { Metadata } from 'next';
import AdminNav from './admin-nav';

export const metadata: Metadata = {
  title: 'Admin | National Tally Tech',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">{children}</div>
    </div>
  );
}
