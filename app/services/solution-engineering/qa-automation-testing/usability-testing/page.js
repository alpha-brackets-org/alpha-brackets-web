import ServiceHeader from "@/components/common/ServiceHeader";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";

const diffrentials = [
  {
    title: "User Experience Testing",
    desc: "Test applications from user perspective to ensure intuitive and user-friendly experiences.",
  },
  {
    title: "Accessibility Testing",
    desc: "Ensure applications meet accessibility standards and are usable by all users.",
  },
  {
    title: "Usability Metrics",
    desc: "Measure and analyze usability metrics to identify areas for improvement.",
  },
  {
    title: "User Feedback Analysis",
    desc: "Analyze user feedback and behavior to improve application usability.",
  },
];

const processItems = [
  {
    title: "Usability Assessment",
    desc: "Assess application usability and identify areas for improvement and optimization.",
  },
  {
    title: "User Testing",
    desc: "Conduct user testing sessions to gather feedback and identify usability issues.",
  },
  {
    title: "Analysis & Reporting",
    desc: "Analyze usability data and provide comprehensive reports with recommendations.",
  },
  {
    title: "Improvement Implementation",
    desc: "Implement usability improvements based on testing results and user feedback.",
  },
];

export const metadata = {
  title: "Usability Testing | Alphabrackets",
};

export default function UsabilityTesting() {
  return (
    <>
      <ServiceHeader
        title="Usability Testing"
        description="We conduct comprehensive usability testing to ensure applications provide intuitive and user-friendly experiences. Our usability testing expertise helps improve user satisfaction and application effectiveness."
        videoLink="https://youtu.be/AzwC6umvd1s"
        bgImage="/assets/imgs/background/b1.jpg"
        overlayDark="9"
      />
      <ProcessTimeline
        bTitle="From User"
        sTitle="to Experience"
        desc="Our usability testing process ensures applications provide optimal user experiences and satisfaction."
        items={processItems}
        bgImage="/assets/imgs/background/b2.jpg"
        overlayDark="9"
      />
      <ClientStoriesBook />
      <WhyCooseUs
        title="Usability testing that improves user experience"
        diffrentials={diffrentials}
      />
    </>
  );
}
