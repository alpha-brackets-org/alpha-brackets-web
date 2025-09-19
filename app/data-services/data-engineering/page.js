import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Data Pipeline Development",
    desc: "Build robust data pipelines for efficient data collection, processing, and storage at scale.",
  },
  {
    title: "ETL/ELT Processes",
    desc: "Implement Extract, Transform, Load processes for data integration and transformation.",
  },
  {
    title: "Data Warehouse Design",
    desc: "Design and implement data warehouses for structured data storage and analytics.",
  },
  {
    title: "Real-time Processing",
    desc: "Implement real-time data processing systems for immediate insights and decision-making.",
  },
];

const processItems = [
  {
    title: "Data Architecture Design",
    desc: "Design scalable data architecture and select appropriate technologies for data engineering.",
  },
  {
    title: "Pipeline Development",
    desc: "Build data pipelines for data collection, processing, and storage with error handling.",
  },
  {
    title: "Data Quality & Validation",
    desc: "Implement data quality checks and validation processes to ensure reliable data.",
  },
  {
    title: "Monitoring & Optimization",
    desc: "Monitor data pipelines and optimize performance for efficient data processing.",
  },
];

export const metadata = {
  title: "Data Engineering | Alphabrackets",
};

export default function DataEngineering() {
  return (
    <>
      <ServiceHeader
        title="Data Engineering"
        description="We build robust data pipelines and infrastructure to collect, process, and store data efficiently at scale. Our data engineering expertise ensures reliable, scalable data systems that power your analytics and business intelligence."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Raw Data"
        sTitle="to Insights"
        desc="Our data engineering process ensures reliable, scalable data systems for analytics and business intelligence."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Data engineering that powers analytics and insights"
        diffrentials={diffrentials}
      />
    </>
  );
}
