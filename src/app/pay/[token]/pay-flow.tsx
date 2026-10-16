'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import SignatureCanvas from 'react-signature-canvas';
import { BusinessAddress, CompanyInfo, ContactInfo, Disclaimer, OrderSummary, PayShell, type SummaryLink } from '@/components/pay/pay-ui';

const caveat = Caveat({ subsets: ['latin'], display: 'swap' });

export interface FlowLink extends SummaryLink {
  token: string;
  note?: string;
  customerName?: string;
  customerEmail?: string;
}

type EventName = 'link_opened' | 'email_entered' | 'form_started' | 'terms_accepted' | 'signature_added';

/** Crops the drawn signature to its ink so the saved image is tight. */
function trimmedDataUrl(ref: React.RefObject<SignatureCanvas | null>): string {
  const pad = ref.current;
  if (!pad || pad.isEmpty()) return '';
  const canvas = pad.getCanvas();
  try {
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas.toDataURL('image/png');
    const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let top = height, left = width, right = -1, bottom = -1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (data[(y * width + x) * 4 + 3] > 0) {
          if (y < top) top = y;
          if (y > bottom) bottom = y;
          if (x < left) left = x;
          if (x > right) right = x;
        }
      }
    }
    if (right < 0) return canvas.toDataURL('image/png');
    const p = 6;
    const sx = Math.max(0, left - p), sy = Math.max(0, top - p);
    const sw = Math.min(width - sx, right - left + p * 2), sh = Math.min(height - sy, bottom - top + p * 2);
    const out = document.createElement('canvas');
    out.width = sw;
    out.height = sh;
    out.getContext('2d')?.putImageData(ctx.getImageData(sx, sy, sw, sh), 0, 0);
    return out.toDataURL('image/png');
  } catch {
    return canvas.toDataURL('image/png');
  }
}

