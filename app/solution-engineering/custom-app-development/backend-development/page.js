import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Scalable Architecture",
    desc: "Design backend systems that can handle growing user loads and data volumes.",
  },
  {
    title: "API Development",
    desc: "Create robust RESTful and GraphQL APIs for seamless frontend-backend communication.",
  },
  {
    title: "Database Design",
    desc: "Design efficient database schemas and implement data management best practices.",
  },
  {
    title: "Security & Performance",
    desc: "Implement security measures and performance optimizations for reliable backend services.",
  },
];

const processItems = [
  {
    title: "Architecture Planning",
    desc: "Design backend system architecture, database schema, and API specifications.",
  },
  {
    title: "Development",
    desc: "Build backend services, APIs, and database systems using appropriate technologies.",
  },
  {
    title: "Integration",
    desc: "Integrate backend services with frontend applications and third-party services.",
  },
  {
    title: "Testing & Optimization",
    desc: "Test backend performance, security, and scalability with comprehensive testing.",
  },
  {
    title: "Deployment & Monitoring",
    desc: "Deploy backend services to production with monitoring and maintenance support.",
  },
];

export const metadata = {
  title: "Backend Development | Alphabrackets",
};

export default function BackendDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Backend Development"
        description="We build robust backend systems, APIs, and microservices that power your applications. Our backend expertise ensures scalability, security, and optimal performance for your business needs."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Architecture"
        sTitle="to Production"
        desc="Our backend development process ensures scalable, secure, and high-performance server-side solutions."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Backend systems that scale with your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
