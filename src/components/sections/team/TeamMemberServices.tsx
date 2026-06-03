import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/declarations/icons";

function TeamMemberServices() {
  return (
    <section className="services-inline2 section-padding">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Expertise</span>
              <h2 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h2>
            </div>
            <div className="ml-auto vi-more flex items-center">
              <Link
                href="/services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </Link>
              <ArrowUpRight className="w-5 h-5 ml-4" />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">01</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2 className="text-3xl font-bold">
                    UI / UX <span className="fw-200">Design</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <ul className="rest dot-list">
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  Modern Strategy
                </li>
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  UX & Design
                </li>
                <li className="fz-20 p-color opacity-70 font-medium">
                  Content Writing
                </li>
              </ul>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7 relative w-20 h-20">
                <Image
                  src="/assets/icons/services/5.png"
                  alt="UI/UX Design Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">02</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2 className="text-3xl font-bold">
                    Brand <span className="fw-200">Strategy</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <ul className="rest dot-list">
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  Modern Strategy
                </li>
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  UX & Design
                </li>
                <li className="fz-20 p-color opacity-70 font-medium">
                  Content Writing
                </li>
              </ul>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7 relative w-20 h-20">
                <Image
                  src="/assets/icons/services/4.png"
                  alt="Brand Strategy Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="item bord-thin-bottom">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">03</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2 className="text-3xl font-bold">
                    SEO / <span className="fw-200">Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <ul className="rest dot-list">
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  Modern Strategy
                </li>
                <li className="fz-20 p-color mb-5 opacity-70 font-medium">
                  UX & Design
                </li>
                <li className="fz-20 p-color opacity-70 font-medium">
                  Content Writing
                </li>
              </ul>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7 relative w-20 h-20">
                <Image
                  src="/assets/icons/services/3.png"
                  alt="SEO/Marketing Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMemberServices;
