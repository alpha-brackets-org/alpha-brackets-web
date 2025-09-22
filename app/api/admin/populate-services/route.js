import { NextResponse } from "next/server";
import { createService, getServices } from "@/lib/database";
import servicesData from "@/data/services.json";

export async function POST() {
  try {
    // Clear existing services first
    const existingServices = await getServices(false);
    console.log(`Found ${existingServices.length} existing services`);

    // Create services from JSON data
    const createdServices = [];

    for (const serviceData of servicesData) {
      try {
        // Remove _id from the data as MongoDB will generate it
        const { _id, ...serviceWithoutId } = serviceData;

        const service = await createService(serviceWithoutId);
        createdServices.push(service);
        console.log(`Created service: ${service.title}`);
      } catch (error) {
        console.error(
          `Failed to create service ${serviceData.title}:`,
          error.message
        );
      }
    }

    return NextResponse.json({
      message: `Successfully populated ${createdServices.length} services`,
      services: createdServices.map((s) => ({
        id: s._id,
        title: s.title,
        pragma_link: s.pragma_link,
      })),
    });
  } catch (error) {
    console.error("Error populating services:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const services = await getServices(false);
    return NextResponse.json({
      message: `Found ${services.length} services in database`,
      services: services.map((s) => ({
        id: s._id,
        title: s.title,
        pragma_link: s.pragma_link,
        active: s.active,
      })),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
