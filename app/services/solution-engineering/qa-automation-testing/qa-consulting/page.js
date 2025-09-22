import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "QA Strategy Development",
    desc: "Develop comprehensive QA strategies and frameworks tailored to your project requirements.",
  },
  {
    title: "Process Optimization",
    desc: "Optimize QA processes and workflows to improve efficiency and quality outcomes.",
  },
  {
    title: "Team Training",
    desc: "Provide training and mentoring to QA teams for improved testing capabilities.",
  },
  {
    title: "Quality Metrics",
    desc: "Establish quality metrics and KPIs to measure and improve software quality.",
  },
];

const processItems = [
  {
    title: "QA Assessment",
    desc: "Evaluate current QA processes and identify areas for improvement and optimization.",
  },
  {
    title: "Strategy Development",
    desc: "Develop comprehensive QA strategies and frameworks for improved quality outcomes.",
  },
  {
    title: "Process Implementation",
    desc: "Implement optimized QA processes and workflows across development teams.",
  },
  {
    title: "Training & Support",
    desc: "Provide training and ongoing support to ensure successful QA process adoption.",
  },
];

export const metadata = {
  title: "QA Consulting | Alphabrackets",
};

export default function QAConsulting() {
  return (
    <>
      <ServiceHeader
        title="QA Consulting"
        description="We provide expert QA consulting services to help you optimize your quality assurance processes and improve software quality. Our QA consulting expertise ensures comprehensive testing strategies and improved quality outcomes."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Assessment"
        sTitle="to Optimization"
        desc="Our QA consulting process ensures comprehensive quality assurance strategies and improved testing outcomes."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="QA consulting that improves software quality"
        diffrentials={diffrentials}
      />
    </>
  );
}
