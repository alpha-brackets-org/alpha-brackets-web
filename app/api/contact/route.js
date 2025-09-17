import { NextResponse } from 'next/server';
import { createContact } from '@/lib/database';
import { contactSchema } from '@/lib/schemas/contact';

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      return NextResponse.json({ error: 'Validation failed', details: flat }, { status: 400 });
    }

    const saved = await createContact(parsed.data);
    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}


