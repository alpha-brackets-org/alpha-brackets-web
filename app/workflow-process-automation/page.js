import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs2 from "@/components/common/WhyChooseUs2";
import Numbers from '@/components/common/Numbers';
import Skills from "@/components/home-personal/Skills";
import FeaturesSegments from "@/components/common/ProcessSegments";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const subServices = [
  {
    img: "/assets/imgs/serv-icons/1.png",
    title: "Marketing Automation",
    desc: "Automate lead capture, analytics sync, list building, and multichannel campaigns using n8n, Make, Zapier.",
  },
  {
    img: "/assets/imgs/serv-icons/2.png",
    title: "Sales & CRM Workflows",
    desc: "Route and enrich leads, create deals, and notify reps across HubSpot, Salesforce, Pipedrive.",
  },
  {
    img: "/assets/imgs/serv-icons/3.png",
    title: "Finance & Accounting",
    desc: "Automate invoice intake, approvals, reconciliations, payouts, and reporting across Stripe, QuickBooks, Xero.",
  },
  {
    img: "/assets/imgs/serv-icons/4.png",
    title: "HR & Recruiting",
    desc: "Automate screening, interview scheduling, offers, and onboarding with ATS, Slack, Teams, identity systems.",
  },
  {
    img: "/assets/imgs/serv-icons/5.png",
    title: "Operations & IT",
    desc: "Ticket triage, user provisioning, asset updates, and data syncs across Jira, ServiceNow, Google Workspace, Notion.",
  },
  {
    img: "/assets/imgs/serv-icons/6.png",
    title: "Customer Support & CX",
    desc: "Case routing, SLA alerts, CSAT/NPS loops, and knowledge updates with Zendesk, Intercom, data warehouse.",
  },
];

const diffrentials = [
  {
    img: "/assets/imgs/serv-img/1.jpg",
    title: "Platform-Agnostic Expertise",
    desc: "Design and build workflows across n8n, Make, Zapier; choose the right tool per case.",
  },
  {
    img: "/assets/imgs/serv-img/2.jpg",
    title: "Data Quality & Governance",
    desc: "Field mapping, validation, and error handling keep systems synchronized with audits and proactive alerts.",
  },
  {
    img: "/assets/imgs/serv-img/4.jpg",
    title: "Security by Design",
    desc: "Secrets management, least-privilege access, and separate environments embedded in every automation.",
  },
  {
    img: "/assets/imgs/serv-img/3.jpg",
    title: "Reliability & Observability",
    desc: "Retries, dead-letter queues, and centralized logging ensure resilient, trustworthy workflows at scale.",
  },
];

const processItems = [
  {
    title: "Discovery & Prioritization",
    desc: "Map processes across teams, quantify ROI, and prioritize the highest-impact automations.",
  },
  {
    title: "Solution Design",
    desc: "Define triggers, data models, error paths, and boundaries; choose n8n, Make, or Zapier appropriately.",
  },
  {
    title: "Build & Integrate",
    desc: "Implement workflows, connections, transformations; add validation, branching, and webhooks across your stack.",
  },
  {
    title: "QA & Hardening",
    desc: "Test with sandbox data, configure retries and DLQs, set alerts, and document runbooks.",
  },
  {
    title: "Launch & Iterate",
    desc: "Roll out in phases, monitor metrics, optimize continuously, and expand coverage to compound ROI.",
  },
];

const skills = [
  { img: "/assets/imgs/resume/s1.png", title: "n8n" },
  { img: "/assets/imgs/resume/s2.png", title: "Make (Integromat)" },
  { img: "/assets/imgs/resume/s3.png", title: "Zapier" },
  { img: "/assets/imgs/resume/s6.png", title: "Xero" },
  { img: "/assets/imgs/resume/s7.png", title: "HubSpot" },
  { img: "/assets/imgs/resume/s8.png", title: "Salesforce" },
];

export const metadata = {
    title: "Workflow and Process Automation | Alphabrackets",
  };

export default function CloudInfrastructure() {
  return (
    <>
      <ServiceHeader
        title="Workflow and Process Automation"
        description="We design, build, and scale business automations with n8n, Make, and Zapier—connecting Marketing, Sales, Finance, HR, Ops, and Support. From lead capture to invoicing and ticketing, we replace manual work with reliable, observable workflows that improve data quality and unlock measurable ROI."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/patterns/lines1.png"
        overlayDark="2"
      />
      {/* <Skills skills={skills}/> */}
      <SubServices subServices={subServices} noBottomPadding={true} />
      
      <FeaturesSegments
        bTitle="From Intake"
        sTitle="to Scale"
        desc="Pragmatic lifecycle: prioritize high-ROI use cases, design reliable workflows, launch, monitor, iterate."
        items={processItems}
        bgImage="/assets/imgs/header/b5.jpg"
        overlayDark="8"
      />
      {/* <ClientStoriesBook /> */}
      <WhyCooseUs
        title="Automation that Compounds ROI"
        subTitle="Cut manual work, reduce errors, and speed up response times with resilient, observable workflows across your stack—built on n8n, Make, or Zapier."
        diffrentials={diffrentials}
        link={{ href: "/page-about", text: "Discuss Your Project" }}
        overlayDark="8"
      />
    </>
  );
}
