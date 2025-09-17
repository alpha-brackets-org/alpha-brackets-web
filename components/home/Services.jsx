"use client";
import React from "react";

export const servicesData = [
  {
    "title": "User Experience Design",
    "img": "/assets/imgs/serv-icons/6.png",
    "desc": "Craft intuitive, user-centered interfaces that elevate engagement, usability, and brand experience across platforms.",
    "link": "/user-experience-design"
  },
  {
    "title": "Custom Software Engineering",
    "img": "/assets/imgs/serv-icons/2.png",
    "desc": "Design and build tailored web, mobile, and cross-platform solutions using agile, scalable development practices.",
    "link": "/software-engineering",
  },
  {
    "title": "Workflow and Process Automation",
    "img": "/assets/imgs/serv-icons/3.png",
    "desc": "Automate repetitive tasks and workflows to boost operational efficiency, accuracy, and business agility.",
    "link": "/workflow-process-automation"
  },
  {
    "title": "Data, AI and ML",
    "img": "/assets/imgs/serv-icons/4.png",
    "desc": "Leverage AI, ML, and data insights to drive innovation, personalization, and smarter decision-making.  ",
    "link": "/data-ai-ml"
  },
  {
    "title": "Rapid App Development",
    "img": "/assets/imgs/serv-icons/5.png",
    "desc": "Accelerate MVPs and prototypes using no-code/low-code platforms for fast, iterative product delivery.",
    "link": "/rapid-app-development"
  },{
    "title": "Cloud and Infrastructure",
    "img": "/assets/imgs/serv-icons/5.png",
    "desc": "Deploy secure, scalable cloud environments that optimize performance, reliability, and cost-efficiency.",
    "link": "/cloud-and-infrastructure"
  },
  {
    "title": "Integration and Interoperability",
    "img": "/assets/imgs/serv-icons/1.png",
    "desc": "Connect systems, platforms, and data sources to create seamless, scalable, and intelligent digital ecosystems.",
    "link": "/integration-interoperability"
  },
  {
    "title": "Digital Transformation",
    "img": "/assets/imgs/serv-icons/5.png",
    "desc": "Modernize legacy systems and processes to unlock scalability, compliance, and future-ready digital capabilities.",
    "link": "/digital-transformation"
  },

]

function Services() {

  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Services</span>
              <h2 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  Tailored Digital <span className="fw-200">Solutions.</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((item, i) => (
            <div className="col-lg-6 mb-30" key={i}>
              <div className="item-box p-5 bg-sub">
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                <a href={item.link} className="rmore mt-30">
                  <span className="sub-title">Read More</span>
                  <img
                    src="/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
