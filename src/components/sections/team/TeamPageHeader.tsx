"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background flex items-center"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid-white_1px_bg-transparent_20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-item inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Our Visionaries
            </span>
          </div>

          <h1 className="animate-item text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] uppercase mb-12">
            The World&apos;s <br />
            <span className="font-extralight text-muted-foreground italic">
              Architects.
            </span>
          </h1>

          <div className="animate-item flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"/>
          </div>
        </div>
      </div>
    </section>
  );
}
