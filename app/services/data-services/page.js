import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Data Strategy",
    desc: "Develop comprehensive data strategies that align with your business objectives and drive measurable outcomes.",
    link: "/data-services/data-strategy",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Data Engineering",
    desc: "Build robust data pipelines and infrastructure to collect, process, and store data efficiently at scale.",
    link: "/data-services/data-engineering",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Cloud Data Services",
    desc: "Leverage cloud platforms for scalable data storage, processing, and analytics solutions.",
    link: "/data-services/cloud-data-services",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "Data Privacy & Security",
    desc: "Ensure compliance with data protection regulations and implement robust security measures.",
    link: "/data-services/data-privacy-and-security-services",
  },
];

const diffrentials = [
  {
    title: "Scalable Data Architecture",
    desc: "We design and implement data architectures that grow with your business needs and handle increasing data volumes.",
  },
  {
    title: "Real-time Data Processing",
    desc: "Enable real-time insights and decision-making with our advanced data processing and streaming solutions.",
  },
  {
    title: "Data Quality & Governance",
    desc: "Implement comprehensive data quality frameworks and governance policies to ensure reliable, accurate data.",
  },
  {
    title: "Compliance & Security",
    desc: "Ensure your data practices meet regulatory requirements and industry standards with our security expertise.",
  },
];

const processItems = [
  {
    title: "Data Assessment",
    desc: "Analyze your current data landscape, identify gaps, and define requirements for your data strategy.",
  },
  {
    title: "Architecture Design",
    desc: "Design scalable data architecture and select appropriate technologies for your specific needs.",
  },
  {
    title: "Implementation",
    desc: "Build and deploy data pipelines, storage solutions, and processing systems with best practices.",
  },
  {
    title: "Testing & Optimization",
    desc: "Validate data quality, performance, and security while optimizing for efficiency and cost.",
  },
  {
    title: "Monitoring & Support",
    desc: "Provide ongoing monitoring, maintenance, and support to ensure optimal data operations.",
  },
];

export const metadata = {
  title: "Data Services | Alphabrackets",
};

export default function DataServices() {
  return (
    <>
      <ServiceHeader
        title="Data Services"
        description="Transform your data into actionable insights with our comprehensive data services. From strategy and engineering to cloud solutions and security, we help you unlock the full potential of your data assets."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} />
      <ProcessTimeline
        bTitle="From Data"
        sTitle="to Insights"
        desc="Our structured approach ensures your data infrastructure is robust, scalable, and delivers measurable business value."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Data-driven solutions that drive business growth"
        diffrentials={diffrentials}
      />
    </>
  );
}
