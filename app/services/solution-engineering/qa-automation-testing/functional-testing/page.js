import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Comprehensive Test Coverage",
    desc: "Validate all application features and user workflows to ensure requirements are met.",
  },
  {
    title: "User-Centric Testing",
    desc: "Test applications from end-user perspective to ensure intuitive and error-free experiences.",
  },
  {
    title: "Edge Case Validation",
    desc: "Identify and test edge cases and boundary conditions to ensure robust application behavior.",
  },
  {
    title: "Integration Testing",
    desc: "Validate system integrations and data flow between different application components.",
  },
];

const processItems = [
  {
    title: "Test Case Design",
    desc: "Create comprehensive test cases covering all functional requirements and user scenarios.",
  },
  {
    title: "Test Execution",
    desc: "Execute functional tests systematically to validate application behavior and functionality.",
  },
  {
    title: "Defect Identification",
    desc: "Identify and document defects with detailed steps to reproduce and impact assessment.",
  },
  {
    title: "Validation & Retesting",
    desc: "Validate defect fixes and retest affected functionality to ensure quality.",
  },
];

export const metadata = {
  title: "Functional Testing | Alphabrackets",
};

export default function FunctionalTesting() {
  return (
    <>
      <ServiceHeader
        title="Functional Testing"
        description="We validate application functionality and user workflows to ensure your software meets requirements and delivers expected user experiences. Our functional testing ensures reliable, bug-free applications."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Requirements"
        sTitle="to Validation"
        desc="Our functional testing process ensures comprehensive validation of application functionality and user workflows."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Functional testing that ensures reliability"
        diffrentials={diffrentials}
      />
    </>
  );
}
