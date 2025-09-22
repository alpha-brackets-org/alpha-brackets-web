import { NextResponse } from "next/server";
import { getServices, createService } from "@/lib/database";

export async function GET() {
  try {
    const services = await getServices(); // Get all services, including inactive
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const service = await createService(body);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
