import { NextResponse } from "next/server";
import * as contactRepo from "@/lib/repos/contact-repo";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const skip = parseInt(searchParams.get("skip") || "0", 10);
    const contacts = await contactRepo.getContacts(limit, skip);
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
