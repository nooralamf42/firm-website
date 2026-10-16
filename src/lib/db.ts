import { MongoClient, type Db } from 'mongodb';

/**
 * MongoDB connection used only by the payment-link / admin features. The public marketing pages never
 * import this file, so a missing MONGODB_URI cannot affect them.
 *
 * Deliberately does NOT cache the client/connection across invocations (an earlier version did, via a
 * globalThis-cached connect() promise — fine on a traditional long-lived Node server, but wrong on
 * Cloudflare Workers). Cloudflare tears down I/O objects — sockets included — tied to one request once
 * that request ends; a later invocation reusing a cached MongoClient reuses a socket the platform already
 * closed. That failure is silent (the exception gets swallowed rather than rejecting the promise) and
 * surfaces as Cloudflare's own 1101 "Worker threw exception" page on an unpredictable subset of requests.
 * Confirmed as documented Workers behavior (not a Mongo driver bug) while migrating the sibling
 * quickbooks-interprises project — connecting fresh every call is the fix there too.
 */
export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) throw new Error('MONGODB_URI is not configured');
  const client = await new MongoClient(uri).connect();
  return client.db(process.env.MONGODB_DB?.trim() || 'nationaltally');
}

/**
 * MongoDB-backed rate limiter, in place of a plain in-memory Map keyed by IP. A Worker isolate's
 * memory isn't reliably shared across requests/isolates on Cloudflare the way it is on a
 * traditional server, so a Map-based limiter would silently stop limiting anything after
 * migrating — the request would still be served, just without the brute-force protection working.
 * `rateLimits` has a TTL index (ensureRateLimitIndex, called once at startup) so old entries
 * clean up on their own.
 */
export async function isRateLimited(key: string, windowMs: number, maxAttempts: number): Promise<boolean> {
  const db = await getDb();
  const doc = await db.collection('rateLimits').findOne({ _id: key as never });
  if (!doc || !doc.windowStart) return false;
  const withinWindow = Date.now() - new Date(doc.windowStart).getTime() < windowMs;
  return withinWindow && doc.count >= maxAttempts;
}

/** Records one failed attempt, starting a fresh window if the previous one expired. */
export async function recordRateLimitFailure(key: string, windowMs: number): Promise<void> {
  const db = await getDb();
  await ensureRateLimitIndex(db);
  const now = new Date();
  const doc = await db.collection('rateLimits').findOne({ _id: key as never });
  const fresh = !doc || !doc.windowStart || Date.now() - new Date(doc.windowStart).getTime() >= windowMs;
  await db.collection('rateLimits').updateOne(
    { _id: key as never },
    fresh
      ? { $set: { count: 1, windowStart: now, expiresAt: new Date(now.getTime() + windowMs) } }
      : { $inc: { count: 1 }, $set: { expiresAt: new Date(now.getTime() + windowMs) } },
    { upsert: true },
  );
}

/** Clears a key's throttle state, e.g. on a successful login. */
export async function clearRateLimit(key: string): Promise<void> {
  const db = await getDb();
  await db.collection('rateLimits').deleteOne({ _id: key as never });
}

/** Safe to call repeatedly — createIndex is a no-op if the index already exists with the same spec. */
async function ensureRateLimitIndex(db: Db): Promise<void> {
  try {
    await db.collection('rateLimits').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
  } catch (err) {
    console.error('[rateLimits] Failed to ensure TTL index:', err);
  }
}

/** What was configured in the admin form; `amount` on the link is already basePrice − discount. */
export interface PlanConfig {
  product: string;
  users?: number;
  years?: number;
  basePrice: number;
  discount: number;
}

export interface PaymentLink {
  token: string;
  /** Total the customer pays (after discount). */
  amount: number;
  currency: string;
  productName: string;
  plan?: PlanConfig;
  note?: string;
  customerName?: string;
  customerEmail?: string;
  status: 'active' | 'disabled';
  expiresAt?: Date;
  createdAt: Date;
  paidAt?: Date;
}

export interface PaymentCustomer {
  fullName: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  /** US Employer Identification Number, format 12-3456789. */
  ein?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state?: string;
  zip?: string;
  country: string;
}

export interface Payment {
  linkToken: string;
  amount: number;
  currency: string;
  productName: string;
  plan?: PlanConfig;
  customer: PaymentCustomer;
  status: 'Pending' | 'Completed' | 'Failed';
  gateway: 'ePay';
  /** Set when ePay reported the transaction as a test (status 9). */
  testTransaction?: boolean;
  /** Terms acceptance + signature captured on the order page, before the customer is sent to ePay. */
  consent?: { agreedToTerms: boolean; agreedAt: Date; signature: string; signatureMode: 'draw' | 'type' };
  epayTransId?: string;
  epayMismatch?: string;
  failureReason?: string;
  cardType?: string;
  cardLast4?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
  paidAt?: Date;
  failedAt?: Date;
}

/** Append-only audit trail shown on the admin "Logs" page. `device`/`browser`/`ua` are filled for events
 *  that come from a customer's browser, so a session timeline can show who did what. */
export async function logPaymentEvent(
  type: string,
  data: { paymentId?: string; linkToken?: string; detail?: unknown; ip?: string; device?: string; browser?: string; ua?: string },
) {
  try {
    const db = await getDb();
    await db.collection('paymentEvents').insertOne({ type, ...data, at: new Date() });
  } catch (err) {
    console.error('[paymentEvents] could not write log:', err);
  }
}
