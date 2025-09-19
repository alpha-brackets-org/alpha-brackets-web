import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Vulnerability Assessment",
    desc: "Identify security vulnerabilities and potential attack vectors in your applications.",
  },
  {
    title: "Penetration Testing",
    desc: "Simulate real-world attacks to test application security defenses and response.",
  },
  {
    title: "Security Code Review",
    desc: "Review application code for security best practices and potential vulnerabilities.",
  },
  {
    title: "Compliance Testing",
    desc: "Ensure applications meet security standards and regulatory compliance requirements.",
  },
];

const processItems = [
  {
    title: "Security Assessment",
    desc: "Evaluate application security posture and identify potential security risks.",
  },
  {
    title: "Vulnerability Testing",
    desc: "Test for common security vulnerabilities including OWASP Top 10 issues.",
  },
  {
    title: "Penetration Testing",
    desc: "Conduct simulated attacks to test security defenses and incident response.",
  },
  {
    title: "Security Recommendations",
    desc: "Provide detailed security recommendations and remediation guidance.",
  },
];

export const metadata = {
  title: "Security Testing | Alphabrackets",
};

export default function SecurityTesting() {
  return (
    <>
      <ServiceHeader
        title="Security Testing"
        description="We identify and address security vulnerabilities to protect your applications and data. Our security testing ensures your software is protected against threats and meets security compliance requirements."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Vulnerability"
        sTitle="to Security"
        desc="Our security testing process ensures applications are protected against threats and vulnerabilities."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Security testing that protects your business"
        diffrentials={diffrentials}
      />
    </>
  );
}
