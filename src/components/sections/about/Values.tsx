"use client";

import { ShieldCheck, Zap, Users, Target } from "@/declarations/icons";

// How we work. Keep these about our own behaviour, which we can back, rather
// than about results for clients we do not have yet. The homepage
// ThinkingSection covers our engineering opinions, so do not repeat those here.
const VALUES = [
  {
    icon: Target,
    title: "Build less, first",
    desc: "The fastest way to waste your money is to build features nobody asked for. We cut the first version down to what proves the idea, then build out from what users actually do.",
  },
  {
    icon: Zap,
    title: "You see it every week",
    desc: "Working software at the end of every week from the first one. If something has slipped, you hear it that week instead of at the end.",
  },
  {
    icon: Users,
    title: "You talk to the engineer",
    desc: "No account manager passing messages along. The person building your product is the person you speak to about it.",
  },
  {
    icon: ShieldCheck,
    title: "No surprises on the invoice",
    desc: "A fixed price agreed before we start. When something new comes up we tell you what it costs before we build it, and you decide.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-accent/5 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">
            How We Work
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Four things you can hold us to.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, idx) => (
            <div
              key={idx}
              className="p-10 rounded-[32px] bg-accent/5 border border-border/50 hover:border-primary/30 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight text-foreground">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
