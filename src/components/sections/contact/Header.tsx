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
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-40 pb-24 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="animate-item">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-6">
            Get In Touch
          </h2>
        </div>
        <div className="animate-item">
          <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
            Start a <br />{" "}
            <span className="font-extralight text-muted-foreground italic">
              Conversation.
            </span>
          </h1>
        </div>
        <div className="animate-item">
          <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Ready to build something extraordinary? Our team of architects and
            engineers is standing by to turn your vision into a technical
            reality.
          </p>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="text-primary"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </section>
  );
}
