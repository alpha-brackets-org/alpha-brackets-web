import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Cloud Data Platforms",
    desc: "Leverage AWS, Azure, and Google Cloud platforms for scalable data storage and processing.",
  },
  {
    title: "Data Lake Implementation",
    desc: "Implement data lakes for storing and processing large volumes of structured and unstructured data.",
  },
  {
    title: "Serverless Data Processing",
    desc: "Implement serverless data processing solutions for cost-effective and scalable data operations.",
  },
  {
    title: "Cloud Analytics",
    desc: "Enable cloud-based analytics and business intelligence for real-time insights and reporting.",
  },
];

const processItems = [
  {
    title: "Cloud Assessment",
    desc: "Evaluate cloud platforms and services to select optimal solutions for data storage and processing.",
  },
  {
    title: "Data Architecture Design",
    desc: "Design cloud-based data architecture for scalable data storage and processing.",
  },
  {
    title: "Implementation",
    desc: "Implement cloud data services and migrate existing data to cloud platforms.",
  },
  {
    title: "Optimization & Support",
    desc: "Optimize cloud data services for performance and cost, with ongoing support and monitoring.",
  },
];

export const metadata = {
  title: "Cloud Data Services | Alphabrackets",
};

export default function CloudDataServices() {
  return (
    <>
      <ServiceHeader
        title="Cloud Data Services"
        description="We leverage cloud platforms for scalable data storage, processing, and analytics solutions. Our cloud data expertise ensures cost-effective, scalable data systems that grow with your business needs."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From On-Premise"
        sTitle="to Cloud"
        desc="Our cloud data services implementation ensures scalable, cost-effective data solutions in the cloud."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Cloud data services that scale with your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
