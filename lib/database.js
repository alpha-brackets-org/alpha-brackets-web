import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import Contact from "@/models/Contact";
import Project from "@/models/Project";
import Blog from "@/models/Blog";
import Service from "@/models/Service";
import servicesData from "@/data/services.js";
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
    return await Contact.find().sort({ createdAt: -1 }).limit(limit).skip(skip);
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

// Initialize services data (call this once during app startup)
export async function initializeServicesData() {
  try {
    await connectDB();

    // Check if services already exist
    const existingServices = await Service.countDocuments();
    if (existingServices > 0) {
      console.log("Services already initialized");
      return;
    }

    console.log(`Initializing ${servicesData.length} services...`);

    // Use insertMany for better performance
    await Service.insertMany(
      servicesData.map((service) => ({
        ...service,
        _id: new mongoose.Types.ObjectId(service._id),
        parent_service: service.parent_service
          ? new mongoose.Types.ObjectId(service.parent_service)
          : null,
        // Convert full image paths to relative paths (remove /assets/imgs/ prefix)
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

    console.log(`Successfully initialized ${servicesData.length} services`);
  } catch (error) {
    console.error("Error initializing services:", error);
    throw new Error(`Failed to initialize services: ${error.message}`);
  }
}

export async function getServiceById(id) {
  try {
    await connectDB();
    const service = await Service.findOne({
      pragma_link: id,
    });

    if (!service) {
      return null;
    }

    // Convert Mongoose document to plain object to avoid circular references
    return JSON.parse(JSON.stringify(service));
  } catch (error) {
    throw new Error(`Failed to get service: ${error.message}`);
  }
}

export async function getServiceByPragmaLink(pragmaLink) {
  try {
    await connectDB();
    const service = await Service.findOne({
      pragma_link: pragmaLink,
      active: true,
    });

    if (!service) {
      return null;
    }

    // Convert Mongoose document to plain object to avoid circular references
    return JSON.parse(JSON.stringify(service));
  } catch (error) {
    throw new Error(`Failed to get service by pragma link: ${error.message}`);
  }
}

export async function getSubServicesByParentId(parentServiceId) {
  try {
    await connectDB();
    const services = await Service.find({
      parent_service: parentServiceId,
      active: true,
    }).sort({ createdAt: 1 });

    // Convert Mongoose documents to plain objects to avoid circular references
    return services.map((service) => JSON.parse(JSON.stringify(service)));
  } catch (error) {
    throw new Error(
      `Failed to get sub services by parent ID: ${error.message}`
    );
  }
}

export async function getSubServices(serviceId) {
  try {
    await connectDB();
    return await SubService.find({ parent_service: serviceId });
  } catch (error) {
    throw new Error(`Failed to get sub services: ${error.message}`);
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
