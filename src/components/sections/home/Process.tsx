import ProcessTimeline from "@/components/shared/ProcessTimeline";

const STEPS = [
  {
    title: "Discovery",
    desc: "We talk about your product, your users, and what the AI feature should actually do.",
  },
  {
    title: "Design",
    desc: "We plan the screens and the data model before writing any code.",
  },
  {
    title: "Build",
    desc: "We build in short sprints and show you working software every week.",
  },
  {
    title: "Test and Launch",
    desc: "We test the product and help you ship it to real users.",
  },
  {
    title: "Scale",
    desc: "Once you are live, we can keep adding features and improving the product.",
  },
];

export default function Process() {
  return (
    <ProcessTimeline
      bTitle="How We"
      sTitle="Build"
      desc="One simple process for every project. No matter which package you choose."
      items={STEPS}
    />
  );
}
