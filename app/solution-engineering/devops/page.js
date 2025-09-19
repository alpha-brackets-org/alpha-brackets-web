import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "CI/CD Pipeline Implementation",
    desc: "Implement continuous integration and continuous deployment pipelines for faster, reliable software delivery.",
  },
  {
    title: "Infrastructure Automation",
    desc: "Automate infrastructure provisioning and management using Infrastructure as Code (IaC) practices.",
  },
  {
    title: "Monitoring & Observability",
    desc: "Implement comprehensive monitoring, logging, and alerting systems for application and infrastructure.",
  },
  {
    title: "DevOps Culture",
    desc: "Foster DevOps culture and practices to improve collaboration between development and operations teams.",
  },
];

const processItems = [
  {
    title: "DevOps Assessment",
    desc: "Evaluate current development and operations processes to identify improvement opportunities.",
  },
  {
    title: "Pipeline Design",
    desc: "Design CI/CD pipelines and automation workflows for efficient software delivery.",
  },
  {
    title: "Implementation",
    desc: "Implement DevOps tools, processes, and automation to streamline development and deployment.",
  },
  {
    title: "Training & Support",
    desc: "Provide training and ongoing support to ensure successful DevOps adoption and optimization.",
  },
];

export const metadata = {
  title: "DevOps | Alphabrackets",
};

export default function DevOps() {
  return (
    <>
      <ServiceHeader
        title="DevOps"
        description="We implement DevOps practices and CI/CD pipelines to accelerate delivery and improve reliability. Our DevOps expertise helps streamline development, testing, and deployment processes for faster, more reliable software delivery."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Development"
        sTitle="to Deployment"
        desc="Our DevOps implementation ensures faster, more reliable software delivery through automation and best practices."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="DevOps that accelerates delivery and improves reliability"
        diffrentials={diffrentials}
      />
    </>
  );
}
