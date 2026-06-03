"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { gsap } from "@/declarations/animations";

import { CaseStudy } from "@/types/cms";

export default function CaseStudies({
  caseStudies = [],
}: {
  caseStudies?: CaseStudy[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // First card stays in place

        // Shrink and fade the previous card
        tl.to(cards[i - 1], {
          scale: 0.95,
          opacity: 0.5,
          ease: "none",
        });

        // Slide the current card up from the bottom at the exact same time
        tl.fromTo(card, { yPercent: 100 }, { yPercent: 0, ease: "none" }, "<");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div
        ref={containerRef}
        className="bg-background relative overflow-hidden h-screen flex flex-col pt-24 pb-12 w-full"
      >
        <div className="container mx-auto px-4 relative z-10 flex flex-col h-full">
          {/* Header (Pinned with section) */}
          <div className="flex-none flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-12">
            <div className="max-w-3xl">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">
                Business Outcomes
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
                Products that{" "}
                <span className="font-light text-muted-foreground italic">
                  moved the needle.
                </span>
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-xl font-medium">
                Mission-critical solutions for industry leaders who outgrew
                manual workflows and needed high-performance systems designed
                for infinite scale and measurable business growth.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 px-6 h-10 rounded-full border border-border/50 hover:bg-primary hover:border-primary hover:text-white transition-all font-bold uppercase tracking-widest text-[10px] shrink-0"
            >
              All Case Studies
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Cards Container (Stacked absolute) */}
          <div className="relative flex-1 w-full perspective-[1000px]">
            {caseStudies.map((caseStudy, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={caseStudy._id || caseStudy.slug || i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className={cn(
                    "absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 lg:p-10 rounded-[32px] bg-[#0f0f0f] border border-white/5 shadow-2xl shadow-black/50 group origin-top will-change-transform",
                    !isEven && "lg:flex-row-reverse"
                  )}
                  style={{ zIndex: i + 10 }}
                >
                  {/* TODO: Check why its fetching first tags and services */}
                  {/* Left Side: Content */}
                  <div className="w-full lg:w-[45%] flex flex-col items-start h-full justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags?.slice(0, 3).map((tagItem, idx) => (
                        <span
                          key={`tag-${idx}`}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-white/80"
                        >
                          {tagItem.tag}
                        </span>
                      ))}
                      {caseStudy.services?.slice(0, 2).map((service, idx) => (
                        <span
                          key={`service-${idx}`}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-white/80"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                      {caseStudy.projectTitle}
                    </h3>

                    <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-6 max-w-xl">
                      {caseStudy.excerpt}
                    </p>

                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-all border-b border-primary hover:border-white pb-1 group/link mt-auto"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Side: Visual */}
                  <div className="w-full lg:w-[55%] relative h-[30vh] lg:h-[80%] xl:h-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                    <Image
                      src={caseStudy.coverImage || "/assets/imgs/blog/1.jpg"}
                      alt={caseStudy.projectTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
