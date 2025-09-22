import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Load Testing",
    desc: "Test application performance under expected and peak user loads to ensure scalability.",
  },
  {
    title: "Stress Testing",
    desc: "Identify breaking points and performance bottlenecks under extreme load conditions.",
  },
  {
    title: "Performance Optimization",
    desc: "Identify and resolve performance issues to ensure optimal user experience.",
  },
  {
    title: "Capacity Planning",
    desc: "Provide recommendations for infrastructure scaling based on performance test results.",
  },
];

const processItems = [
  {
    title: "Performance Requirements",
    desc: "Define performance criteria, load scenarios, and success metrics for testing.",
  },
  {
    title: "Test Environment Setup",
    desc: "Configure test environments and tools to simulate realistic load conditions.",
  },
  {
    title: "Load Test Execution",
    desc: "Execute comprehensive performance tests under various load scenarios.",
  },
  {
    title: "Analysis & Optimization",
    desc: "Analyze results, identify bottlenecks, and provide optimization recommendations.",
  },
];

export const metadata = {
  title: "Performance Testing | Alphabrackets",
};

export default function PerformanceTesting() {
  return (
    <>
      <ServiceHeader
        title="Performance Testing"
        description="We test application performance under various loads to ensure optimal user experience and scalability. Our performance testing helps identify bottlenecks and optimize application speed and reliability."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Load"
        sTitle="to Optimization"
        desc="Our performance testing process ensures applications can handle expected loads and perform optimally."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Performance testing that ensures speed and scalability"
        diffrentials={diffrentials}
      />
    </>
  );
}
