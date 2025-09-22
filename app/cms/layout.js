"use client";

import Script from "next/script";
import Link from "next/link";

export default function CmsLayout({ children }) {
  const handleLogout = () => {
    alert("Logout functionality to be implemented");
  };

  return (
    <>
      {/* Add Bootstrap CSS and Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />

      {/* CMS Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/cms">
            <i className="bi bi-gear-fill me-2"></i>
            CMS Dashboard
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/cms">
                  <i className="bi bi-house me-1"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-briefcase me-1"></i>
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/cms/services">
                      <i className="bi bi-list me-2"></i>
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/cms/services/new">
                      <i className="bi bi-plus-circle me-2"></i>
                      New Service
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services">
                      <i className="bi bi-eye me-2"></i>
                      View Public Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-envelope me-1"></i>
                  Contacts
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/cms/contacts">
                      <i className="bi bi-inbox me-2"></i>
                      View Contacts
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-file-text me-1"></i>
                  Content
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/cms/blogs">
                      <i className="bi bi-newspaper me-2"></i>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/cms/projects">
                      <i className="bi bi-folder me-2"></i>
                      Projects
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/" target="_blank">
                  <i className="bi bi-globe me-1"></i>
                  View Website
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle me-1"></i>
                  Admin
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href="/cms/settings">
                      <i className="bi bi-gear me-2"></i>
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                      style={{
                        border: "none",
                        background: "none",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">{children}</div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
