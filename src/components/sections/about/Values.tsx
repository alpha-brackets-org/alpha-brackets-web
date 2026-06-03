"use client";

import { ShieldCheck, Zap, Users, Target } from "@/declarations/icons";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Zero-Waste Engineering",
    desc: "We eliminate architectural bloat by focusing on lean, performant code that solves specific business bottlenecks.",
  },
  {
    icon: Zap,
    title: "Accelerated Delivery",
    desc: "Using AI-augmented workflows and pre-built architectural modules to compress launch cycles by up to 40%.",
  },
  {
    icon: Users,
    title: "Embedded Collaboration",
    desc: "We don't act as a 'vendor'. Our engineers integrate as a strategic extension of your product and leadership team.",
  },
  {
    icon: Target,
    title: "Intelligence-Led",
    desc: "Every line of code is mapped to a business outcome, ensuring that technical execution serves your strategic goals.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-accent/5 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">
            Our Core Philosophy
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
            The Principles of Execution
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, idx) => (
            <div
              key={idx}
              className="p-10 rounded-[32px] bg-accent/5 border border-border/50 hover:border-primary/30 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
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
