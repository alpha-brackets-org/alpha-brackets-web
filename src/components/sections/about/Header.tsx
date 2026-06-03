"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutHeader() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Who We Are
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] uppercase opacity-0"
            style={{ opacity: 1 }} // Initial fallback if JS fails
          >
            Strategic <br />
            <span className="font-extralight text-muted-foreground italic">
              Execution.
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
