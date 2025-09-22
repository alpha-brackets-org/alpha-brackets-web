"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getImageLabel } from "@/lib/imageOptions";

export default function ServiceDetailsPage() {
  const params = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/admin/services/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
        } else {
          setError("Failed to load service data");
        }
      } catch (error) {
        setError("Network error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchService();
    }
  }, [params.id]);

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

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!service) {
    return (
      <div className="alert alert-warning" role="alert">
        Service not found
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Service Details</h1>
        <div className="d-flex gap-2">
          <a className="btn btn-primary" href={`/cms/services/${service._id}`}>
            <i className="bi bi-pencil me-2"></i>
            Edit Service
          </a>
          <a className="btn btn-outline-secondary" href="/cms/services">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Services
          </a>
        </div>
      </div>

      <div className="row">
        {/* Basic Information */}
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Basic Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Title</h6>
                  <p>{service.title}</p>
                </div>
                <div className="col-md-6">
                  <h6>Status</h6>
                  <span
                    className={`badge ${
                      service.active ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {service.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h6>Pragma Link</h6>
                  <p>
                    {service.pragma_link ? (
                      <a
                        href={service.pragma_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.pragma_link}
                      </a>
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </p>
                </div>
                <div className="col-md-6">
                  <h6>Explore Link</h6>
                  <p>
                    {service.explore_link ? (
                      <a
                        href={service.explore_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.explore_link}
                      </a>
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h6>Description</h6>
                  <p>{service.description}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h6>Keywords</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {service.keywords.map((keyword, index) => (
                      <span key={index} className="badge bg-primary">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h6>Background Image</h6>
                  {service.bg_image ? (
                    <div>
                      <p>
                        <strong>{getImageLabel(service.bg_image)}</strong>
                      </p>
                      <img
                        src={service.bg_image}
                        alt="Background"
                        className="img-fluid rounded"
                        style={{ maxWidth: "300px" }}
                      />
                      <div className="mt-2">
                        <small className="text-muted">
                          <a
                            href={service.bg_image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Full Size
                          </a>
                        </small>
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted">Not provided</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Information */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Card Information</h5>
            </div>
            <div className="card-body">
              <h6>Card Intro</h6>
              <p>
                {service.card?.intro || (
                  <span className="text-muted">Not provided</span>
                )}
              </p>

              <h6>Card Icon</h6>
              <p>
                {service.card?.icon || (
                  <span className="text-muted">Not provided</span>
                )}
              </p>

              <h6>Read More Link</h6>
              <p>
                {service.card?.read_more ? (
                  <a
                    href={service.card.read_more}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.card.read_more}
                  </a>
                ) : (
                  <span className="text-muted">Not provided</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Information */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Call to Action</h5>
            </div>
            <div className="card-body">
              <h6>CTA Caption</h6>
              <p>
                {service.cta?.caption || (
                  <span className="text-muted">Not provided</span>
                )}
              </p>

              <h6>CTA Link</h6>
              <p>
                {service.cta?.link ? (
                  <a
                    href={service.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta.link}
                  </a>
                ) : (
                  <span className="text-muted">Not provided</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Process Information */}
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Process Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Process Background Image</h6>
                  {service.process?.bg_image ? (
                    <div>
                      <p>
                        <strong>
                          {getImageLabel(service.process.bg_image)}
                        </strong>
                      </p>
                      <img
                        src={service.process.bg_image}
                        alt="Process Background"
                        className="img-fluid rounded"
                        style={{ maxHeight: "350px", backgroundColor: "black" }}
                      />
                      <div className="mt-2">
                        <small className="text-muted">
                          <a
                            href={service.process.bg_image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Full Size
                          </a>
                        </small>
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted">Not provided</span>
                  )}
                </div>
                <div className="col-md-6">
                  <h6>Process Titles</h6>
                  <p>
                    <strong>First:</strong>{" "}
                    {service.process?.title_first || (
                      <span className="text-muted">Not provided</span>
                    )}
                  </p>
                  <p>
                    <strong>Second:</strong>{" "}
                    {service.process?.title_second || (
                      <span className="text-muted">Not provided</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h6>Process Description</h6>
                  <p>
                    {service.process?.desc || (
                      <span className="text-muted">Not provided</span>
                    )}
                  </p>
                </div>
              </div>

              {service.process?.steps && service.process.steps.length > 0 && (
                <div className="row">
                  <div className="col-12">
                    <h6>Process Steps</h6>
                    <div className="row">
                      {service.process.steps.map((step, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Step {index + 1}</h6>
                              <p className="card-text">
                                <strong>{step.title}</strong>
                              </p>
                              <p className="card-text">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Why Choose Us</h5>
            </div>
            <div className="card-body">
              <h6>Title</h6>
              <p>
                {service.why_choose_us?.title || (
                  <span className="text-muted">Not provided</span>
                )}
              </p>

              {service.why_choose_us?.items &&
                service.why_choose_us.items.length > 0 && (
                  <div>
                    <h6>Items</h6>
                    <div className="row">
                      {service.why_choose_us.items.map((item, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">{item.title}</h6>
                              <p className="card-text">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Breadcrumbs</h5>
            </div>
            <div className="card-body">
              {service.bread_crumbs && service.bread_crumbs.length > 0 ? (
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {service.bread_crumbs.map((breadcrumb, index) => (
                      <li key={index} className="breadcrumb-item">
                        <a href={breadcrumb.link}>{breadcrumb.name}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : (
                <span className="text-muted">No breadcrumbs defined</span>
              )}
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Metadata</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Created At</h6>
                  <p>{new Date(service.createdAt).toLocaleString()}</p>
                </div>
                <div className="col-md-6">
                  <h6>Updated At</h6>
                  <p>{new Date(service.updatedAt).toLocaleString()}</p>
                </div>
              </div>

              {service.parent_service && (
                <div className="row">
                  <div className="col-12">
                    <h6>Parent Service</h6>
                    <p>{service.parent_service}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
