import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Automated Testing",
    desc: "Implement comprehensive test automation frameworks to ensure consistent quality and faster delivery.",
    link: "/solution-engineering/qa-automation-testing/automated-testing",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Functional Testing",
    desc: "Validate application functionality and user workflows to ensure requirements are met.",
    link: "/solution-engineering/qa-automation-testing/functional-testing",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Performance Testing",
    desc: "Test application performance under various loads to ensure optimal user experience.",
    link: "/solution-engineering/qa-automation-testing/performance-testing",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "Security Testing",
    desc: "Identify and address security vulnerabilities to protect your applications and data.",
    link: "/solution-engineering/qa-automation-testing/security-testing",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "Mobile Testing",
    desc: "Comprehensive testing of mobile applications across different devices and platforms.",
    link: "/solution-engineering/qa-automation-testing/mobile-testing",
  },
  {
    img: "/assets/imgs/serv-icons/6.png",
    title: "API Testing",
    desc: "Validate API functionality, performance, and security to ensure reliable integrations.",
    link: "/solution-engineering/qa-automation-testing/api-testing",
  },
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Web Testing",
    desc: "Comprehensive web testing services to ensure applications work flawlessly across all browsers.",
    link: "/solution-engineering/qa-automation-testing/web-testing",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Usability Testing",
    desc: "Conduct comprehensive usability testing to ensure intuitive and user-friendly experiences.",
    link: "/solution-engineering/qa-automation-testing/usability-testing",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "QA Consulting",
    desc: "Expert QA consulting services to optimize quality assurance processes and improve software quality.",
    link: "/solution-engineering/qa-automation-testing/qa-consulting",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "RPA",
    desc: "Implement Robotic Process Automation solutions to automate repetitive business processes.",
    link: "/solution-engineering/qa-automation-testing/rpa",
  },
];

const diffrentials = [
  {
    title: "Comprehensive Test Coverage",
    desc: "End-to-end testing strategies covering functional, performance, security, and usability aspects.",
  },
  {
    title: "Automation Expertise",
    desc: "Advanced test automation frameworks and tools to accelerate testing cycles and improve reliability.",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous QA processes that ensure software quality and reduce post-launch issues.",
  },
  {
    title: "Continuous Testing",
    desc: "Integrate testing into CI/CD pipelines for continuous quality validation throughout development.",
  },
];

const processItems = [
  {
    title: "Test Strategy",
    desc: "Define comprehensive testing strategy, scope, and approach for your application.",
  },
  {
    title: "Test Planning",
    desc: "Create detailed test plans, cases, and automation frameworks for efficient testing.",
  },
  {
    title: "Test Execution",
    desc: "Execute comprehensive testing including functional, performance, and security testing.",
  },
  {
    title: "Defect Management",
    desc: "Identify, report, and track defects through resolution and retesting.",
  },
  {
    title: "Test Reporting",
    desc: "Provide detailed test reports and recommendations for quality improvement.",
  },
];

export const metadata = {
  title: "QA Automation & Testing | Alphabrackets",
};

export default function QAAutomationTesting() {
  return (
    <>
      <ServiceHeader
        title="QA Automation & Testing"
        description="We ensure software quality through comprehensive testing strategies and automation frameworks. Our QA expertise helps deliver reliable, bug-free applications that meet your business requirements."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} />
      <ProcessTimeline
        bTitle="From Planning"
        sTitle="to Quality"
        desc="Our comprehensive QA process ensures software quality and reliability through systematic testing approaches."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Quality assurance that builds confidence"
        diffrentials={diffrentials}
      />
    </>
  );
}
