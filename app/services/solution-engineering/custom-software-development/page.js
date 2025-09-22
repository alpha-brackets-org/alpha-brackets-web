import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Custom App Development",
    desc: "Build tailored web, mobile, and cross-platform applications using modern development practices.",
    link: "/solution-engineering/custom-app-development",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Backend Development",
    desc: "Create robust backend systems, APIs, and microservices to power your custom software solutions.",
    link: "/solution-engineering/custom-app-development/backend-development",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Web Development",
    desc: "Build responsive, scalable web applications using modern frameworks and best practices.",
    link: "/solution-engineering/custom-app-development/web-development",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "Mobile App Development",
    desc: "Develop native and cross-platform mobile applications for iOS and Android platforms.",
    link: "/solution-engineering/custom-app-development/mobile-app-development",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "Cloud-Native Development",
    desc: "Develop scalable, resilient applications using cloud-native technologies and microservices architecture.",
    link: "/solution-engineering/cloud-native-development",
  },
  {
    img: "/assets/imgs/serv-icons/6.png",
    title: "System Integration",
    desc: "Connect disparate systems and applications to create seamless, integrated workflows.",
    link: "/system-integration",
  },
];

const diffrentials = [
  {
    title: "Custom Software Solutions",
    desc: "Build tailored software solutions that meet your specific business requirements and objectives.",
  },
  {
    title: "Scalable Architecture",
    desc: "Design and implement scalable software architectures that grow with your business needs.",
  },
  {
    title: "Modern Development Practices",
    desc: "Utilize modern development methodologies and best practices for reliable, maintainable software.",
  },
  {
    title: "End-to-End Development",
    desc: "Complete software development lifecycle from requirements analysis to deployment and maintenance.",
  },
];

const processItems = [
  {
    title: "Requirements Analysis",
    desc: "Thoroughly analyze business requirements and define software specifications and objectives.",
  },
  {
    title: "System Design",
    desc: "Design software architecture and system components for optimal performance and scalability.",
  },
  {
    title: "Development & Testing",
    desc: "Develop software using agile methodologies with comprehensive testing and quality assurance.",
  },
  {
    title: "Deployment & Support",
    desc: "Deploy software to production environments and provide ongoing maintenance and support.",
  },
];

export const metadata = {
  title: "Custom Software Development | Alphabrackets",
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Custom Software Development"
        description="We build tailored software solutions that meet your specific business requirements. Our custom software development expertise ensures scalable, maintainable, and high-performance applications that drive business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} />
      <ProcessTimeline
        bTitle="From Requirements"
        sTitle="to Software"
        desc="Our custom software development process ensures quality, scalability, and timely delivery of tailored solutions."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Custom software that drives business success"
        diffrentials={diffrentials}
      />
    </>
  );
}
