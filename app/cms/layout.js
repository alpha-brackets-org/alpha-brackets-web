"use client";

import Script from "next/script";
import Link from "next/link";

export default function CmsLayout({ children }) {
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.href = "/cms/login";
    } catch (e) {
      alert("Failed to logout");
    }
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
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/cms/services">
                  Services
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/" target="_blank">
                  <i className="bi bi-globe me-1"></i>
                  View Website
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
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
