import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs2 from "@/components/common/WhyChooseUs2";
import Numbers from "@/components/common/Numbers";
import Skills from "@/components/home-personal/Skills";
import FeaturesSegments from "@/components/common/ProcessSegments";
import WhyCooseUs from "@/components/common/WhyChooseUs";
import WhyRAD from "./WhyRAD";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Visual Prototyping",
    desc: "Clickable prototypes in Framer and Webflow to validate UX and flows in days.",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "POC & MVP Builds",
    desc: "Rapid POCs and MVPs using Bubble and lightweight code for faster market entry.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Landing Sites & CMS",
    desc: "Launch marketing sites quickly with Webflow, headless CMS, and SEO best practices.",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "APIs & Backends",
    desc: "Spin up APIs, auth, and data models using Replit and serverless services.",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "App Integrations",
    desc: "Connect payments, analytics, and third‑party SaaS for production readiness.",
  },
  {
    img: "/assets/imgs/serv-icons/6.png",
    title: "Handoff & Scale",
    desc: "Document, train, and prepare for scaling or full‑code rewrites when needed.",
  },
];

const diffrentials = [
  {
    img: "/assets/imgs/serv-img/1.jpg",
    title: "No-Code & Low-Code First",
    desc: "Choose Bubble, Webflow, Framer, or code based on speed, scale, and budget.",
  },
  {
    img: "/assets/imgs/serv-img/2.jpg",
    title: "Time-to-Market Obsessed",
    desc: "Short cycles, fast feedback, and scope control to launch sooner with confidence.",
  },
  {
    img: "/assets/imgs/serv-img/4.jpg",
    title: "Cost-Efficient Delivery",
    desc: "Leverage visual tooling to reduce engineering hours without sacrificing quality.",
  },
  {
    img: "/assets/imgs/serv-img/3.jpg",
    title: "Built to Evolve",
    desc: "Clean models and handover-ready docs so teams can scale or rewrite later.",
  },
];

const processItems = [
  {
    title: "Ideate & Scope",
    desc: "Define outcomes, constraints, and success metrics; cut nonessential scope early.",
  },
  {
    title: "Prototype",
    desc: "Produce interactive prototypes to validate UX and flows with real users.",
  },
  {
    title: "Build MVP",
    desc: "Develop core features with visual tools; integrate auth, data, and payments.",
  },
  {
    title: "Test & Iterate",
    desc: "Run user tests, measure, and iterate quickly based on insights and metrics.",
  },
  {
    title: "Launch & Handoff",
    desc: "Ship, monitor, document, and train teams for ownership and future scaling.",
  },
];

const skills = [
  {
    img: "https://mvp.dev/wp-content/uploads/2021/12/Bubble.io-Platform.png",
    title: "Bubble IO",
  },
  { img: "/assets/imgs/resume/s2.png", title: "Webflow" },
  { img: "/assets/imgs/resume/s3.png", title: "Framer" },
  {
    img: "https://studio.code.org/v3/assets/J3FIipxFDNCbk53cyIAf_hDVBOEzmBcuv5EH_Oy4fgQ/New_Replit_Logo.svg.png",
    title: "Replit",
  },
  {
    img: "https://th.bing.com/th/id/ODF.483vkW52QFhS9ACV5cX3Rg?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    title: "Supabase",
  },
  { img: "/assets/imgs/resume/icon4.png", title: "Flutter Flow" },
];

export const metadata = {
  title: "Rapid App Development | Alphabrackets",
};

export default function RapidAppDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Rapid App Development"
        description="We ship fast using visual programming and modern stacks—Bubble, Webflow, Framer, Replit. We prioritize time‑to‑market and cost‑effective delivery for POCs, MVPs, and pilots."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/patterns/pat1.png"
        overlayDark="8"
      />
      <SubServices subServices={subServices} padding="section" /> <WhyRAD />
      <WhyCooseUs
        title="Ship faster with modern visual tooling"
        subTitle="We use Bubble, Webflow, Framer, and lightweight code to deliver POCs and MVPs quickly and cost‑effectively."
        diffrentials={diffrentials}
        link={{ href: "/page-about", text: "Discuss Your Project" }}
        overlayDark="8"
      />
    </>
  );
}
