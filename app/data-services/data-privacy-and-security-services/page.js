import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Data Privacy Compliance",
    desc: "Ensure compliance with GDPR, CCPA, and other data protection regulations.",
  },
  {
    title: "Data Security Implementation",
    desc: "Implement robust security measures to protect data from unauthorized access and breaches.",
  },
  {
    title: "Data Governance",
    desc: "Establish data governance frameworks for data quality, security, and compliance.",
  },
  {
    title: "Risk Assessment",
    desc: "Conduct comprehensive risk assessments to identify and mitigate data security risks.",
  },
];

const processItems = [
  {
    title: "Privacy Assessment",
    desc: "Evaluate current data privacy practices and identify compliance requirements and gaps.",
  },
  {
    title: "Security Implementation",
    desc: "Implement data security measures including encryption, access controls, and monitoring.",
  },
  {
    title: "Compliance Framework",
    desc: "Establish data governance and compliance frameworks to meet regulatory requirements.",
  },
  {
    title: "Monitoring & Auditing",
    desc: "Implement ongoing monitoring and auditing processes to ensure continued compliance.",
  },
];

export const metadata = {
  title: "Data Privacy & Security Services | Alphabrackets",
};

export default function DataPrivacyAndSecurityServices() {
  return (
    <>
      <ServiceHeader
        title="Data Privacy & Security Services"
        description="We ensure compliance with data protection regulations and implement robust security measures. Our data privacy and security expertise helps protect your data assets and maintain regulatory compliance."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Risk"
        sTitle="to Compliance"
        desc="Our data privacy and security services ensure comprehensive protection and regulatory compliance."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Data privacy and security that protects your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
