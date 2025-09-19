import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Legacy System Modernization",
    desc: "Modernize legacy systems and processes to improve efficiency and enable digital capabilities.",
  },
  {
    title: "Digital Strategy Development",
    desc: "Develop comprehensive digital transformation strategies aligned with business objectives.",
  },
  {
    title: "Change Management",
    desc: "Implement change management strategies to ensure successful adoption of new technologies.",
  },
  {
    title: "Technology Integration",
    desc: "Integrate new technologies with existing systems for seamless digital transformation.",
  },
];

const processItems = [
  {
    title: "Digital Assessment",
    desc: "Evaluate current systems, processes, and digital maturity to identify transformation opportunities.",
  },
  {
    title: "Strategy Development",
    desc: "Develop comprehensive digital transformation strategy with clear objectives and roadmap.",
  },
  {
    title: "Implementation",
    desc: "Execute digital transformation initiatives with proper change management and support.",
  },
  {
    title: "Optimization & Support",
    desc: "Optimize digital solutions and provide ongoing support for continued success.",
  },
];

export const metadata = {
  title: "Digital Transformation | Alphabrackets",
};

export default function DigitalTransformation() {
  return (
    <>
      <ServiceHeader
        title="Digital Transformation"
        description="We help organizations modernize legacy systems and processes to unlock scalability, compliance, and future-ready digital capabilities. Our digital transformation expertise ensures successful adoption of new technologies and improved operational efficiency."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Legacy"
        sTitle="to Digital"
        desc="Our digital transformation process ensures successful modernization and adoption of digital technologies."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Digital transformation that modernizes your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
