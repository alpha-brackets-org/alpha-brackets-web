import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Data Strategy Development",
    desc: "Create comprehensive data strategies that align with business objectives and drive measurable outcomes.",
  },
  {
    title: "Data Architecture Design",
    desc: "Design scalable data architectures and select appropriate technologies for optimal data management.",
  },
  {
    title: "Data Governance",
    desc: "Implement data governance frameworks to ensure data quality, security, and compliance.",
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights through advanced analytics and visualization.",
  },
];

const processItems = [
  {
    title: "Data Assessment",
    desc: "Evaluate current data landscape, identify gaps, and define requirements for data strategy.",
  },
  {
    title: "Strategy Development",
    desc: "Develop comprehensive data strategy aligned with business objectives and technical requirements.",
  },
  {
    title: "Implementation Planning",
    desc: "Create detailed implementation roadmap with timelines, resources, and success metrics.",
  },
  {
    title: "Execution & Monitoring",
    desc: "Execute data strategy implementation with ongoing monitoring and optimization support.",
  },
];

export const metadata = {
  title: "Data Strategy | Alphabrackets",
};

export default function DataStrategy() {
  return (
    <>
      <ServiceHeader
        title="Data Strategy"
        description="We develop comprehensive data strategies that align with your business objectives and drive measurable outcomes. Our data strategy expertise helps you unlock the full potential of your data assets."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Data"
        sTitle="to Strategy"
        desc="Our data strategy development process ensures comprehensive, actionable plans for data-driven business growth."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Data strategies that drive business growth"
        diffrentials={diffrentials}
      />
    </>
  );
}
