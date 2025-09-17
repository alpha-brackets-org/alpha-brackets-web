import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs2 from "@/components/common/WhyChooseUs2";
import Numbers from "@/components/common/Numbers";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "User Research and Insights",
    desc: "We uncover user needs and behaviors to inform products that drive engagement and customer satisfaction.",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "UI/UX Design",
    desc: "We design visually appealing, highly usable interfaces that ensure a seamless, enjoyable experience for your users.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Prototyping and Testing",
    desc: "We rapidly prototype and test ideas, iterating quickly to deliver solutions that align with your business goals.",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "Design System",
    desc: "We create design systems for consistency across platforms, streamlining development and reducing costs as you scale.",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "Accessibility and Inclusivity",
    desc: "We design inclusive experiences that meet accessibility standards, expanding your reach and building brand loyalty.",
  },
];

const diffrentials = [
  {
    img: "/assets/imgs/serv-img/1.jpg",
    title: "User-Centered Design Approach",
    desc: "We prioritize user needs in every design decision for meaningful engagement.",
  },
  {
    img: "/assets/imgs/serv-img/2.jpg",
    title: "Data-Driven Design Decisions",
    desc: "Our designs are backed by research and testing data for business goals.",
  },
  {
    img: "/assets/imgs/serv-img/4.jpg",
    title: "Accessibility-First Design",
    desc: "We build inclusive experiences complying with WCAG guidelines for universal market reach.",
  },
];

const processItems = [
  {
    title: "Empathize",
    desc: "Conduct in-depth research and interviews to deeply understand user challenges, motivations, and pain points.",
  },
  {
    title: "Define",
    desc: "Clearly outline and articulate project goals, user personas, and problem statements based on gathered insights.",
  },
  {
    title: "Ideate",
    desc: "Brainstorm a wide range of innovative, user-centric solutions and creative approaches to address defined challenges.",
  },
  {
    title: "Prototype",
    desc: "Rapidly create interactive prototypes and wireframes for real-world testing and early feedback from stakeholders.",
  },
  {
    title: "Test & Launch",
    desc: "Iteratively refine, validate, and deliver a final product that drives measurable results and user satisfaction.",
  },
];

export const metadata = {
  title: "UI/UX Design | Alphabrackets",
};

export default function CloudInfrastructure() {
  return (
    <>
      <ServiceHeader
        title="User Experience Design"
        description="We create intuitive user-centered interfaces that elevate engagement and usability. Our designs prioritize accessibility and inclusivity for universal market reach. We deliver data-driven solutions that boost conversions and drive business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/bg2.jpg"
        overlayDark="7"
      />
      <SubServices subServices={subServices} noBottomPadding={true} />
      <ProcessTimeline
        bTitle="From Concept"
        sTitle="to Launch"
        desc="We guide you through a comprehensive design process that puts users at the center, ensuring your products are both beautiful and functional."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs2
        title="Designing for Impact"
        subTitle="Great UX boosts conversions, lowers bounce rates, and reduces costs by minimizing post-launch fixes—driving user satisfaction and business growth."
        diffrentials={diffrentials}
        link={{ href: "/page-about", text: "Discuss Your Project" }}
        overlayDark="8"
      />
      <Numbers />
    </>
  );
}
