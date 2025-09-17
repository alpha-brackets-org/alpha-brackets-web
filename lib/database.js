import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import Project from '@/models/Project';
import Blog from '@/models/Blog';
import Service from '@/models/Service';

// Contact operations
export async function createContact(contactData) {
  try {
    await connectDB();
    const contact = new Contact(contactData);
    return await contact.save();
  } catch (error) {
    throw new Error(`Failed to create contact: ${error.message}`);
  }
}

export async function getContacts(limit = 10, skip = 0) {
  try {
    await connectDB();
    return await Contact.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  } catch (error) {
    throw new Error(`Failed to get contacts: ${error.message}`);
  }
}

export async function getContactById(id) {
  try {
    await connectDB();
    return await Contact.findById(id);
  } catch (error) {
    throw new Error(`Failed to get contact: ${error.message}`);
  }
}

export async function updateContact(id, updateData) {
  try {
    await connectDB();
    return await Contact.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Failed to update contact: ${error.message}`);
  }
}

export async function deleteContact(id) {
  try {
    await connectDB();
    return await Contact.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Failed to delete contact: ${error.message}`);
  }
}

// Project operations
export async function createProject(projectData) {
  try {
    await connectDB();
    const project = new Project(projectData);
    return await project.save();
  } catch (error) {
    throw new Error(`Failed to create project: ${error.message}`);
  }
}

export async function getProjects(limit = 10, skip = 0, featured = false) {
  try {
    await connectDB();
    const query = featured ? { featured: true } : {};
    return await Project.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  } catch (error) {
    throw new Error(`Failed to get projects: ${error.message}`);
  }
}

export async function getProjectById(id) {
  try {
    await connectDB();
    return await Project.findById(id);
  } catch (error) {
    throw new Error(`Failed to get project: ${error.message}`);
  }
}

export async function updateProject(id, updateData) {
  try {
    await connectDB();
    updateData.updatedAt = new Date();
    return await Project.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Failed to update project: ${error.message}`);
  }
}

export async function deleteProject(id) {
  try {
    await connectDB();
    return await Project.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Failed to delete project: ${error.message}`);
  }
}

// Blog operations
export async function createBlog(blogData) {
  try {
    await connectDB();
    const blog = new Blog(blogData);
    return await blog.save();
  } catch (error) {
    throw new Error(`Failed to create blog: ${error.message}`);
  }
}

export async function getBlogs(limit = 10, skip = 0, published = true) {
  try {
    await connectDB();
    const query = published ? { published: true } : {};
    return await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(limit)
      .skip(skip);
  } catch (error) {
    throw new Error(`Failed to get blogs: ${error.message}`);
  }
}

export async function getBlogBySlug(slug) {
  try {
    await connectDB();
    return await Blog.findOne({ slug, published: true });
  } catch (error) {
    throw new Error(`Failed to get blog: ${error.message}`);
  }
}

export async function updateBlog(id, updateData) {
  try {
    await connectDB();
    updateData.updatedAt = new Date();
    return await Blog.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Failed to update blog: ${error.message}`);
  }
}

export async function deleteBlog(id) {
  try {
    await connectDB();
    return await Blog.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Failed to delete blog: ${error.message}`);
  }
}

// Service operations
export async function createService(serviceData) {
  try {
    await connectDB();
    const service = new Service(serviceData);
    return await service.save();
  } catch (error) {
    throw new Error(`Failed to create service: ${error.message}`);
  }
}

export async function getServices(active = true) {
  try {
    await connectDB();
    const query = active ? { active: true } : {};
    return await Service.find(query).sort({ createdAt: 1 });
  } catch (error) {
    throw new Error(`Failed to get services: ${error.message}`);
  }
}

export async function getServiceById(id) {
  try {
    await connectDB();
    return await Service.findById(id);
  } catch (error) {
    throw new Error(`Failed to get service: ${error.message}`);
  }
}

export async function updateService(id, updateData) {
  try {
    await connectDB();
    updateData.updatedAt = new Date();
    return await Service.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Failed to update service: ${error.message}`);
  }
}

export async function deleteService(id) {
  try {
    await connectDB();
    return await Service.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Failed to delete service: ${error.message}`);
  }
}
