import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "API Functionality Testing",
    desc: "Validate API endpoints, request/response formats, and business logic implementation.",
  },
  {
    title: "API Performance Testing",
    desc: "Test API response times, throughput, and performance under various load conditions.",
  },
  {
    title: "API Security Testing",
    desc: "Validate API authentication, authorization, and security measures against threats.",
  },
  {
    title: "Integration Testing",
    desc: "Test API integrations with frontend applications and third-party services.",
  },
];

const processItems = [
  {
    title: "API Test Planning",
    desc: "Define API testing scope, scenarios, and success criteria for comprehensive validation.",
  },
  {
    title: "Functional Testing",
    desc: "Test API endpoints, parameters, responses, and error handling scenarios.",
  },
  {
    title: "Performance Testing",
    desc: "Test API performance, load handling, and response times under various conditions.",
  },
  {
    title: "Security Testing",
    desc: "Validate API security measures, authentication, and protection against vulnerabilities.",
  },
];

export const metadata = {
  title: "API Testing | Alphabrackets",
};

export default function APITesting() {
  return (
    <>
      <ServiceHeader
        title="API Testing"
        description="We validate API functionality, performance, and security to ensure reliable integrations. Our API testing ensures your APIs work correctly, perform well, and are secure for production use."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Endpoint"
        sTitle="to Integration"
        desc="Our API testing process ensures reliable, secure, and high-performing API services."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="API testing that ensures reliable integrations"
        diffrentials={diffrentials}
      />
    </>
  );
}
