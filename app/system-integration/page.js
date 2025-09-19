import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "System Integration",
    desc: "Connect disparate systems and applications to create seamless, integrated workflows.",
  },
  {
    title: "API Development",
    desc: "Build robust APIs for system integration and data exchange between applications.",
  },
  {
    title: "Data Synchronization",
    desc: "Implement data synchronization solutions to ensure consistency across integrated systems.",
  },
  {
    title: "Legacy System Integration",
    desc: "Integrate legacy systems with modern applications for improved efficiency and functionality.",
  },
];

const processItems = [
  {
    title: "Integration Assessment",
    desc: "Evaluate existing systems and identify integration requirements and opportunities.",
  },
  {
    title: "Integration Design",
    desc: "Design integration architecture and select appropriate technologies and approaches.",
  },
  {
    title: "Implementation",
    desc: "Implement system integrations with proper error handling and monitoring.",
  },
  {
    title: "Testing & Support",
    desc: "Test integrations thoroughly and provide ongoing support and maintenance.",
  },
];

export const metadata = {
  title: "System Integration | Alphabrackets",
};

export default function SystemIntegration() {
  return (
    <>
      <ServiceHeader
        title="System Integration"
        description="We connect disparate systems and applications to create seamless, integrated workflows. Our system integration expertise ensures efficient data flow and improved operational efficiency across your organization."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Disconnected"
        sTitle="to Integrated"
        desc="Our system integration process ensures seamless connectivity and efficient data flow between systems."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="System integration that connects your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
