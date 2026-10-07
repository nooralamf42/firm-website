import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { ADMIN_COOKIE, verifyAdminSession } from '@/lib/admin-auth';
import { getDb } from '@/lib/db';

/** The signed consent for one payment. Kept out of the list response because the image is large. */
export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await ctx.params;
    if (!ObjectId.isValid(id)) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const db = await getDb();
    const p = await db.collection('payments').findOne({ _id: new ObjectId(id) }, { projection: { consent: 1 } });
    if (!p?.consent) return NextResponse.json({ error: 'No signed consent on this payment' }, { status: 404 });
    return NextResponse.json({ consent: p.consent });
  } catch (err) {
    console.error('[admin signature]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
