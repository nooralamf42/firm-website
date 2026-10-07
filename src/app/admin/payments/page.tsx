'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Eye, Filter, RefreshCw, Search, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

const TZ = 'Australia/Brisbane';

interface PaymentRow {
  _id: string;
  linkToken: string;
  amount: number;
  currency: string;
  productName: string;
  customer: {
    fullName: string; firstName?: string; lastName?: string; companyName?: string; abn?: string;
    email: string; phone: string; address: string; city: string; state?: string; zip?: string; country: string;
  };
  consent?: { agreedToTerms: boolean; agreedAt: string; signatureMode: 'draw' | 'type' };
  status: 'Pending' | 'Completed' | 'Failed';
  testTransaction?: boolean;
  epayTransId?: string;
  epayMismatch?: string;
  failureReason?: string;
  cardType?: string;
  cardLast4?: string;
  ipAddress?: string;
  createdAt: string;
  paidAt?: string;
}

interface EventRow {
  _id: string;
  type: string;
  at: string;
  paymentId?: string;
  linkToken?: string;
  ip?: string;
  device?: string;
  browser?: string;
  detail?: unknown;
}

interface LinkInfo { token: string; productName: string; amount: number; currency: string }

interface Session {
  key: string;
  linkToken: string;
  ip: string;
  events: EventRow[];
  device?: string;
  browser?: string;
  email?: string;
  paymentIds: Set<string>;
  last: string;
}

type Row =
  | { key: string; kind: 'payment'; ts: string; payment: PaymentRow; session?: Session }
  | { key: string; kind: 'session'; ts: string; session: Session };

const CUSTOMER_EVENTS = new Set([
  'link_opened', 'email_entered', 'form_started', 'terms_accepted', 'signature_added', 'checkout_started',
  'returned_to_site', 'webhook', 'payment_completed', 'payment_failed', 'amount_mismatch', 'reference_mismatch',
]);

const EVENT_LABEL: Record<string, string> = {
  link_opened: 'Link opened',
  email_entered: 'Email entered',
  form_started: 'Started filling in details',
  terms_accepted: 'Accepted the Terms of Service',
  signature_added: 'Signed the authorisation',
  checkout_started: 'Sent to ePay checkout',
  returned_to_site: 'Returned from ePay',
  webhook: 'ePay notification received',
  payment_completed: 'Payment confirmed by ePay',
  payment_failed: 'Payment failed',
  amount_mismatch: 'Amount mismatch flagged',
  reference_mismatch: 'Reference mismatch flagged',
};

