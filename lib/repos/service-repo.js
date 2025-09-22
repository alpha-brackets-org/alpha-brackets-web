import connectDB from "@/lib/mongo";
import { revalidateTag } from "next/cache";
import mongoose from "mongoose";
import Service from "@/lib/models/Service";

//get service links
export async function getServiceLinks() {
  await connectDB();
  return Service.find({ active: true, parent_service: null })
    .select("title pragma_link")
    .lean();
}

//create new service
export async function createService(serviceData) {
  await connectDB();
  const service = new Service(serviceData);
  const saved = await service.save();
  // Invalidate caches related to services
  revalidateTag("service-links");
  revalidateTag(`service:${saved.pragma_link}`);
  return Service.findById(saved._id).lean();
}

//get all services
export async function getServices(active = true) {
  await connectDB();
  const query = active ? { active: true } : {};
  return Service.find(query).sort({ createdAt: 1 }).lean();
}

// get root services where parent_service is null
export async function getRootServices() {
  await connectDB();
  return Service.find({ parent_service: null }).sort({ createdAt: 1 }).lean();
}

//get service by id
export async function getServiceById(id) {
  await connectDB();
  return Service.findById(id).lean();
}

//get service by pragma link
export async function getServiceByPragmaLink(pragmaLink) {
  await connectDB();
  return Service.findOne({
    pragma_link: pragmaLink,
    active: true,
  }).lean();
}

//get sub services by parent id
export async function getSubServicesByParentId(parentServiceId) {
  await connectDB();
  return Service.find({
    parent_service: parentServiceId,
    active: true,
  })
    .sort({ createdAt: 1 })
    .lean();
}

//update service
export async function updateService(id, updateData) {
  await connectDB();
  updateData.updatedAt = new Date();
  const updated = await Service.findByIdAndUpdate(id, updateData, {
    new: true,
  }).lean();
  revalidateTag("service-links");
  revalidateTag(`service:${updated.pragma_link}`);
  return updated;
}

//delete service
export async function deleteService(id) {
  await connectDB();
  const deleted = await Service.findByIdAndDelete(id).lean();
  revalidateTag("service-links");
  revalidateTag(`service:${deleted.pragma_link}`);
  return deleted;
}

//initialize services data
export async function initializeServicesData(servicesData) {
  await connectDB();
  const existingServices = await Service.countDocuments();
  if (existingServices > 0) return;

  await Service.insertMany(
    servicesData.map((service) => ({
      ...service,
      _id: new mongoose.Types.ObjectId(service._id),
      parent_service: service.parent_service
        ? new mongoose.Types.ObjectId(service.parent_service)
        : null,
      bg_image:
        service.bg_image?.replace("/assets/imgs/", "") || service.bg_image,
      process: service.process
        ? {
            ...service.process,
            bg_image:
              service.process.bg_image?.replace("/assets/imgs/", "") ||
              service.process.bg_image,
          }
        : service.process,
    }))
  );
}
