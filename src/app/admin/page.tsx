'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, Copy, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { CUSTOM_PRODUCTS, EDITIONS, YEAR_OPTIONS, isEdition, productLabel } from '@/lib/products';

interface LinkRow {
  token: string;
  url: string;
  amount: number;
  currency: string;
  productName: string;
  plan?: { basePrice: number; discount: number };
  note?: string;
  customerName?: string;
  customerEmail?: string;
  status: 'active' | 'disabled';
  expiresAt?: string;
  createdAt: string;
  paidAt?: string;
}

const money = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmt = (n: number, c: string) => `${new Intl.NumberFormat('en-AU', { style: 'currency', currency: c }).format(n)} ${c}`;
const when = (d?: string) => (d ? new Date(d).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : '—');

function linkState(l: LinkRow) {
  if (l.paidAt) return { label: 'Paid', cls: 'text-green-500' };
  if (l.status === 'disabled') return { label: 'Disabled', cls: 'text-muted-foreground' };
  if (l.expiresAt && new Date(l.expiresAt).getTime() < Date.now()) return { label: 'Expired', cls: 'text-amber-500' };
  return { label: 'Active', cls: 'text-primary' };
}

const selectCls =
  'h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none cursor-pointer';
const card = 'bg-card border border-border rounded-2xl';

