import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Multi-Device Testing",
    desc: "Test mobile applications across different devices, screen sizes, and operating systems.",
  },
  {
    title: "Cross-Platform Validation",
    desc: "Ensure consistent functionality and user experience across iOS and Android platforms.",
  },
  {
    title: "Mobile-Specific Testing",
    desc: "Test mobile-specific features like GPS, camera, push notifications, and offline functionality.",
  },
  {
    title: "App Store Compliance",
    desc: "Ensure mobile apps meet app store guidelines and requirements for successful deployment.",
  },
];

const processItems = [
  {
    title: "Mobile Test Strategy",
    desc: "Define comprehensive mobile testing strategy covering devices, platforms, and scenarios.",
  },
  {
    title: "Device Testing",
    desc: "Test applications across various mobile devices and operating system versions.",
  },
  {
    title: "Feature Validation",
    desc: "Validate mobile-specific features and integrations with device capabilities.",
  },
  {
    title: "Performance Testing",
    desc: "Test mobile app performance, battery usage, and network connectivity scenarios.",
  },
];

export const metadata = {
  title: "Mobile Testing | Alphabrackets",
};

export default function MobileTesting() {
  return (
    <>
      <ServiceHeader
        title="Mobile Testing"
        description="We provide comprehensive testing of mobile applications across different devices and platforms. Our mobile testing ensures optimal user experience and functionality on iOS and Android devices."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Device"
        sTitle="to Quality"
        desc="Our mobile testing process ensures applications work flawlessly across all mobile devices and platforms."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Mobile testing that ensures cross-platform quality"
        diffrentials={diffrentials}
      />
    </>
  );
}
