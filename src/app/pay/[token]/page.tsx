import type { Metadata } from 'next';
import { getDb, type PaymentLink } from '@/lib/db';
import { PayShell } from '@/components/pay/pay-ui';
import { CURRENCY } from '@/lib/products';
import PayFlow from './pay-flow';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Secure Payment Portal',
  description: 'Secure Payment Gateway',
  robots: { index: false, follow: false },
};

function Notice({ title, text, broken }: { title: string; text: string; broken?: boolean }) {
  return (
    <PayShell>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
          {/* The same "broken link" picture the QuickBooks payment links show for dead links. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={broken ? '/broken.jpg' : '/quickbooks_logo.png'} alt={broken ? 'Broken Link' : 'QuickBooks'} className={broken ? 'mx-auto mb-4' : 'mx-auto w-40 mb-4'} />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </PayShell>
  );
}

export default async function PayPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  let link: PaymentLink | null = null;
  try {
    const db = await getDb();
    link = (await db.collection('paymentLinks').findOne({ token })) as PaymentLink | null;
  } catch (err) {
    console.error('[Pay page] could not load link:', err);
    return <Notice title="Temporarily unavailable" text="We could not load this payment link. Please try again in a moment." />;
  }

  if (!link) return <Notice broken title="Link not found" text="This payment link is not valid. Please check the link or contact us for a new one." />;
  if (link.paidAt) return <Notice title="Already paid" text="This payment has already been completed. Thank you!" />;
  if (link.status !== 'active') return <Notice broken title="Link no longer active" text="This payment link has been disabled. Please contact us if you need a new one." />;
  if (link.expiresAt && new Date(link.expiresAt).getTime() < Date.now()) return <Notice broken title="Link expired" text="This payment link has expired. Please contact us for a new one." />;

  return (
    <PayFlow
      link={{
        token: link.token,
        productName: link.productName,
        amount: link.amount,
        currency: CURRENCY,
        plan: link.plan,
        note: link.note,
        customerName: link.customerName,
        customerEmail: link.customerEmail,
      }}
    />
  );
}
