import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "RPA Implementation",
    desc: "Implement Robotic Process Automation solutions to automate repetitive business processes.",
  },
  {
    title: "Process Automation",
    desc: "Automate complex business workflows and processes for improved efficiency and accuracy.",
  },
  {
    title: "Bot Development",
    desc: "Develop intelligent bots and automation scripts for various business applications.",
  },
  {
    title: "RPA Maintenance",
    desc: "Provide ongoing maintenance and optimization of RPA solutions for continued efficiency.",
  },
];

const processItems = [
  {
    title: "Process Analysis",
    desc: "Analyze business processes to identify automation opportunities and requirements.",
  },
  {
    title: "RPA Design",
    desc: "Design RPA solutions and automation workflows for optimal efficiency and reliability.",
  },
  {
    title: "Implementation",
    desc: "Implement RPA solutions with proper testing and validation for reliable automation.",
  },
  {
    title: "Monitoring & Support",
    desc: "Monitor RPA performance and provide ongoing support and optimization.",
  },
];

export const metadata = {
  title: "RPA | Alphabrackets",
};

export default function RPA() {
  return (
    <>
      <ServiceHeader
        title="RPA"
        description="We implement Robotic Process Automation solutions to automate repetitive business processes and improve operational efficiency. Our RPA expertise ensures reliable, scalable automation that drives business growth."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Process"
        sTitle="to Automation"
        desc="Our RPA implementation process ensures reliable, efficient automation of business processes."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="RPA that automates business processes"
        diffrentials={diffrentials}
      />
    </>
  );
}
