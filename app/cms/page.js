export default function CmsDashboardPage() {
  return (
    <div>
      <h1 className="h3 mb-4">CMS Dashboard</h1>
      <p className="text-muted mb-4">
        Welcome to the Content Management System. Use the navigation bar above
        to manage your content.
      </p>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-briefcase me-2"></i>
                Services
              </h5>
              <p className="card-text">
                Manage services: create, edit, delete, and organize your service
                offerings.
              </p>
              <div className="mt-auto">
                <div className="d-grid gap-2">
                  <a href="/cms/services" className="btn btn-primary">
                    <i className="bi bi-list me-2"></i>
                    View All Services
                  </a>
                  <a
                    href="/cms/services/new"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Create New Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <i className="bi bi-envelope me-2"></i>
                Contacts
              </h5>
              <p className="card-text">
                View and manage inbound contact submissions from your website.
              </p>
              <div className="mt-auto">
                <div className="d-grid">
                  <a href="/cms/contacts" className="btn btn-primary">
                    <i className="bi bi-inbox me-2"></i>
                    View Contacts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <i className="bi bi-newspaper me-2"></i>
                Blogs
              </h5>
              <p className="card-text">
                Manage blog posts, articles, and content marketing materials.
              </p>
              <div className="mt-auto">
                <div className="d-grid gap-2">
                  <a href="/cms/blogs" className="btn btn-primary">
                    <i className="bi bi-list me-2"></i>
                    View All Blogs
                  </a>
                  <a href="/cms/blogs/new" className="btn btn-outline-primary">
                    <i className="bi bi-plus-circle me-2"></i>
                    Create New Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <i className="bi bi-folder me-2"></i>
                Projects
              </h5>
              <p className="card-text">
                Showcase your portfolio projects and case studies.
              </p>
              <div className="mt-auto">
                <div className="d-grid gap-2">
                  <a href="/cms/projects" className="btn btn-primary">
                    <i className="bi bi-list me-2"></i>
                    View All Projects
                  </a>
                  <a
                    href="/cms/projects/new"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Create New Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row mt-5">
        <div className="col-12">
          <h4 className="mb-3">Quick Stats</h4>
          <div className="row g-3">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-briefcase text-primary fs-1"></i>
                  <h5 className="card-title mt-2">Services</h5>
                  <p className="card-text text-muted">
                    Manage your service offerings
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-envelope text-success fs-1"></i>
                  <h5 className="card-title mt-2">Contacts</h5>
                  <p className="card-text text-muted">
                    View customer inquiries
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-newspaper text-info fs-1"></i>
                  <h5 className="card-title mt-2">Blogs</h5>
                  <p className="card-text text-muted">Content management</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-folder text-warning fs-1"></i>
                  <h5 className="card-title mt-2">Projects</h5>
                  <p className="card-text text-muted">Portfolio showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
