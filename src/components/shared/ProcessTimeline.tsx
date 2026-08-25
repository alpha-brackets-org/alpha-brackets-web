"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ProcessTimelineProps } from "@/types";

/**
 * Mirrors the `[data-overlay-dark="n"]::before` opacities in globals.css.
 *
 * This section used to set `data-background` and call `loadBackgroudImages()`
 * after mount, so its image was written by JavaScript and never passed through
 * next/image (no WebP, no resizing, no srcset). It renders below the fold, so it
 * is not the LCP element and deliberately does not get `priority`, but it was
 * still shipping a full size raw JPEG on every service page.
 */
const OVERLAY_OPACITY: Record<string, number> = {
  "1": 0.2,
  "2": 0.3,
  "3": 0.4,
  "4": 0.5,
  "5": 0.6,
  "6": 0.7,
  "7": 0.8,
  "8": 0.88,
  "9": 0.94,
};

export default function ProcessTimeline({
  bTitle,
  sTitle,
  desc,
  items,
  bgImage,
  overlayDark = "9",
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
      className="py-24 border-t border-b border-border/50 relative overflow-hidden bg-muted/30"
    >
      {/* Image and its darkening layer, both server rendered. No `priority`:
          this section is below the fold on every page that uses it. */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-background pointer-events-none"
            style={{ opacity: OVERLAY_OPACITY[overlayDark] ?? 0.94 }}
          />
        </div>
      )}

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
              <div className="group h-full p-7 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-400 relative overflow-hidden">
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
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
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
