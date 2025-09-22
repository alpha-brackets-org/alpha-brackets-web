import connectDB from "@/lib/mongo";
import Project from "@/lib/models/Project";

export async function createProject(projectData) {
  await connectDB();
  const project = new Project(projectData);
  return project.save();
}

export async function getProjects(limit = 10, skip = 0, featured = false) {
  await connectDB();
  const query = featured ? { featured: true } : {};
  return Project.find(query).sort({ createdAt: -1 }).limit(limit).skip(skip);
}

export async function getProjectById(id) {
  await connectDB();
  return Project.findById(id);
}

export async function updateProject(id, updateData) {
  await connectDB();
  updateData.updatedAt = new Date();
  return Project.findByIdAndUpdate(id, updateData, { new: true });
}

export async function deleteProject(id) {
  await connectDB();
  return Project.findByIdAndDelete(id);
}
