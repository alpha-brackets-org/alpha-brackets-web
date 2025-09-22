import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import WhyCooseUs from "@/components/common/WhyChooseUs";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import ProcessSegments from "@/components/common/WhyChooseUs2";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Migration & Modernization",
    desc: "Streamline your cloud journey by modernizing legacy systems with containerization and future-ready technologies.",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Multi-Cloud Strategy",
    desc: "Optimize performance, flexibility, and costs with tailored multi-cloud strategies across AWS, Azure, Google Cloud, and more.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Cloud-Native Development",
    desc: "Develop fast, scalable, and resilient cloud-native applications using cutting-edge practices for seamless user experiences.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Infrastructure as Code (IaC)",
    desc: "Automate infrastructure with code for consistent, scalable, and rapid deployments while minimizing costs and errors.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Cloud Security & Compliance",
    desc: "Protect your cloud with robust security, real-time monitoring, and compliance with all major industry standards.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Cloud Cost Optimisation",
    desc: "Optimize cloud costs and maximize ROI by analyzing usage, removing inefficiencies, and implementing cost-saving strategies.",
  },
];

const diffrentials = [
  {
    title: "Cloud Security and Compliance",
    desc: "We optimize for top security and full regulatory compliance to protect your data.",
  },
  {
    title: "Deep Cloud Expertise",
    desc: "Specializing in multi-cloud, migration, and cloud-native solutions, we ensure seamless transitions and peak performance.",
  },
  {
    title: "Scalable, Flexible Solutions",
    desc: "Our strategies evolve with your business, adapting to future demands and technologies.",
  },
  {
    title: "Effective Change Management",
    desc: "Empowering teams with training and a culture that enables fast, smooth, successful transitions.",
  },
];

const processItems = [
  {
    title: "Requirement Analysis",
    desc: "We assess your current systems, business needs, technical prerequisites, and in-house skill gaps to define a tailored cloud strategy.",
  },
  
  {
    title: "Infrastructure Audit & Design",
    desc: "Our expert architects evaluate your cloud infrastructure and design scalable architectures, features, and workflows for seamless development.",
  },
  
  {
    title: "Development and Testing",
    desc: "We build a robust, cloud-enabled technology stack and conduct iterative testing to ensure scalability, reliability, and performance.",
  },
  {
    title: "Deployment and Migration",
    desc: "We deploy your applications to the cloud environment and migrate your data with minimal downtime and maximum security.",
  },
  {
    title: "Optimization and Support",
    desc: "Through continuous monitoring and optimization, we ensure peak performance and provide ongoing support for your cloud infrastructure.",
  },
];

export const metadata = {
  title: "Cloud and Infrastructure | Alphabrackets",
};

export default function CloudInfrastructure() {
  return (
    <>
      <ServiceHeader
        title="Cloud and Infrastructure"
        description="We build secure, scalable cloud environments that optimize performance, reliability, and cost-efficiency."
        videoLink="https://youtu.be/AzwC6umvd1s"
          bgImage="/assets/imgs/patterns/pattern.png"
        overlayDark="1"
      />
      <SubServices subServices={subServices} />
      <ProcessTimeline
        bTitle="Streamlined Cloud Delivery."
        sTitle="Our Process"
        desc="We guide you through the process of migrating your applications and data to the cloud, ensuring a smooth transition with minimal downtime and maximum productivity."
        items={processItems}
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="We deliver cloud strategies that drive measurable business outcomes."
        diffrentials={diffrentials}
      />
    </>
  );
}
