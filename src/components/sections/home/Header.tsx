"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/declarations/animations";
import { ArrowRight, ChevronDown } from "@/declarations/icons";
import { Button } from "@/components/ui/button";

const METRICS = [
  { value: "4–6", unit: "wk", label: "Average MVP Delivery" },
  { value: "92", unit: "%", label: "Client Retention Rate" },
  { value: "10×", unit: "", label: "Architecture Built For" },
];

function Header() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
      )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-metric",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-start pt-32 lg:pt-48 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/imgs/background/bg1.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/75"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
      </div>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              For Scaling Operators & Domain-Expert Founders
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8">
            From Architecture to Launch — <br className="hidden md:block" />
            in{" "}
            <span className="text-primary relative">
              Compressed
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 9C30 3 70 1 100 5C130 9 170 3 199 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Cycles.
          </h1>

          {/* Sub-headline */}
          <p className="hero-sub text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            <span className="text-foreground font-semibold">
              Embedded collaboration. Zero-waste engineering. Future-ready
              architecture.
            </span>{" "}
            Whether you&apos;re an established operator hitting scaling
            bottlenecks or a domain expert turning industry knowledge into
            product — we compress your time-to-market by building only what
            scales and shipping only what converts.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-start gap-4 mb-24">
            <Button
              asChild
              className="rounded-full px-8 h-13 bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Book a Technical Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 h-13 border-foreground/20 text-foreground/80 hover:text-primary hover:border-primary/30 font-semibold text-base transition-all"
            >
              <Link href="/case-studies" className="flex items-center gap-3">
                View Our Architecture Blueprints
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 border-t border-white/10">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="hero-metric flex-1 flex items-center gap-6 py-8 px-2 md:px-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0"
            >
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                {metric.value}
                <span className="text-2xl md:text-3xl text-primary/70">
                  {metric.unit}
                </span>
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
