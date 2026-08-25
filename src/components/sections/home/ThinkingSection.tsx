"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/declarations/animations";

// Opinion 01 used to open "Before writing the first feature" and list multi-tenancy
// and auth, which only described a build starting from nothing. That excluded the
// same audiences the old hero did: people with an existing product, and businesses
// buying an internal system. It now covers reading an existing structure as well as
// setting up a new one, which is the honest version anyway.
//
// 02 is untouched. It is the differentiator in docs/business-strategy.md §1.
//
// Two em dashes were also removed from this list. DESIGN.md bans them as sentence
// punctuation and they had survived here since before that rule was written down.
const OPINIONS = [
  {
    number: "01",
    title: "Structure before features",
    body: "New build or existing one, the structure decides what is cheap to change later. On a new product we settle the data model and access control first. On an existing product we read what is already there before touching it. Either way, guessing is what costs a rewrite.",
  },
  {
    number: "02",
    title: "AI planned in, not bolted on",
    body: "AI added at the end of a build always feels like an add-on. We decide where it lives in the architecture before the first sprint. That means it works like a real feature, not a plugin that breaks when your data model changes.",
  },
  {
    number: "03",
    title: "Shipping is the start, not the finish",
    body: "Most agencies hand you the code and disappear. We stay through the first real-user feedback cycle, because the hardest part of building a product is not the build. It is working out what to change once real people have used it.",
  },
];

export default function ThinkingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".opinion-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="sub-title">How We Think</span>
          <h2 className="mt-4 leading-tight">
            We have strong opinions{" "}
            <span className="font-extralight text-muted-foreground italic">
              about how to build this right.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            These are the decisions most teams skip. They are also the decisions
            that determine whether your product survives its first year.
          </p>
        </div>

        {/* Opinion cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OPINIONS.map((opinion) => (
            <div
              key={opinion.number}
              className="opinion-card group p-8 rounded-2xl border border-border/50 bg-background hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors leading-none mb-6 select-none">
                {opinion.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold leading-tight mb-4">
                {opinion.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {opinion.body}
              </p>

              {/* Bottom accent line */}
              <div className="mt-8 h-px w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