export default function PayFlow({ link }: { link: FlowLink }) {
  const [step, setStep] = useState<'email' | 'order'>('email');
  const [email, setEmail] = useState(link.customerEmail || '');
  const [remember, setRemember] = useState(true);

  const [first, ...rest] = (link.customerName || '').trim().split(/\s+/);
  const [form, setForm] = useState({
    companyName: '', ein: '', email: link.customerEmail || '', phone: '',
    firstName: first || '', lastName: rest.join(' '),
    country: 'US', address: '', zipCode: '', city: '', state: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [signatureMode, setSignatureMode] = useState<'draw' | 'type'>('draw');
  const [typedSignature, setTypedSignature] = useState('');
  const [signature, setSignature] = useState('');
  const sigPad = useRef<SignatureCanvas>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Engagement events for the admin Logs timeline. Once per tab per link; a failure never affects the page.
  function track(event: EventName, extra?: Record<string, string>) {
    try {
      const key = `nt-pay-${event}-${link.token}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {}
    fetch(`/api/pay/${encodeURIComponent(link.token)}/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, ...extra }),
      keepalive: true,
    }).catch(() => {});
  }
  useEffect(() => { track('link_opened'); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onField = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  function onEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    track('email_entered', { email });
    setForm((f) => ({ ...f, email }));
    setStep('order');
    window.scrollTo({ top: 0 });
  }

  async function updateTyped(text: string) {
    setTypedSignature(text);
    if (!text.trim()) { setSignature(''); return; }
    const family = caveat.style.fontFamily;
    try { await document.fonts.load(`56px ${family}`); } catch {}
    const measure = document.createElement('canvas').getContext('2d');
    if (!measure) return;
    measure.font = `56px ${family}`;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(measure.measureText(text).width, 50) + 20;
    canvas.height = 70;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.font = `56px ${family}`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    setSignature(canvas.toDataURL('image/png'));
    track('signature_added');
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!signature) { setError('Please sign to authorise this payment.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/pay/${encodeURIComponent(link.token)}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, zip: form.zipCode, agreedToTerms, signature, signatureMode }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.redirectUrl) throw new Error(json.error || 'Failed to start checkout. Please try again.');
      window.location.href = json.redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start checkout. Please try again.');
      setSubmitting(false);
    }
  }

  if (step === 'email') {
    return (
      <PayShell stepper={1}>
        <div className="mt-20 flex items-center justify-center p-4">
          <form onSubmit={onEmailSubmit} className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/quickbooks_logo.png" className="mx-auto" alt="QuickBooks" width={200} height={100} />
            </div>
            <h2 className="text-xl text-gray-800 text-center mb-8">Let&apos;s get you in to QuickBooks</h2>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#2ca01c] rounded bg-white focus:outline-none focus:border-blue-500 text-gray-700"
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#2ca01c] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-3 text-gray-700">Remember me</label>
            </div>

            <button type="submit" className="w-full bg-[#2ca01c] hover:bg-[#248a18] text-white py-3 px-4 rounded font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Continue
            </button>
            <p className="text-gray-400 text-xs mt-5 leading-4">
              By selecting Continue, you agree to our{' '}
              <Link href="/policies/terms" target="_blank" className="text-blue-600 hover:text-blue-800">Terms of Service</Link>.
            </p>
            <div className="mt-8 pt-4 border-t border-gray-100 text-center"><Disclaimer /></div>
          </form>
        </div>
      </PayShell>
    );
  }

  return (
    <PayShell stepper={2}>
      <div className="min-h-screen py-8 px-5">
        <div className="max-w-7xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="max-w-[200px] mb-10 mt-5" src="/quickbooks_logo.png" alt="QuickBooks" />
          <div className="mb-8 mt-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
            <p className="text-gray-600">Enter billing information to proceed.</p>
            {link.note && <p className="text-gray-600 mt-2">{link.note}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form onSubmit={onSubmit} onFocus={() => track('form_started')} className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <CompanyInfo companyName={form.companyName} ein={form.ein} onChange={onField} />
                <div className="border-t border-gray-200 my-8" />
                <ContactInfo email={form.email} phone={form.phone} firstName={form.firstName} lastName={form.lastName} onChange={onField} />
                <div className="border-t border-gray-200 my-8" />
                <BusinessAddress country={form.country} address={form.address} zipCode={form.zipCode} city={form.city} state={form.state} onChange={onField} />
                <div className="border-t border-gray-200 my-8" />

                {/* Signature */}
                <div className="mt-6 mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please sign below to authorize this payment <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4 mb-3">
                    <button
                      type="button"
                      onClick={() => { setSignatureMode('draw'); setSignature(trimmedDataUrl(sigPad)); }}
                      className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${signatureMode === 'draw' ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      Draw Signature
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSignatureMode('type'); updateTyped(typedSignature); }}
                      className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${signatureMode === 'type' ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      Type Signature
                    </button>
                  </div>

                  {signatureMode === 'draw' ? (
                    <>
                      <div className="border-2 border-gray-300 rounded-md bg-white" style={{ height: '150px' }}>
                        <SignatureCanvas
                          ref={sigPad}
                          penColor="black"
                          canvasProps={{ className: 'w-full h-full' }}
                          onEnd={() => { const d = trimmedDataUrl(sigPad); setSignature(d); if (d) track('signature_added'); }}
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <button type="button" onClick={() => { sigPad.current?.clear(); setSignature(''); }} className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                          Clear Signature
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="border border-gray-300 rounded-md bg-white p-6">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Enter your full name</label>
                        <input
                          type="text"
                          placeholder="e.g. John Smith"
                          value={typedSignature}
                          onChange={(e) => updateTyped(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent text-gray-900"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Preview</label>
                        <div className="relative bg-gray-50 rounded-md border border-gray-200 h-32 flex items-center justify-center overflow-hidden">
                          <div className="absolute bottom-8 left-8 right-8 border-b-2 border-gray-300" />
                          <div className="absolute bottom-9 left-8 text-gray-400 font-bold text-lg">X</div>
                          {typedSignature ? (
                            <div className="text-5xl text-black z-10 select-none" style={{ fontFamily: caveat.style.fontFamily }}>{typedSignature}</div>
                          ) : (
                            <div className="text-gray-400 text-lg z-10 select-none italic pb-2">Your signature will appear here</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => { setAgreedToTerms(e.target.checked); if (e.target.checked) track('terms_accepted'); }}
                    className="h-4 w-4 accent-[#2ca01c] border-gray-300 rounded cursor-pointer mt-0.5"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer select-none">
                    I agree to the{' '}
                    <a href="/policies/terms" target="_blank" rel="noopener noreferrer" className="text-[#2ca01c] underline hover:text-[#248a18]">Terms of Service</a>.
                  </label>
                </div>

                <div className="mt-6"><Disclaimer /></div>

                {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}

                <button
                  disabled={submitting || !signature || !agreedToTerms}
                  type="submit"
                  className="mt-8 bg-[#2ca01c] hover:bg-[#248a18] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Connecting...' : 'Proceed to Payment'}
                </button>
              </div>
            </form>

            <div className="lg:col-span-1">
              <OrderSummary link={link} />
            </div>
          </div>
        </div>
      </div>
    </PayShell>
  );
}
