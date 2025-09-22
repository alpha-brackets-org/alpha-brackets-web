"use client";
import React, { useEffect } from "react";

function Navbar({ services }) {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }
  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show");
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Services</span>
              </a>
              <ul className="dropdown-menu">
                {services.map((item, i) => (
                  <li key={i}>
                    <a
                      className="dropdown-item"
                      href={`/services/${item.pragma_link}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Solutions</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/page-about">
                    System Integration and Automation
                  </a>
                </li>
              </ul>
            </li>

            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Industries</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/page-about">
                    Healthcare
                  </a>
                </li>
              </ul>
            </li>

            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Insights</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/page-about">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-about">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-about">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-about">
                    News
                  </a>
                </li>
              </ul>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Company</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s connect</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
