import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.CMS_EMAIL;
    const adminPassword = process.env.CMS_PASSWORD;
    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "CMS credentials not configured" },
        { status: 500 }
      );
    }
    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    await createSession(email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
