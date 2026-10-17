'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Clock, Hash, Mail, Package, DollarSign, XCircle } from 'lucide-react';
import { PayShell } from '@/components/pay/pay-ui';
import { CONTACT_EMAIL } from '@/lib/constants';

type State = 'checking' | 'paid' | 'pending' | 'failed' | 'problem' | 'test';
interface Paid { amount: number; currency: string; productName: string; transactionId?: string }

function ResultContent() {
  const ref = useSearchParams().get('ref');
  const [state, setState] = useState<State>('checking');
  const [paid, setPaid] = useState<Paid | null>(null);

  useEffect(() => {
    if (!ref) { setState('problem'); return; }
    let cancelled = false;
    // ePay may still be finalising when the customer lands here, so ask a few times before giving up.
    (async () => {
      for (let i = 0; i < 6 && !cancelled; i++) {
        try {
          const res = await fetch('/api/epay/sync-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId: ref }),
          });
          const json = await res.json();
          if (json.status === 'completed' || json.status === 'already_completed') {
            if (!cancelled) { setPaid(json.payment ?? null); setState('paid'); }
            return;
          }
          if (json.status === 'failed') return !cancelled && setState('failed');
          if (json.status === 'mismatch' || json.status === 'not_found') return !cancelled && setState('problem');
          if (json.status === 'test_ignored') return !cancelled && setState('test');
        } catch {}
        await new Promise((r) => setTimeout(r, 3000));
      }
      if (!cancelled) setState('pending');
    })();
    return () => { cancelled = true; };
  }, [ref]);

  const view = {
    checking: { Icon: Clock, bg: 'bg-gray-100', tone: 'text-gray-500', title: 'Confirming your payment…', text: 'Please wait a moment while we confirm with our payment partner.' },
    paid: { Icon: CheckCircle, bg: 'bg-green-50', tone: 'text-[#2ca01c]', title: 'Payment Successful!', text: 'Your payment has been processed and confirmed. Thank you for your business.' },
    pending: { Icon: Clock, bg: 'bg-amber-50', tone: 'text-amber-500', title: 'Payment is processing', text: 'We have not received the final confirmation yet. If your payment went through, we will confirm it shortly — no need to pay again.' },
    failed: { Icon: XCircle, bg: 'bg-red-50', tone: 'text-red-500', title: 'Payment was not completed', text: 'Your payment was declined or cancelled and you have not been charged. You can go back to your payment link and try again.' },
    problem: { Icon: XCircle, bg: 'bg-red-50', tone: 'text-red-500', title: 'We could not verify this payment', text: 'Please contact us with your payment details so we can check it for you.' },
    test: { Icon: XCircle, bg: 'bg-amber-50', tone: 'text-amber-500', title: 'No charge was made', text: 'Our payment partner processed this as a test transaction — your card was not charged. Please contact us so we can resolve this and complete your payment.' },
  }[state];

  const row = 'flex items-center justify-between px-5 py-3.5 border-b border-gray-100 last:border-0';
  const label = 'flex items-center gap-2 text-sm text-gray-500 font-medium';

  return (
    <PayShell>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <div className={`w-20 h-20 ${view.bg} rounded-full flex items-center justify-center mb-5`}>
              <view.Icon className={`${view.tone} w-11 h-11`} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{view.title}</h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{view.text}</p>
          </div>

          {state === 'paid' && paid && (
            <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
              <div className={row}>
                <span className={label}><DollarSign className="w-4 h-4" /> Amount Paid</span>
                <span className="text-sm font-bold text-gray-900">{new Intl.NumberFormat('en-US', { style: 'currency', currency: paid.currency }).format(paid.amount)} {paid.currency}</span>
              </div>
              <div className={row}>
                <span className={label}><Package className="w-4 h-4" /> Plan</span>
                <span className="text-sm text-gray-800 text-right max-w-[60%]">{paid.productName}</span>
              </div>
              {paid.transactionId && (
                <div className={row}>
                  <span className={label}><Hash className="w-4 h-4" /> Transaction ID</span>
                  <span className="text-xs font-mono text-gray-700 bg-gray-50 px-2 py-1 rounded">{paid.transactionId}</span>
                </div>
              )}
            </div>
          )}

          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">Questions about your order?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 text-[#2ca01c] hover:text-[#248a18] font-medium transition-colors">
              <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors">Return to home</Link>
          </div>
        </div>
      </div>
    </PayShell>
  );
}

export default function PayResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
