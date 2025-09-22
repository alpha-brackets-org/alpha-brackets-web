import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Cross-Browser Testing",
    desc: "Test web applications across different browsers and versions for consistent functionality.",
  },
  {
    title: "Responsive Design Testing",
    desc: "Validate responsive design and ensure optimal user experience across all devices.",
  },
  {
    title: "Web Performance Testing",
    desc: "Test web application performance, loading times, and optimization opportunities.",
  },
  {
    title: "Web Security Testing",
    desc: "Validate web application security measures and protection against vulnerabilities.",
  },
];

const processItems = [
  {
    title: "Web Test Planning",
    desc: "Define comprehensive web testing strategy covering functionality, performance, and security.",
  },
  {
    title: "Cross-Browser Testing",
    desc: "Test web applications across different browsers and devices for compatibility.",
  },
  {
    title: "Performance Testing",
    desc: "Test web application performance and identify optimization opportunities.",
  },
  {
    title: "Security Testing",
    desc: "Validate web application security measures and protection against threats.",
  },
];

export const metadata = {
  title: "Web Testing | Alphabrackets",
};

export default function WebTesting() {
  return (
    <>
      <ServiceHeader
        title="Web Testing"
        description="We provide comprehensive web testing services to ensure web applications work flawlessly across all browsers and devices. Our web testing expertise ensures optimal user experience and functionality."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Browser"
        sTitle="to Quality"
        desc="Our web testing process ensures web applications work consistently across all browsers and devices."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Web testing that ensures cross-browser compatibility"
        diffrentials={diffrentials}
      />
    </>
  );
}
