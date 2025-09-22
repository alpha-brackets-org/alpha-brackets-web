import connectDB from "@/lib/mongo";
import Blog from "@/lib/models/Blog";

export async function createBlog(blogData) {
  await connectDB();
  const blog = await Blog.create(blogData);
  return blog.toObject();
}

export async function getBlogs(limit = 10, skip = 0, published = true) {
  await connectDB();
  const query = published ? { published: true } : {};
  return Blog.find(query)
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(limit)
    .skip(skip);
}

export async function getBlogBySlug(slug) {
  await connectDB();
  return Blog.findOne({ slug, published: true });
}

export async function updateBlog(id, updateData) {
  await connectDB();
  updateData.updatedAt = new Date();
  return Blog.findByIdAndUpdate(id, updateData, { new: true });
}

export async function deleteBlog(id) {
  await connectDB();
  return Blog.findByIdAndDelete(id);
}
