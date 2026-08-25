export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

// Rendered by ProcessStrip, which lays these out in five columns on desktop.
// Keep this at five steps, and keep the descriptions a similar length so no one
// card runs much taller than the rest.
export const SERVICES_PAGE_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We agree on your goals, your users, and what is out of scope, before anyone opens an editor.",
  },
  {
    step: "02",
    title: "Brand & Design",
    desc: "If you have a brand we build to it. If you don't, we make one first. Then screens, signed off by you.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Short build cycles with a demo at the end of each week, so you always know where it stands.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Deployment, automated releases, and hosting set up so going live is not an event.",
  },
  {
    step: "05",
    title: "Support & Iteration",
    desc: "Monitoring, speed work, and new features once real people are using it.",
  },
];
