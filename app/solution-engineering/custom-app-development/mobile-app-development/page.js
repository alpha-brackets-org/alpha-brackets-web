import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "Cross-Platform Development",
    desc: "Build apps for both iOS and Android using React Native, Flutter, or native development.",
  },
  {
    title: "Native Performance",
    desc: "Optimize mobile apps for performance, battery life, and user experience on mobile devices.",
  },
  {
    title: "App Store Optimization",
    desc: "Ensure your mobile apps meet store guidelines and are optimized for discoverability.",
  },
  {
    title: "Offline Capabilities",
    desc: "Design mobile apps that work seamlessly offline and sync data when connectivity returns.",
  },
];

const processItems = [
  {
    title: "Mobile Strategy",
    desc: "Define mobile app requirements, target platforms, and user experience goals.",
  },
  {
    title: "UI/UX Design",
    desc: "Create mobile-first designs with intuitive navigation and touch-friendly interfaces.",
  },
  {
    title: "Development",
    desc: "Build mobile applications using appropriate frameworks and mobile development best practices.",
  },
  {
    title: "Testing",
    desc: "Comprehensive testing across devices, platforms, and network conditions.",
  },
  {
    title: "Launch & Support",
    desc: "Deploy to app stores and provide ongoing maintenance and feature updates.",
  },
];

export const metadata = {
  title: "Mobile App Development | Alphabrackets",
};

export default function MobileAppDevelopment() {
  return (
    <>
      <ServiceHeader
        title="Mobile App Development"
        description="We develop native and cross-platform mobile applications for iOS and Android. Our mobile expertise ensures optimal performance, user experience, and app store success."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From Concept"
        sTitle="to App Store"
        desc="Our mobile development process ensures quality, performance, and successful app store deployment."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Mobile apps that users love"
        diffrentials={diffrentials}
      />
    </>
  );
}
