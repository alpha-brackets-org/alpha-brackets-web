"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/declarations/animations";
import { ArrowRight } from "@/declarations/icons";
import { ServiceHeaderProps } from "@/types";

/**
 * Darkening applied over the hero image so the headline stays readable.
 *
 * These values mirror the `[data-overlay-dark="n"]::before` opacities in
 * globals.css, because this component no longer uses that mechanism. It used to
 * set `data-background` and call `loadBackgroudImages()` in a useEffect, which
 * wrote `style.backgroundImage` after mount. That meant the hero image on all 12
 * service pages was invisible to the browser's preload scanner, could not be
 * given `priority`, got no responsive srcset, and skipped next/image entirely, so
 * a 388KB raw JPEG shipped to phones. It also did not begin downloading until
 * React had hydrated.
 *
 * Now the image is a real <Image> in the server-rendered markup and the overlay
 * is a real element, so both paint without waiting for JavaScript. The CSS rules
 * stay in globals.css for the other sections that still use them.
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

// Splits a service title into a plain lead and an emphasised remainder.
// An "&" belongs with the words before it, so "Marketing & Campaign Tooling"
// emphasises "Campaign Tooling" rather than starting the italic run on "&".
function splitTitle(title: string): [string, string] {
  const words = title.split(" ");
  const ampIndex = words.indexOf("&");
  const breakAfter = ampIndex > -1 ? ampIndex : 0;
  return [
    words.slice(0, breakAfter + 1).join(" "),
    words.slice(breakAfter + 1).join(" "),
  ];
}

export default function ServiceHeader({
  title,
  description,
  bgImage,
  overlayDark = "8",
  cta,
}: ServiceHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const [titleLead, titleEmphasis] = splitTitle(title);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background"
    >
      {/* Hero image, server rendered so the browser can start it immediately.
          `priority` because this is the LCP candidate on every service page, and
          `sizes="100vw"` because the wrapper is inset-0 on a full width section. */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-background pointer-events-none"
            style={{ opacity: OVERLAY_OPACITY[overlayDark] ?? 0.88 }}
          />
        </div>
      )}

      {/* Background Decor & Textures */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/patterns/noise.png')] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="sub-title !mb-0 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                What We Do
              </span>
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
              >
                <span className="text-foreground">{titleLead} </span>
                {titleEmphasis && (
                  <span className="text-primary italic block md:inline">
                    {titleEmphasis}
                  </span>
                )}
              </h1>
            </div>

            <div ref={descRef} className="space-y-10 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/30 pl-6 py-2">
                {description}
              </p>

              <div>
                <Link
                  href={cta?.link ?? "/contact"}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary-foreground transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cta?.caption ?? "Discuss Your Project"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative [perspective:1000px]">
            <div
              className="relative w-full max-w-sm mx-auto rounded-[2rem] p-8 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 backdrop-blur-2xl overflow-hidden group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/patterns/noise.png')]" />

              <div
                className="relative z-10 space-y-8"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    Available for Projects
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tight leading-tight">
                    Not sure where <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">
                      to start?
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium pr-4">
                    Book a free 30 minute call. We will talk through your idea
                    and tell you honestly what it takes to build it.
                  </p>
                </div>

                {/* Interactive Action Button */}
                <Link
                  href="/contact"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group/btn"
                >
                  <span className="font-bold text-xs uppercase tracking-widest text-foreground">
                    Book Discovery Call
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover/btn:rotate-0 transition-all duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}
