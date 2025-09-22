import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Web Development",
    desc: "Build responsive, scalable web applications using modern frameworks and best practices.",
    link: "/solution-engineering/custom-app-development/web-development",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Mobile App Development",
    desc: "Develop native and cross-platform mobile applications for iOS and Android platforms.",
    link: "/solution-engineering/custom-app-development/mobile-app-development",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Backend Development",
    desc: "Create robust backend systems, APIs, and microservices to power your applications.",
    link: "/solution-engineering/custom-app-development/backend-development",
  },
];

const diffrentials = [
  {
    title: "Full-Stack Expertise",
    desc: "End-to-end development capabilities covering frontend, backend, and mobile technologies.",
  },
  {
    title: "Modern Frameworks",
    desc: "Utilize cutting-edge frameworks and technologies for optimal performance and maintainability.",
  },
  {
    title: "Responsive Design",
    desc: "Create applications that work seamlessly across all devices and screen sizes.",
  },
  {
    title: "API-First Approach",
    desc: "Design applications with robust APIs for better integration and scalability.",
  },
];

const processItems = [
  {
    title: "Planning & Design",
    desc: "Define requirements, create wireframes, and design user interfaces and system architecture.",
  },
  {
    title: "Development",
    desc: "Build applications using agile methodologies with regular testing and iterations.",
  },
  {
    title: "Testing",
    desc: "Comprehensive testing including functionality, performance, and security testing.",
  },
  {
    title: "Deployment",
    desc: "Deploy applications to production environments with proper monitoring and documentation.",
  },
];

export const metadata = {
  title: "Custom App Development | Alphabrackets",
};

export default function CustomAppDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Custom App Development"
        description="We build tailored web, mobile, and backend applications that meet your specific business needs. Our full-stack expertise ensures scalable, maintainable, and high-performance solutions."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} />
      <ProcessTimeline
        bTitle="From Idea"
        sTitle="to Application"
        desc="Our development process ensures quality, scalability, and timely delivery of custom applications."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Custom applications that drive business value"
        diffrentials={diffrentials}
      />
    </>
  );
}
