import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Discovery Workshop",
    desc: "Validate your product idea in under four weeks and align your team with an iterative, collaborative approach.",
    link: "/discovery-workshop",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Custom Software Development",
    desc: "Build tailored software solutions that meet your specific business requirements and objectives.",
    link: "/solution-engineering/custom-software-development",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Custom App Development",
    desc: "Build tailored web, mobile, and cross-platform applications using modern development practices.",
    link: "/solution-engineering/custom-app-development",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "Cloud-Native Development",
    desc: "Develop scalable, resilient applications using cloud-native technologies and microservices architecture.",
    link: "/solution-engineering/cloud-native-development",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "DevOps",
    desc: "Implement DevOps practices and CI/CD pipelines to accelerate delivery and improve reliability.",
    link: "/solution-engineering/devops",
  },
  {
    img: "/assets/imgs/serv-icons/6.png",
    title: "QA Automation & Testing",
    desc: "Ensure software quality through comprehensive testing strategies and automation frameworks.",
    link: "/solution-engineering/qa-automation-testing",
  },
];

const diffrentials = [
  {
    title: "Agile Development Methodology",
    desc: "We follow agile practices to deliver high-quality software with faster time-to-market and continuous improvement.",
  },
  {
    title: "Modern Technology Stack",
    desc: "Leverage cutting-edge technologies and frameworks to build scalable, maintainable, and future-ready solutions.",
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive testing and quality assurance processes ensure reliable, bug-free software delivery.",
  },
  {
    title: "DevOps Integration",
    desc: "Seamless integration of development and operations for faster deployment and improved collaboration.",
  },
];

const processItems = [
  {
    title: "Requirements Analysis",
    desc: "Thoroughly analyze business requirements and technical specifications to define project scope.",
  },
  {
    title: "Architecture Design",
    desc: "Design scalable system architecture and select appropriate technologies for optimal performance.",
  },
  {
    title: "Development",
    desc: "Build applications using agile methodologies with regular iterations and stakeholder feedback.",
  },
  {
    title: "Testing & QA",
    desc: "Comprehensive testing including unit, integration, and user acceptance testing to ensure quality.",
  },
  {
    title: "Deployment & Support",
    desc: "Deploy applications to production environments and provide ongoing maintenance and support.",
  },
];

export const metadata = {
  title: "Solution Engineering | Alphabrackets",
};

export default function SolutionEngineering() {
  return (
    <>
      <ServiceHeader
        title="Solution Engineering"
        description="We deliver end-to-end software engineering solutions from discovery to deployment. Our agile approach ensures quality delivery, continuous optimization, and scalable applications that drive business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} noBottomPadding={true} />
      <ProcessTimeline
        bTitle="From Concept"
        sTitle="to Production"
        desc="Our comprehensive engineering process ensures scalable, reliable, and maintainable software solutions."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Engineering excellence that drives business success"
        diffrentials={diffrentials}
      />
    </>
  );
}
