import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Modern Web Technologies",
    desc: "Utilize React, Next.js, Vue.js, and other modern frameworks for optimal performance and user experience.",
  },
  {
    title: "Responsive Design",
    desc: "Create websites and web applications that work seamlessly across all devices and screen sizes.",
  },
  {
    title: "Performance Optimization",
    desc: "Implement best practices for fast loading times, SEO optimization, and excellent user experience.",
  },
  {
    title: "Scalable Architecture",
    desc: "Design web applications that can grow with your business and handle increasing user loads.",
  },
];

const processItems = [
  {
    title: "Requirements & Planning",
    desc: "Define project scope, user stories, and technical requirements for your web application.",
  },
  {
    title: "UI/UX Design",
    desc: "Create wireframes, mockups, and interactive prototypes for optimal user experience.",
  },
  {
    title: "Frontend Development",
    desc: "Build responsive user interfaces using modern frameworks and best practices.",
  },
  {
    title: "Backend Integration",
    desc: "Integrate with backend services, APIs, and databases for full functionality.",
  },
  {
    title: "Testing & Launch",
    desc: "Comprehensive testing and deployment to production with monitoring and support.",
  },
];

export const metadata = {
  title: "Web Development | Alphabrackets",
};

export default function WebDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Web Development"
        description="We create responsive, scalable web applications using modern technologies and best practices. From simple websites to complex web applications, we deliver solutions that drive business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Design"
        sTitle="to Deployment"
        desc="Our web development process ensures quality, performance, and scalability for your web applications."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Web applications that deliver results"
        diffrentials={diffrentials}
      />
    </>
  );
}
