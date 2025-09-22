import React from "react";
import Image from "next/image";
import * as serviceRepo from "@/lib/repos/service-repo";

// export const servicesData = [
//   {
//     title: "User Experience Design",
//     img: "/assets/imgs/serv-icons/6.png",
//     desc: "Craft intuitive, user-centered interfaces that elevate engagement, usability, and brand experience across platforms.",
//     link: "/user-experience-design",
//   },
//   {
//     title: "Solution Engineering",
//     img: "/assets/imgs/serv-icons/2.png",
//     desc: "End-to-end software engineering solutions from discovery to deployment. Custom app development, cloud-native solutions, DevOps, and QA automation.",
//     link: "/solution-engineering",
//   },
//   {
//     title: "Data Services",
//     img: "/assets/imgs/serv-icons/4.png",
//     desc: "Transform your data into actionable insights with comprehensive data services. From strategy and engineering to cloud solutions and security.",
//     link: "/data-services",
//   },
//   {
//     title: "Workflow and Process Automation",
//     img: "/assets/imgs/serv-icons/3.png",
//     desc: "Automate repetitive tasks and workflows to boost operational efficiency, accuracy, and business agility.",
//     link: "/workflow-process-automation",
//   },
//   {
//     title: "Rapid App Development",
//     img: "/assets/imgs/serv-icons/5.png",
//     desc: "Accelerate MVPs and prototypes using no-code/low-code platforms for fast, iterative product delivery.",
//     link: "/rapid-app-development",
//   },
//   {
//     title: "Cloud and Infrastructure",
//     img: "/assets/imgs/serv-icons/5.png",
//     desc: "Deploy secure, scalable cloud environments that optimize performance, reliability, and cost-efficiency.",
//     link: "/cloud-and-infrastructure",
//   },
//   {
//     title: "System Integration",
//     img: "/assets/imgs/serv-icons/1.png",
//     desc: "Connect disparate systems and applications to create seamless, integrated workflows and improved operational efficiency.",
//     link: "/system-integration",
//   },
//   {
//     title: "Digital Transformation",
//     img: "/assets/imgs/serv-icons/5.png",
//     desc: "Modernize legacy systems and processes to unlock scalability, compliance, and future-ready digital capabilities.",
//     link: "/digital-transformation",
//   },
//   {
//     title: "Teams as a Service",
//     img: "/assets/imgs/serv-icons/2.png",
//     desc: "Dedicated development teams with specialized skills and expertise for your projects. Flexible scaling options.",
//     link: "/teams-as-a-service",
//   },
//   {
//     title: "Fixed Cost Project",
//     img: "/assets/imgs/serv-icons/3.png",
//     desc: "Projects with fixed scope, timeline, and pricing for predictable costs and clear deliverables.",
//     link: "/fixed-cost-project",
//   },
// ];

// Server Component - fetches data at build time
async function Services() {
  // Fetch services at build time
  const services = await serviceRepo.getRootServices();
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
          {services.map((item, i) => (
            <div className="col-lg-6 mb-30" key={i}>
              <div className="item-box p-5 bg-sub">
                <div
                  className="icon mb-40 opacity-5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#212121",
                    borderRadius: "100%",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.card.icon,
                    }}
                  />
                </div>
                <h4 className="mb-15">{item.title}</h4>
                <p>{item.description}</p>
                <a
                  href={`/services/${item.pragma_link}`}
                  className="rmore mt-30"
                >
                  <span className="sub-title">Read More</span>
                  <Image
                    src="/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                    width={20}
                    height={20}
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
