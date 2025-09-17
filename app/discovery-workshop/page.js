import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs2 from "@/components/common/WhyChooseUs2";
import Numbers from "@/components/common/Numbers";
import Skills from "@/components/home-personal/Skills";
import FeaturesSegments from "@/components/common/ProcessSegments";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Design Sprint",
    desc: "Rapidly ideate and prototype concepts.\nValidate with users and stakeholders.\nAlign team, set clear direction.",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Business Case",
    desc: "Define scope, goals, and metrics.\nOutline architecture and roadmap.\nEstimate costs, timelines, resources.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Extensive Prototype",
    desc: "Build advanced interactive prototype.\nValidate experience and functionality.\nDe-risk development before build.",
  },
];

const diffrentials = [
  {
    img: "/assets/imgs/serv-img/1.jpg",
    title: "Proven Success Across Industries",
    desc: "Trusted by globally recognized enterprises and high-growth startups, our tailored solutions address complex business challenges with measurable results.",
  },
  {
    img: "/assets/imgs/serv-img/2.jpg",
    title: "Specialized Expertise in Product Discovery",
    desc: "With over a decade of experience, we deliver actionable blueprints and prototypes, ensuring faster time-to-market with minimized risks.",
  },
  {
    img: "/assets/imgs/serv-img/4.jpg",
    title: "Collaborative and Transparent Process",
    desc: "Our team works closely with your stakeholders, aligning on vision, mitigating risks early, and refining ideas into viable, user-centric solutions.",
  },
  {
    img: "/assets/imgs/serv-img/3.jpg",
    title: "Global Expertise, Local Focus",
    desc: "Operating across three continents, we bring insights from diverse markets and industries, adapting best practices to suit your unique needs.",
  },
];

const processItems = [
  {
    title: "Align Stakeholders",
    desc: "Kickoff session to clarify goals, constraints, success metrics, and decision owners.",
  },
  {
    title: "Discover & Research",
    desc: "Map users and workflows, review data, and analyze risks and opportunities.",
  },
  {
    title: "Prioritize & Scope",
    desc: "Define MVP scope, assumptions, and acceptance criteria using impact vs. effort.",
  },
  {
    title: "Prototype & Validate",
    desc: "Create interactive flows or wireframes; test with stakeholders for fast feedback.",
  },
  {
    title: "Roadmap & Plan",
    desc: "Produce delivery plan, estimates, and next steps with clear ownership.",
  },
];

export const metadata = {
  title: "Discovery Workshop | Alphabrackets",
};

export default function CloudInfrastructure() {
  return (
    <>
      <ServiceHeader
        title="Discovery Workshop"
        description="Align stakeholders around goals, constraints, and success metrics. De-risk delivery through research, prioritization, prototyping, and rapid validation. Build a clear product blueprint and actionable roadmap in days ready for execution and alignment."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/patterns/pat1.png"
        overlayDark="9"
      />
      <SubServices subServices={subServices} padding="section" />

      <ProcessTimeline
        bTitle="From Idea"
        sTitle="to Roadmap"
        desc="Our structured workshop process ensures alignment, reduces risks, and accelerates time-to-market for your ideas."
        items={processItems}
        bgImage="/assets/imgs/background/bg2.jpg"
        overlayDark="5"
      />
      {/* <ClientStoriesBook /> */}
      <WhyCooseUs
        title="Structured workshops that align teams and de-risk delivery."
        subTitle=""
        diffrentials={diffrentials}
        link={{ href: "/page-about", text: "Discuss Your Project" }}
        overlayDark="8"
      />
    </>
  );
}
