"use client";

import React, { useEffect, useRef } from "react";
import { ProcessTimelineProps } from "@/types";

export default function ProcessTimeline({
  bTitle,
  sTitle,
  desc,
  items,
}: ProcessTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Stagger animate steps into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-muted/30 border-t border-b border-border/50 relative overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="sub-title">Our Process</span>
          <h2 className="mt-4">
            {bTitle}{" "}
            <span className="font-extralight text-muted-foreground">
              {sTitle}.
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{desc}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="group h-full p-7 rounded-2xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 relative overflow-hidden">
                {/* Hover fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Step number */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300 bg-background">
                    <span className="text-xs font-extrabold text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Connector line (not on last item) */}
                  {i < items.length - 1 && (
                    <div className="hidden xl:block flex-1 h-px bg-border mx-3 group-hover:bg-primary/30 transition-colors" />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h6 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h6>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 text-5xl font-extrabold text-foreground/[0.03] select-none group-hover:text-primary/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
