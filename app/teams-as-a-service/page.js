import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Dedicated Development Teams",
    desc: "Provide dedicated development teams with specialized skills and expertise for your projects.",
  },
  {
    title: "Flexible Team Scaling",
    desc: "Scale development teams up or down based on project requirements and business needs.",
  },
  {
    title: "Expert Talent Access",
    desc: "Access to top-tier developers, designers, and technical specialists for your projects.",
  },
  {
    title: "Project Management",
    desc: "Comprehensive project management and coordination to ensure successful project delivery.",
  },
];

const processItems = [
  {
    title: "Team Assessment",
    desc: "Evaluate project requirements and define team composition and skill requirements.",
  },
  {
    title: "Team Assembly",
    desc: "Assemble dedicated development teams with appropriate skills and expertise.",
  },
  {
    title: "Project Execution",
    desc: "Execute projects with dedicated teams using agile methodologies and best practices.",
  },
  {
    title: "Ongoing Support",
    desc: "Provide ongoing support and team management throughout project lifecycle.",
  },
];

export const metadata = {
  title: "Teams as a Service | Alphabrackets",
};

export default function TeamsAsAService() {
  return (
    <>
      <ServiceHeader
        title="Teams as a Service"
        description="We provide dedicated development teams with specialized skills and expertise for your projects. Our teams as a service model ensures you have the right talent when you need it, with flexible scaling options."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Requirements"
        sTitle="to Delivery"
        desc="Our teams as a service model ensures dedicated, skilled teams for successful project delivery."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Dedicated teams that deliver results"
        diffrentials={diffrentials}
      />
    </>
  );
}
