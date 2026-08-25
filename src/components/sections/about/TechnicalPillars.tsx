"use client";

import { ArrowRight, Cloud, Brain, Server } from "@/declarations/icons";
import Link from "next/link";

// These were image cards backed by screenshots of GMS, Hexadesk and Healthline,
// presented as proof of each capability. None of the three is a live product
// (see docs/business-strategy.md), so using them as proof was a false claim.
// Icons instead, and the copy describes what we build rather than what we have
// supposedly shipped.
const PILLARS = [
  {
    icon: Cloud,
    title: "SaaS platforms",
    desc: "Separate customer accounts, billing, and permissions, set up properly at the start so more customers later does not mean rebuilding.",
  },
  {
    icon: Brain,
    title: "AI features",
    desc: "Chatbots, document processing, and search built into the product as a real feature. We pick the approach per job and tell you what it costs to run.",
  },
  {
    icon: Server,
    title: "Launch and after",
    desc: "Deployment, monitoring, and the feature work that follows once real people are using it and you know what needs to change.",
  },
];

export default function TechnicalPillars() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-6">
              What We Build
            </h2>
            <h3 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Three things, <br />{" "}
              <span className="font-extralight text-muted-foreground italic">
                done properly.
              </span>
            </h3>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            All Services{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-10 rounded-[40px] border border-border/50 bg-card hover:border-primary/40 transition-colors duration-500 flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl border border-primary/30 bg-primary/5 text-primary flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {pillar.title}
              </h4>
              {/* Always visible. This copy used to be opacity-0 until hover,
                  so it was unreadable on any touch device. */}
              <p className="text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
