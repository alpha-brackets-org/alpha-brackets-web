"use client";

import { useState, useEffect } from "react";

export default function ServicesListPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, active, inactive
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/admin/services");
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (
      !confirm(
        `Are you sure you want to delete "${title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setServices(services.filter((s) => s._id !== id));
      } else {
        alert("Failed to delete service");
      }
    } catch (error) {
      alert("Network error occurred");
    }
  };

  const filteredServices = services.filter((service) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && service.active) ||
      (filter === "inactive" && !service.active);

    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Services</h1>
        <a className="btn btn-primary" href="/cms/services/new">
          <i className="bi bi-plus-circle me-2"></i>
          New Service
        </a>
      </div>

      {/* Filters and Search */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Services</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
        <div className="col-md-3 text-end">
          <small className="text-muted">
            Showing {filteredServices.length} of {services.length} services
          </small>
        </div>
      </div>

      {filteredServices.length === 0 ? (
        <div className="text-center py-5">
          <div className="text-muted">
            {searchTerm || filter !== "all"
              ? "No services match your criteria"
              : "No services found"}
          </div>
          {!searchTerm && filter === "all" && (
            <a href="/cms/services/new" className="btn btn-primary mt-3">
              Create Your First Service
            </a>
          )}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Keywords</th>
                <th>Status</th>
                <th>Created</th>
                <th>Updated</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service) => (
                <tr key={service._id}>
                  <td>
                    <strong>{service.title}</strong>
                    {service.pragma_link && (
                      <div>
                        <small className="text-muted">
                          <a
                            href={service.pragma_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {service.pragma_link}
                          </a>
                        </small>
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ maxWidth: "300px" }}>
                      {service.description.length > 100
                        ? `${service.description.substring(0, 100)}...`
                        : service.description}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-1">
                      {service.keywords.slice(0, 3).map((keyword, index) => (
                        <span
                          key={index}
                          className="badge bg-secondary"
                          style={{ fontSize: "0.7em" }}
                        >
                          {keyword}
                        </span>
                      ))}
                      {service.keywords.length > 3 && (
                        <span
                          className="badge bg-light text-dark"
                          style={{ fontSize: "0.7em" }}
                        >
                          +{service.keywords.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        service.active ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {service.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <small>
                      {new Date(service.createdAt).toLocaleDateString()}
                    </small>
                  </td>
                  <td>
                    <small>
                      {new Date(service.updatedAt).toLocaleDateString()}
                    </small>
                  </td>
                  <td className="text-end">
                    <div className="btn-group" role="group">
                      <a
                        className="btn btn-sm btn-outline-info"
                        href={`/cms/services/${service._id}/details`}
                        title="View Details"
                      >
                        <i className="bi bi-eye"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-outline-primary"
                        href={`/cms/services/${service._id}`}
                        title="Edit Service"
                      >
                        <i className="bi bi-pencil"></i>
                      </a>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(service._id, service.title)}
                        title="Delete Service"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
