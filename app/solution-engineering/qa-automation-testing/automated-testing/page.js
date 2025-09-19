import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Test Automation Frameworks",
    desc: "Implement robust automation frameworks using Selenium, Cypress, and other industry-leading tools.",
  },
  {
    title: "CI/CD Integration",
    desc: "Integrate automated testing into continuous integration and deployment pipelines.",
  },
  {
    title: "Cross-Browser Testing",
    desc: "Ensure application compatibility across different browsers and devices.",
  },
  {
    title: "Regression Testing",
    desc: "Automated regression testing to prevent new changes from breaking existing functionality.",
  },
];

const processItems = [
  {
    title: "Automation Strategy",
    desc: "Define automation scope, tools, and frameworks based on application requirements.",
  },
  {
    title: "Framework Development",
    desc: "Build reusable test automation frameworks and maintainable test scripts.",
  },
  {
    title: "Test Execution",
    desc: "Execute automated test suites and integrate with CI/CD pipelines for continuous testing.",
  },
  {
    title: "Maintenance & Reporting",
    desc: "Maintain automation scripts and provide detailed test execution reports.",
  },
];

export const metadata = {
  title: "Automated Testing | Alphabrackets",
};

export default function AutomatedTesting() {
  return (
    <>
      <ServiceHeader
        title="Automated Testing"
        description="We implement comprehensive test automation frameworks to ensure consistent quality and faster delivery. Our automation expertise helps reduce manual testing effort while improving test coverage and reliability."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Manual"
        sTitle="to Automated"
        desc="Our automated testing approach ensures faster, more reliable testing cycles with comprehensive coverage."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Automation that accelerates quality"
        diffrentials={diffrentials}
      />
    </>
  );
}
