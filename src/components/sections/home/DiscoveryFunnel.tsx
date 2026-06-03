"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Rocket,
  Building2,
  Lightbulb,
} from "@/declarations/icons";
import { Button } from "@/components/ui/button";
import { gsap } from "@/declarations/animations";
import { AUDIT_PILLARS, DISCOVERY_DELIVERABLES } from "@/data/discovery";

export default function DiscoveryFunnel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".funnel-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="sub-title">The Discovery-First Approach</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mt-4">
            Start with clarity,{" "}
            <span className="font-extralight text-muted-foreground italic">
              not code.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            Before we write a single line of code, we invest in understanding
            your business model, technical constraints, and commercial ROI. This
            is{" "}
            <span className="text-foreground font-semibold">
              Business Intelligence-Led Development
            </span>
            .
          </p>
        </div>

        {/* Avatar Path Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Avatar 1: Scaling Operator */}
          <div className="funnel-card p-6 lg:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base leading-tight m-0">
                  The Scaling Operator
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Existing Business · Operational Bottleneck
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You run a healthcare, construction, automotive, or service
              business that&apos;s outgrown spreadsheets and manual processes.
              You need a multi-tenant SaaS platform or AI integration to scale
              operations across locations, teams, or clients.
            </p>
            <div className="mt-4 pt-4 border-t border-border/30">
              <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                Your path →{" "}
                <span className="text-primary">
                  Scalability Audit + Implementation
                </span>
              </span>
            </div>
          </div>

          {/* Avatar 2: Domain Expert Founder */}
          <div className="funnel-card p-6 lg:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base leading-tight m-0">
                  The Domain-Expert Founder
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Industry Expert · Vision, No Product Yet
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You have deep industry expertise and a clear product vision —
              ideally backed by funding — but no technical co-founder or
              engineering team. You need a strategic partner to architect,
              validate, and build your product right the first time.
            </p>
            <div className="mt-4 pt-4 border-t border-border/30">
              <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                Your path →{" "}
                <span className="text-primary">
                  Mandatory Discovery Phase First
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Technical Scalability Audit */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight leading-tight m-0">
                  Technical Scalability Audit
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Free Assessment → Personalized Report
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Is your architecture ready for the next 100k users? Our free
              assessment evaluates your existing stack across four critical
              dimensions and delivers a prioritized roadmap with the top 3
              actions you should take — ideal for{" "}
              <span className="text-foreground font-semibold">
                Scaling Operators
              </span>{" "}
              with existing systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AUDIT_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="funnel-card p-5 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors mb-3" />
                    <h4 className="font-bold text-sm mb-1">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:scale-105 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Request Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Paid Discovery Phase */}
          <div className="relative">
            <div className="p-8 lg:p-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
              {/* Corner badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Mandatory for New Products
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold tracking-tight leading-tight m-0">
                    The Technical Roadmap
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Paid Discovery Phase
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                For{" "}
                <span className="text-foreground font-semibold">
                  Domain-Expert Founders
                </span>{" "}
                with a vision but no product yet, this is our{" "}
                <span className="text-primary font-semibold">
                  mandatory first step
                </span>
                . We validate your architecture, map your database schemas,
                design key user flows, and deliver a complete technical
                blueprint — yours to execute with anyone.
              </p>

              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 italic">
                We don&apos;t quote full builds from a brief. We invest in
                understanding your domain before committing to a timeline and
                budget —{" "}
                <span className="text-foreground font-semibold not-italic">
                  100% discovery fee credited toward implementation.
                </span>
              </p>

              {/* Deliverables */}
              <div className="space-y-3 mb-8">
                {DISCOVERY_DELIVERABLES.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-xl h-12 border-primary/20 text-primary hover:bg-primary hover:text-white font-bold transition-all"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Schedule a Discovery Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