export default function AdminCreateLinkPage() {
  const [links, setLinks] = useState<LinkRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [created, setCreated] = useState<LinkRow | null>(null);
  const [copied, setCopied] = useState('');

  // Form state (mirrors the QuickBooks Enterprises admin: product → users → term → price → discount)
  const [product, setProduct] = useState('silver');
  const [users, setUsers] = useState(1);
  const [years, setYears] = useState(1);
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [currency, setCurrency] = useState('AUD');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [note, setNote] = useState('');
  const [expiresInDays, setExpiresInDays] = useState('');

  const edition = isEdition(product);
  const base = parseFloat(price) || 0;
  const disc = parseFloat(discount) || 0;
  const total = Math.max(base - disc, 0);
  const invalid = !(base > 0) || disc > base || total <= 0;

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/links');
    if (res.status === 401) { window.location.href = '/admin/login'; return; }
    const json = await res.json().catch(() => ({}));
    if (!res.ok) setError(json.error || 'Could not load links');
    else { setLinks(json.links); if (json.defaultCurrency) setCurrency((c) => (c === 'AUD' ? json.defaultCurrency : c)); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  // Any change to the form invalidates the link that was just generated, like the original panel.
  const touch = <T,>(set: (v: T) => void) => (v: T) => { set(v); setCreated(null); };

  async function onGenerate() {
    setError('');
    if (disc > base) { setError('Discount cannot be greater than the price'); return; }
    setCreating(true);
    const res = await fetch('/api/admin/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product, users, years, price, discount, currency, customerName, customerEmail, note, expiresInDays }),
    });
    const json = await res.json().catch(() => ({}));
    setCreating(false);
    if (!res.ok) { setError(json.error || 'Could not create the link'); return; }
    setCreated(json.link);
    load();
  }

  async function setStatus(token: string, status: 'active' | 'disabled') {
    await fetch('/api/admin/links', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, status }) });
    load();
  }

  async function copy(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(url);
      setTimeout(() => setCopied(''), 1500);
    } catch {}
  }

  const summaryRows = useMemo(
    () => [
      ['Edition', productLabel(product)],
      ...(edition ? [['User Count', `${users} ${users === 1 ? 'User' : 'Users'}`], ['Subscription Term', `${years} ${years === 1 ? 'Year' : 'Years'}`]] : []),
      ['Base Amount', `${currency} ${money(base)}`],
    ],
    [product, edition, users, years, base, currency],
  );

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: configuration */}
        <div className={`${card} lg:col-span-7 p-6 md:p-8 space-y-6`}>
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Payment Gateway</p>
            <div className="rounded-md bg-primary text-primary-foreground text-xs font-semibold py-2 text-center">ePay</div>
          </div>

          <div>
            <h1 className="text-base font-semibold flex items-center gap-2"><Layers size={16} className="text-muted-foreground" /> Configure Invoice Tiers</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Define user counts, editions, and pricing rules.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 border-t border-border pt-5">
            <div className="space-y-1.5">
              <Label htmlFor="product">QuickBooks Edition</Label>
              <select id="product" value={product} onChange={(e) => touch(setProduct)(e.target.value)} className={selectCls}>
                <optgroup label="QuickBooks Enterprise" className="bg-background">
                  {EDITIONS.map((e) => <option key={e.value} value={e.value} className="bg-background">QuickBooks Enterprise 24.0 {e.name}</option>)}
                </optgroup>
                <optgroup label="Custom Products" className="bg-background">
                  {CUSTOM_PRODUCTS.map((p) => <option key={p.value} value={p.value} className="bg-background">{p.name}</option>)}
                </optgroup>
              </select>
            </div>
            {edition && (
              <div className="space-y-1.5">
                <Label htmlFor="users">Number of Users</Label>
                <Input id="users" type="number" min={1} value={users} onChange={(e) => touch(setUsers)(Math.max(1, parseInt(e.target.value) || 1))} />
              </div>
            )}
          </div>

          {edition && (
            <div className="space-y-1.5">
              <Label htmlFor="years">Contract Period</Label>
              <select id="years" value={years} onChange={(e) => touch(setYears)(parseInt(e.target.value))} className={selectCls}>
                {YEAR_OPTIONS.map((y) => <option key={y.value} value={y.value} className="bg-background">{y.label}</option>)}
              </select>
            </div>
          )}

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="price" className="font-semibold">Price</Label>
              <Input id="price" type="number" min={0} step="0.01" placeholder="e.g. 3500" value={price} onChange={(e) => touch(setPrice)(e.target.value)} className="border-primary font-semibold" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="currency">Currency</Label>
              <Input id="currency" maxLength={3} value={currency} onChange={(e) => touch(setCurrency)(e.target.value.toUpperCase())} className="uppercase" />
            </div>
          </div>

          <div className="border-t border-border pt-5 space-y-1.5">
            <Label htmlFor="discount" className="text-muted-foreground">Discount <span className="text-[10px] italic font-normal">(Optional secondary override)</span></Label>
            <Input id="discount" type="number" min={0} step="0.01" placeholder="e.g. 500" value={discount} onChange={(e) => touch(setDiscount)(e.target.value)} />
            {disc > base && <p className="text-xs text-destructive">Discount cannot be greater than the price.</p>}
          </div>

          <details className="border-t border-border pt-5">
            <summary className="text-xs font-medium text-muted-foreground cursor-pointer select-none">Optional: customer details, note and expiry</summary>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="space-y-1.5">
                <Label htmlFor="customerName">Customer name</Label>
                <Input id="customerName" maxLength={120} value={customerName} onChange={(e) => touch(setCustomerName)(e.target.value)} placeholder="pre-fills the form" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="customerEmail">Customer email</Label>
                <Input id="customerEmail" type="email" value={customerEmail} onChange={(e) => touch(setCustomerEmail)(e.target.value)} placeholder="pre-fills the form" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="note">Note shown to the customer</Label>
                <Input id="note" maxLength={500} value={note} onChange={(e) => touch(setNote)(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="expiresInDays">Expires in (days)</Label>
                <Input id="expiresInDays" type="number" min={1} max={365} value={expiresInDays} onChange={(e) => touch(setExpiresInDays)(e.target.value)} placeholder="never" />
              </div>
            </div>
          </details>
        </div>

        {/* Right: summary + generate */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`${card} p-6 space-y-4`}>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Summary Preview</h2>
            <div className="space-y-3 text-xs font-medium border-t border-border pt-3">
              {summaryRows.map(([k, v]) => (
                <div key={k} className="flex justify-between text-muted-foreground"><span>{k}:</span><span className="text-foreground font-semibold text-right">{v}</span></div>
              ))}
              {disc > 0 && (
                <div className="flex justify-between text-muted-foreground"><span>Discount Override:</span><span className="text-red-500 font-semibold">-{currency} {money(disc)}</span></div>
              )}
              <div className="flex justify-between items-center font-bold text-sm mt-4 pt-4 border-t border-border">
                <span>Total Price:</span>
                <span className="text-primary text-lg font-extrabold">{currency} {money(total)}</span>
              </div>
            </div>
          </div>

          <div className={`${card} p-6 space-y-4`}>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Generate Link</h2>
            {created ? (
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-muted/30 p-3 text-xs font-mono break-all select-all">{created.url}</div>
                <Button onClick={() => copy(created.url)} className="w-full">
                  {copied === created.url ? <><Check size={14} className="mr-2" /> Copied!</> : <><Copy size={14} className="mr-2" /> Copy to Clipboard</>}
                </Button>
              </div>
            ) : (
              <Button onClick={onGenerate} disabled={creating || invalid} className="w-full">
                {creating ? <Spinner /> : 'Generate Payment Link'}
              </Button>
            )}
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          </div>
        </div>
      </div>

      <section className={`${card} p-6`}>
        <h2 className="font-display text-lg font-bold mb-3">Recent payment links</h2>
        {loading ? (
          <Spinner />
        ) : links.length === 0 ? (
          <p className="text-sm text-muted-foreground">No payment links yet.</p>
        ) : (
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground border-b border-border">
                <tr>{['Created', 'Product', 'Amount', 'Customer', 'Status', 'Expires', ''].map((h) => <th key={h} className="px-3 py-2 font-medium whitespace-nowrap">{h}</th>)}</tr>
              </thead>
              <tbody>
                {links.map((l) => {
                  const st = linkState(l);
                  return (
                    <tr key={l.token} className="border-b border-border last:border-0">
                      <td className="px-3 py-2 whitespace-nowrap">{when(l.createdAt)}</td>
                      <td className="px-3 py-2">{l.productName}</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {fmt(l.amount, l.currency)}
                        {l.plan && l.plan.discount > 0 && <div className="text-[10px] text-muted-foreground">after {money(l.plan.discount)} discount</div>}
                      </td>
                      <td className="px-3 py-2">{l.customerName || l.customerEmail || '—'}</td>
                      <td className={`px-3 py-2 font-medium ${st.cls}`}>{st.label}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{when(l.expiresAt)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-right space-x-2">
                        <Button size="sm" variant="outline" onClick={() => copy(l.url)}>{copied === l.url ? 'Copied' : 'Copy link'}</Button>
                        {!l.paidAt && (
                          <Button size="sm" variant="ghost" onClick={() => setStatus(l.token, l.status === 'active' ? 'disabled' : 'active')}>
                            {l.status === 'active' ? 'Disable' : 'Enable'}
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
