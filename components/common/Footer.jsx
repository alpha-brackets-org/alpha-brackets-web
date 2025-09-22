import React from "react";

function Footer({ services }) {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-140 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <a href="/" className="mb-30 md-mb80">
              <div className="logo icon-img-100 md-mb80">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </div>
            </a>

            <div className="column md-mb50">
              <h6 className="p-color fw-400">
                5919 Building BOK, Office 14 <br /> Shah Shams Colony
                <br /> Multan, Pakistan
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">hello@alphabrackets.com</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+92 320 (333) 43 43</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Services</h6>
              <ul className="rest fz-14 opacity-7">
                {services.map((item, i) => (
                  <li className="mb-15" key={i}>
                    <a href={`/services/${item.pragma_link}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Insights</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">Blog</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Case Studies</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">News</a>
                </li>
                <li className="mb-15">
                  <a href="/page-contact">Podcasts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Company</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/careers">Careers</a>
                </li>
                <li className="mb-15">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">© 2025 Alpha Brackets LLC Pakistan</p>
          </div>
        </div>
      </div>
      <div className="circle-blur" style={{ bottom: "0px" }}>
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
