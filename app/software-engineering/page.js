import Header from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import WhyCooseUs from "@/components/common/WhyChooseUs";
const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Discovery Workshop",
    desc: "Validate your product idea in under four weeks and align your team with an iterative, collaborative approach.",
    link: "/discovery-workshop",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Custom Solutions Development",
    desc: "We deliver custom software solutions, built from scratch, ensuring high performance and seamless scalability for you.",
    link: "/custom-solutions-development",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Data-Driven Solutions",
    desc: "Transform your data into actionable insights by collecting, analyzing, and visualizing information to drive business growth.",
    link: "/data-driven-solutions",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Cloud-Native Development",
    desc: "Build secure, scalable cloud environments that improve reliability, performance, and cost efficiency for your business.",
    link: "/cloud-native-development",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "DevOps & CI/CD",
    desc: "Automate development and deployment processes to increase efficiency, reduce downtime, and accelerate delivery.",
    link: "/devops-ci-cd",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "QA Automation & Testing",
    desc: "Ensure your software is reliable and secure using advanced testing tools and techniques tailored to your business needs.",
    link: "/qa-automation-testing",
  },
];

const diffrentials = [
  {
    title: "Clear Communication & Accountability",
    desc: "From the very start, we foster open, transparent communication between all stakeholders. This ensures that you are kept informed at every stage, with clearly defined points of accountability.",
  },
  {
    title: "Rigorous Project Management",
    desc: "For every engagement, we use Agile and DevOps methodologies, ensuring flexibility, continuous improvement, and swift adaptability to changing business needs.",
  },
  {
    title: "Quality Assurance at Every Stage",
    desc: "We employ rigorous QA and testing protocols throughout the development lifecycle to ensure your solutions are not only functional but secure, scalable, and resilient.",
  },
  {
    title: "Tailored Solutions, Delivered on Time",
    desc: "Understanding that one size doesn't fit all, we deliver custom solutions aligned with your business goals and timelines, ensuring your enterprise maintains its competitive edge.",
  },
  {
    title: "Continuous Monitoring & Optimization",
    desc: "We don't just build and deploy; we continue to monitor performance, optimize, and enhance your solutions post-launch, ensuring they remain effective and future-proof.",
  },
];

export const metadata = {
  title: "Software Engineering | Alphabrackets",
};

export default function SoftwareEngineering() {
  return (
    <>
      <Header
        title="Software Engineering"
        description="We build custom software solutions that scale with your business growth. Our agile development process ensures quality delivery and continuous optimization. We transform ideas into secure, scalable applications that drive measurable impact."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <SubServices subServices={subServices} />
      <ClientStoriesBook />
      <WhyCooseUs title="Trusted Governance, Exceptional Service Delivery." diffrentials={diffrentials} />
    </>
  );
}
