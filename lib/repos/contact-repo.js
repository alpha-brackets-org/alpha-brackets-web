import connectDB from "@/lib/mongo";
import Contact from "@/lib/models/Contact";

export async function createContact(contactData) {
  await connectDB();
  const contact = await Contact.create(contactData);
  return contact.lean();
}

export async function getContacts(limit = 10, skip = 0) {
  await connectDB();
  return Contact.find().sort({ createdAt: -1 }).limit(limit).skip(skip).lean();
}

export async function getContactById(id) {
  await connectDB();
  return Contact.findById(id).lean();
}

export async function updateContact(id, updateData) {
  await connectDB();
  return Contact.findByIdAndUpdate(id, updateData, { new: true }).lean();
}

export async function deleteContact(id) {
  await connectDB();
  return Contact.findByIdAndDelete(id).lean();
}