const money = (n: number, c: string) => `${new Intl.NumberFormat('en-AU', { style: 'currency', currency: c }).format(n)} ${c}`;
const dateStr = (d: string) => new Date(d).toLocaleDateString('en-AU', { timeZone: TZ, day: '2-digit', month: '2-digit', year: 'numeric' });
const timeStr = (d: string) => new Date(d).toLocaleTimeString('en-AU', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' AEST';
const isoDay = (d: string) => new Date(d).toLocaleDateString('en-CA', { timeZone: TZ });

const selectCls =
  'px-3 py-1.5 border border-input rounded-md bg-transparent dark:bg-input/30 text-sm font-medium cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none';

function describeDetail(e: EventRow): string {
  const d = e.detail as Record<string, unknown> | undefined;
  if (!d || typeof d !== 'object') return '';
  if (e.type === 'email_entered') return String(d.email ?? '');
  if (e.type === 'checkout_started') return `${d.email ?? ''}${d.signed ? ' · signed' : ''}`.trim();
  if (e.type === 'webhook') return String(d.status ?? '');
  if (e.type === 'payment_completed') return [d.transID && `Transaction ${d.transID}`, d.brand && String(d.brand), d.last4 && `••${d.last4}`].filter(Boolean).join(' · ');
  if (e.type === 'payment_failed') return String(d.reason ?? '');
  return typeof e.detail === 'string' ? e.detail : JSON.stringify(e.detail);
}

export default function AdminLogsPage() {
  const [payments, setPayments] = useState<PaymentRow[]>([]);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [links, setLinks] = useState<LinkInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [mode, setMode] = useState<'All' | 'Test'>('All');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [amount, setAmount] = useState('All');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Row | null>(null);
  const [verifying, setVerifying] = useState('');
  const [note, setNote] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/payments');
    if (res.status === 401) { window.location.href = '/admin/login'; return; }
    const json = await res.json().catch(() => ({}));
    if (!res.ok) setError(json.error || 'Could not load logs');
    else { setPayments(json.payments); setEvents(json.events); setLinks(json.links); setError(''); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const linkMap = useMemo(() => new Map(links.map((l) => [l.token, l])), [links]);

  // ── Sessions: customer-facing events grouped by link + IP (payment events without an IP follow their payment).
  const { rows, systemEvents } = useMemo(() => {
    const payKey = new Map(payments.map((p) => [p._id, `${p.linkToken}__${p.ipAddress}`]));
    const sessions = new Map<string, Session>();
    const asc = [...events].reverse();
    const system: EventRow[] = [];

    for (const e of asc) {
      if (!CUSTOMER_EVENTS.has(e.type)) { system.push(e); continue; }
      const key = (e.paymentId && payKey.get(e.paymentId)) || (e.linkToken && e.ip ? `${e.linkToken}__${e.ip}` : '');
      if (!key) continue;
      let s = sessions.get(key);
      if (!s) {
        const [linkToken, ip] = key.split('__');
        s = { key, linkToken, ip, events: [], paymentIds: new Set(), last: e.at };
        sessions.set(key, s);
      }
      s.events.push(e);
      s.last = e.at;
      if (e.device) s.device = e.device;
      if (e.browser) s.browser = e.browser;
      if (e.paymentId) s.paymentIds.add(e.paymentId);
      const d = e.detail as { email?: string } | undefined;
      if (d?.email) s.email = d.email;
    }
    for (const p of payments) {
      const s = sessions.get(`${p.linkToken}__${p.ipAddress}`);
      if (s) { s.paymentIds.add(p._id); s.email = s.email || p.customer?.email; }
    }

    const list: Row[] = payments.map((p) => ({ key: p._id, kind: 'payment', ts: p.createdAt, payment: p, session: sessions.get(`${p.linkToken}__${p.ipAddress}`) }));
    for (const s of sessions.values()) {
      if (s.paymentIds.size === 0) list.push({ key: s.key, kind: 'session', ts: s.last, session: s });
    }
    list.sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime());
    return { rows: list, systemEvents: system.reverse().slice(0, 100) };
  }, [payments, events]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      const isPayment = r.kind === 'payment';
      if (mode === 'Test' && !(isPayment && r.payment.testTransaction)) return false;
      if (status !== 'All' && !(isPayment && r.payment.status === status)) return false;
      const link = linkMap.get(isPayment ? r.payment.linkToken : r.session.linkToken);
      const amt = isPayment ? r.payment.amount : link?.amount;
      if (amount !== 'All') {
        if (amt === undefined) return false;
        if (amount === '<50' && !(amt < 50)) return false;
        if (amount === '50-500' && !(amt >= 50 && amt <= 500)) return false;
        if (amount === '>500' && !(amt > 500)) return false;
      }
      const day = isoDay(r.ts);
      if (from && day < from) return false;
      if (to && day > to) return false;
      if (q) {
        const hay = isPayment
          ? [r.payment.customer?.fullName, r.payment.customer?.email, r.payment.customer?.companyName, r.payment.customer?.phone, r.payment.productName, r.payment.status, r.payment.linkToken, r.payment._id, r.payment.epayTransId, r.payment.ipAddress, dateStr(r.ts)]
          : [r.session.email, r.session.ip, link?.productName, r.session.linkToken, dateStr(r.ts)];
        if (!hay.filter(Boolean).join(' ').toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [rows, mode, status, amount, from, to, search, linkMap]);

  useEffect(() => { setPage(1); }, [mode, status, amount, from, to, search, perPage]);
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  async function verify(paymentId: string) {
    setVerifying(paymentId);
    setNote('');
    const res = await fetch('/api/admin/payments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paymentId }) });
    const json = await res.json().catch(() => ({}));
    setVerifying('');
    setNote(res.ok ? `ePay says: ${json.status}${json.detail ? ` (${json.detail})` : ''}` : json.error || 'Could not verify');
    load();
  }

  const statusBadge = (p: PaymentRow) =>
    p.status === 'Completed' ? <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-500 border border-green-500/30"><span className="w-1 h-1 rounded-full bg-green-500" />Completed</span>
    : p.status === 'Failed' ? <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-500 border border-red-500/30"><span className="w-1 h-1 rounded-full bg-red-500" />Failed</span>
    : <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30 animate-pulse"><span className="w-1 h-1 rounded-full bg-amber-500" />Pending</span>;

  return (
    <div className="bg-card border border-border rounded-2xl p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-semibold text-lg">Signed Consent Certificates</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Compliance records of signed terms and ePay payments logged in MongoDB.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-medium">
          <Button size="sm" variant={mode === 'All' ? 'default' : 'outline'} onClick={() => setMode('All')}><Filter size={12} className="mr-1.5" /> All Transactions</Button>
          <Button size="sm" variant={mode === 'Test' ? 'default' : 'outline'} onClick={() => setMode('Test')}><Filter size={12} className="mr-1.5" /> Test Transactions</Button>
          <Button size="sm" variant="outline" onClick={load} disabled={loading}><RefreshCw size={12} className={`mr-1.5 ${loading ? 'animate-spin' : ''}`} /> Refresh</Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 p-3 bg-muted/30 border border-border rounded-lg text-xs">
        <span className="font-semibold text-muted-foreground mr-2 uppercase tracking-wider text-[10px]">Filters:</span>
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search name, email, plan, date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 py-1.5 w-full border border-input rounded-md bg-transparent dark:bg-input/30 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectCls}>
          <option value="All" className="bg-background">All Statuses</option>
          <option value="Completed" className="bg-background">Completed Only</option>
          <option value="Pending" className="bg-background">Pending Only</option>
          <option value="Failed" className="bg-background">Failed Only</option>
        </select>
        <select value={amount} onChange={(e) => setAmount(e.target.value)} className={selectCls}>
          <option value="All" className="bg-background">All Amounts</option>
          <option value="<50" className="bg-background">Under 50</option>
          <option value="50-500" className="bg-background">50 to 500</option>
          <option value=">500" className="bg-background">Over 500</option>
        </select>
        <div className="flex items-center gap-1">
          <input type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} className={`${selectCls} [color-scheme:dark]`} />
          <span className="text-muted-foreground text-[10px]">to</span>
          <input type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} className={`${selectCls} [color-scheme:dark]`} />
        </div>
        <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} className={selectCls}>
          {[5, 10, 20, 50, 100].map((n) => <option key={n} value={n} className="bg-background">{n} / page</option>)}
        </select>
      </div>

      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      {note && <p className="text-sm text-muted-foreground">{note}</p>}

      {loading && rows.length === 0 ? (
        <div className="py-24 flex flex-col items-center"><Spinner /><p className="mt-4 text-xs text-muted-foreground">Retrieving logs from database...</p></div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-border rounded-xl">
          <h4 className="font-semibold text-sm">No Logs Registered</h4>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto mt-1.5 px-4">Once customers open payment links and sign, their records will appear here.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border text-muted-foreground font-semibold uppercase text-[10px] tracking-wider bg-muted/20">
                  <th className="py-3.5 px-4">Date &amp; Time</th>
                  <th className="py-3.5 px-4">Client Profile</th>
                  <th className="py-3.5 px-4">Product &amp; Amount</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {current.map((r) => {
                  const date = (
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <span className="font-bold block">{dateStr(r.ts)}</span>
                      <span className="text-muted-foreground block text-[10px] mt-0.5">{timeStr(r.ts)}</span>
                    </td>
                  );

                  if (r.kind === 'session') {
                    const s = r.session;
                    const link = linkMap.get(s.linkToken);
                    const last = s.events[s.events.length - 1];
                    return (
                      <tr key={r.key} className="bg-primary/5 hover:bg-primary/10 transition-colors">
                        {date}
                        <td className="py-4 px-4 align-top">
                          <div className="font-semibold text-primary text-sm flex items-center gap-1.5"><Eye size={14} /> Activity Session</div>
                          {s.email && <div className="font-medium mt-2">{s.email}</div>}
                          <div className="text-[10px] text-muted-foreground mt-1">IP: {s.ip}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">ID: {s.linkToken}</div>
                        </td>
                        <td className="py-4 px-4 align-top">
                          <div className="font-extrabold text-muted-foreground text-sm">{link ? money(link.amount, link.currency) : '--'}</div>
                          {link && <div className="text-[10px] text-muted-foreground mt-1.5 max-w-xs font-medium border border-border rounded-lg p-1.5">{link.productName}</div>}
                        </td>
                        <td className="py-4 px-4 align-top">
                          <div className="flex flex-col gap-1.5 bg-muted/30 p-2 rounded-lg border border-border">
                            <span className="text-[11px] font-bold">{s.events.length} Interaction{s.events.length !== 1 && 's'}</span>
                            <span className="text-[10px] text-muted-foreground">Latest: <span className="font-bold text-primary uppercase tracking-wider">{last ? last.type.replace(/_/g, ' ') : 'N/A'}</span></span>
                          </div>
                        </td>
                        <td className="py-4 px-4 align-top text-center whitespace-nowrap">
                          <Button size="sm" variant="outline" onClick={() => setSelected(r)}><Eye size={12} className="mr-1.5" /> Session Timeline</Button>
                        </td>
                      </tr>
                    );
                  }

                  const p = r.payment;
                  const c = p.customer;
                  return (
                    <tr key={r.key} className="hover:bg-muted/20 transition-colors">
                      {date}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-sm">{c?.fullName}</div>
                        <div className="text-muted-foreground font-medium mt-0.5">{c?.email}</div>
                        {c?.companyName && <div className="text-[10px] font-semibold text-purple-400 mt-1 bg-purple-500/10 px-2 py-0.5 rounded-md inline-block">{c.companyName}{c.abn ? ` · ABN ${c.abn}` : ''}</div>}
                        {c?.phone && <div className="text-[10px] text-muted-foreground mt-1">📞 {c.phone}</div>}
                        {c?.address && (
                          <div className="text-[10px] text-muted-foreground mt-2 bg-muted/30 p-2.5 rounded-lg border border-border leading-relaxed max-w-xs">
                            <span className="font-semibold text-foreground block text-[9px] uppercase tracking-wider mb-0.5">Billing Address:</span>
                            {[c.address, c.city, c.state, c.zip, c.country].filter(Boolean).join(', ')}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="font-extrabold text-primary text-sm">{money(p.amount, p.currency)}</div>
                        <div className="text-[10px] text-muted-foreground mt-1.5 max-w-xs font-medium border border-border rounded-lg p-1.5 leading-relaxed">{p.productName}</div>
                        {p.cardLast4 && <div className="text-[10px] font-semibold mt-1.5">💳 {p.cardType ? p.cardType.charAt(0).toUpperCase() + p.cardType.slice(1) : 'Card'} ending in {p.cardLast4}</div>}
                        {p.testTransaction && <span className="inline-block mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30">TEST</span>}
                      </td>
                      <td className="py-4 px-4 align-top whitespace-nowrap">
                        {statusBadge(p)}
                        {p.status === 'Failed' && p.failureReason && <div className="text-[9px] text-red-500 mt-1 max-w-[200px] whitespace-normal break-words">{p.failureReason}</div>}
                        {p.epayMismatch && <div className="text-[9px] text-amber-500 mt-1 max-w-[200px] whitespace-normal break-words">⚠ {p.epayMismatch}</div>}
                        {p.epayTransId && <div className="text-[9px] font-semibold text-muted-foreground mt-2 font-mono border border-border p-1 rounded inline-block">Ref: {p.epayTransId}</div>}
                        <div className="mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-bold bg-primary/10 text-primary border border-primary/30">EPAY</span></div>
                        {p.consent?.agreedToTerms && <div className="mt-1.5 text-[9px] text-green-500 flex items-center gap-1"><ShieldCheck size={10} /> Signed consent on file</div>}
                      </td>
                      <td className="py-4 px-4 align-top text-center whitespace-nowrap space-y-2">
                        <Button size="sm" variant="outline" className="w-full" onClick={() => setSelected(r)}><Eye size={12} className="mr-1.5" /> Session Timeline</Button>
                        {p.status !== 'Completed' && (
                          <Button size="sm" variant="ghost" className="w-full" disabled={verifying === p._id} onClick={() => verify(p._id)}>
                            {verifying === p._id ? 'Checking…' : 'Verify with ePay'}
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filtered.length} record{filtered.length !== 1 && 's'} · page {page} of {pages}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" disabled={page <= 1} onClick={() => setPage((n) => n - 1)}>Previous</Button>
              <Button size="sm" variant="outline" disabled={page >= pages} onClick={() => setPage((n) => n + 1)}>Next</Button>
            </div>
          </div>
        </>
      )}

      {/* Admin / system activity */}
      <details className="border-t border-border pt-4">
        <summary className="text-xs font-medium text-muted-foreground cursor-pointer select-none">System activity (admin logins, link changes) — last {systemEvents.length}</summary>
        <div className="mt-3 overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-xs">
            <thead className="text-left text-muted-foreground border-b border-border"><tr>{['Time', 'Event', 'Link', 'IP', 'Detail'].map((h) => <th key={h} className="px-3 py-2 font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {systemEvents.map((e) => (
                <tr key={e._id} className="border-b border-border last:border-0 align-top">
                  <td className="px-3 py-2 whitespace-nowrap">{dateStr(e.at)} {timeStr(e.at)}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{e.type}</td>
                  <td className="px-3 py-2 font-mono">{e.linkToken || '—'}</td>
                  <td className="px-3 py-2">{e.ip || '—'}</td>
                  <td className="px-3 py-2 font-mono break-all max-w-md">{e.detail === undefined ? '' : JSON.stringify(e.detail)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      {selected && <TimelineModal row={selected} linkMap={linkMap} onClose={() => setSelected(null)} />}
    </div>
  );
}

function TimelineModal({ row, linkMap, onClose }: { row: Row; linkMap: Map<string, LinkInfo>; onClose: () => void }) {
  const session = row.session;
  const payment = row.kind === 'payment' ? row.payment : undefined;
  const link = linkMap.get(payment ? payment.linkToken : session!.linkToken);
  const [signature, setSignature] = useState<{ signature: string; agreedAt: string; signatureMode: string } | null>(null);

  useEffect(() => {
    if (!payment?.consent) return;
    let live = true;
    fetch(`/api/admin/payments/${payment._id}/signature`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (live && j?.consent) setSignature(j.consent); })
      .catch(() => {});
    return () => { live = false; };
  }, [payment]);

  const evs = session ? session.events : [];
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start sm:items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-card border border-border rounded-2xl w-full max-w-2xl p-6 space-y-5 my-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">Activity Session Timeline</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{link ? `${link.productName} · ${money(link.amount, link.currency)}` : 'Payment link'}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-muted-foreground hover:text-foreground cursor-pointer"><X size={18} /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          {[
            ['Email', payment?.customer?.email || session?.email || '—'],
            ['IP address', session?.ip || payment?.ipAddress || '—'],
            ['Device', session?.device || '—'],
            ['Browser', session?.browser || '—'],
            ['Link', (payment?.linkToken || session?.linkToken) ?? '—'],
            ['Payment', payment ? `${payment.status}${payment.epayTransId ? ` · ${payment.epayTransId}` : ''}` : 'No payment started'],
          ].map(([k, v]) => (
            <div key={k} className="border border-border rounded-lg p-2.5">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
              <div className="font-medium break-all mt-0.5">{v}</div>
            </div>
          ))}
        </div>

        {payment?.consent && (
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-semibold mb-2"><ShieldCheck size={16} className="text-green-500" /> Signed consent</div>
            <p className="text-xs text-muted-foreground mb-3">
              Agreed to the Terms of Service on {dateStr(payment.consent.agreedAt)} {timeStr(payment.consent.agreedAt)} · {payment.consent.signatureMode === 'type' ? 'typed' : 'drawn'} signature
            </p>
            {signature ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={signature.signature} alt="Customer signature" className="bg-white rounded-md border border-border p-2 max-h-28" />
            ) : <Spinner />}
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold mb-3">Events</h3>
          {evs.length === 0 ? (
            <p className="text-xs text-muted-foreground">No customer activity recorded for this session.</p>
          ) : (
            <ol className="relative border-l border-border ml-2 space-y-4">
              {evs.map((e) => {
                const detail = describeDetail(e);
                return (
                  <li key={e._id} className="ml-4">
                    <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                    <div className="text-sm font-medium">{EVENT_LABEL[e.type] || e.type}</div>
                    <div className="text-[11px] text-muted-foreground">{dateStr(e.at)} {timeStr(e.at)}</div>
                    {detail && <div className="text-[11px] mt-0.5 break-all">{detail}</div>}
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
