"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CaseStudiesHeader() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      0.5
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header
      id="case-studies-header"
      className="relative pt-40 pb-24 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Success Blueprints
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-5xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-8"
          >
            Engineering <br />
            <span className="logo font-extralight text-muted-foreground italic">
              Outcomes,
            </span>{" "}
            Not Just Code.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A selection of projects where business intelligence met technical
            execution. We don't just build features; we solve revenue leakage,
            operational friction, and scalability bottlenecks.
          </p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />
    </header>
  );
}
