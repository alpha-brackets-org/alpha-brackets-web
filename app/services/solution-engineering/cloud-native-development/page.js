import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Cloud-Native Architecture",
    desc: "Design and implement applications using cloud-native technologies and microservices architecture.",
  },
  {
    title: "Containerization",
    desc: "Containerize applications using Docker and Kubernetes for scalable, portable deployments.",
  },
  {
    title: "Microservices Development",
    desc: "Build scalable microservices architectures that enable independent scaling and deployment.",
  },
  {
    title: "Cloud Integration",
    desc: "Integrate applications with cloud services for enhanced functionality and scalability.",
  },
];

const processItems = [
  {
    title: "Cloud Strategy",
    desc: "Define cloud-native architecture and select appropriate cloud technologies and services.",
  },
  {
    title: "Application Design",
    desc: "Design cloud-native applications with microservices architecture and containerization.",
  },
  {
    title: "Development & Testing",
    desc: "Develop and test cloud-native applications with focus on scalability and reliability.",
  },
  {
    title: "Deployment & Monitoring",
    desc: "Deploy applications to cloud environments with monitoring and maintenance support.",
  },
];

export const metadata = {
  title: "Cloud-Native Development | Alphabrackets",
};

export default function CloudNativeDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Cloud-Native Development"
        description="We develop scalable, resilient applications using cloud-native technologies and microservices architecture. Our cloud-native expertise ensures applications that can scale with your business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Architecture"
        sTitle="to Cloud"
        desc="Our cloud-native development process ensures scalable, resilient applications built for the cloud."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Cloud-native applications that scale with your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
