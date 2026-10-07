import { MongoClient, type Db } from 'mongodb';

/**
 * MongoDB connection used only by the payment-link / admin features. The public marketing pages never
 * import this file, so a missing MONGODB_URI cannot affect them.
 */

const globalForMongo = globalThis as unknown as { _ntMongo?: Promise<MongoClient> };

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) throw new Error('MONGODB_URI is not configured');
  if (!globalForMongo._ntMongo) {
    globalForMongo._ntMongo = new MongoClient(uri).connect().catch((err) => {
      globalForMongo._ntMongo = undefined;
      throw err;
    });
  }
  const client = await globalForMongo._ntMongo;
  return client.db(process.env.MONGODB_DB?.trim() || 'nationaltally');
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
  abn?: string;
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
