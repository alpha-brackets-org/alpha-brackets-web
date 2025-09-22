import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Fixed Scope & Timeline",
    desc: "Clear project scope, timeline, and deliverables with fixed pricing for predictable costs.",
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive quality assurance and testing to ensure deliverables meet requirements.",
  },
  {
    title: "Risk Management",
    desc: "Proactive risk management and mitigation strategies to ensure project success.",
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates and transparent communication throughout project lifecycle.",
  },
];

const processItems = [
  {
    title: "Project Planning",
    desc: "Define project scope, requirements, timeline, and deliverables with fixed pricing.",
  },
  {
    title: "Development",
    desc: "Execute development with regular milestones and quality checkpoints.",
  },
  {
    title: "Testing & QA",
    desc: "Comprehensive testing and quality assurance to ensure deliverables meet requirements.",
  },
  {
    title: "Delivery & Support",
    desc: "Deliver completed project with documentation and provide post-delivery support.",
  },
];

export const metadata = {
  title: "Fixed Cost Project | Alphabrackets",
};

export default function FixedCostProject() {
  return (
    <>
      <ServiceHeader
        title="Fixed Cost Project"
        description="We deliver projects with fixed scope, timeline, and pricing for predictable costs and clear deliverables. Our fixed cost project model ensures transparency and successful project delivery within budget."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Scope"
        sTitle="to Delivery"
        desc="Our fixed cost project model ensures predictable delivery with clear scope and timeline."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Fixed cost projects that deliver on time and budget"
        diffrentials={diffrentials}
      />
    </>
  );
}
