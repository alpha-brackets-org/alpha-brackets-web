"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/declarations/animations";
import { Play, ArrowRight } from "@/declarations/icons";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { ServiceHeaderProps } from "@/types";
import { cn } from "@/lib/utils";

export default function ServiceHeader({
  title,
  description,
  videoLink,
  bgImage,
  overlayDark = "8",
}: ServiceHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

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

      // Badge Floating Animation
      gsap.to(badgeRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3D Tilt Effect for the new CTA Card - Refined for "Mature" look
      if (badgeRef.current) {
        const card = badgeRef.current;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const { clientX, clientY } = e;

          // Only tilt if mouse is relatively near the card to avoid "revolving" from far away
          const padding = 100; // Activation zone padding
          if (
            clientX < rect.left - padding ||
            clientX > rect.right + padding ||
            clientY < rect.top - padding ||
            clientY > rect.bottom + padding
          ) {
            handleMouseLeave();
            return;
          }

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Reduced rotation (max 5 degrees) for a more subtle, premium feel
          const rotateY = ((clientX - centerX) / (rect.width / 2)) * 5;
          const rotateX = -((clientY - centerY) / (rect.height / 2)) * 5;

          gsap.to(card, {
            rotationY: rotateY,
            rotationX: rotateX,
            transformPerspective: 1200, // Increased perspective for depth
            ease: "expo.out", // Smoother, high-end easing
            duration: 0.6,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            ease: "elastic.out(1, 0.3)", // Adds a slight premium "snap" back
            duration: 1.2,
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[85vh] flex items-center pt-32 pb-48 overflow-hidden",
        bgImage ? "bg-img" : "bg-background"
      )}
      data-background={bgImage ?? ""}
      data-overlay-dark={overlayDark}
    >
      {/* Background Decor & Textures */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/assets/imgs/patterns/noise.png')] z-0" />

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="sub-title !mb-0 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Service Expertise
              </span>
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
              >
                {title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={cn(
                      i === 0
                        ? "text-foreground"
                        : "text-primary italic block md:inline"
                    )}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </div>

            <div ref={descRef} className="space-y-10 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/30 pl-6 py-2">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 shadow-xl shadow-primary/20 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>

                {videoLink && (
                  <Link
                    href={videoLink}
                    className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    <span>Watch Expertise</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative [perspective:1000px]">
            <div
              ref={badgeRef}
              className="relative w-full max-w-sm mx-auto rounded-[2rem] p-8 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Internal Animated Glows */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/30 rounded-full blur-[60px] group-hover:bg-primary/50 group-hover:scale-150 transition-all duration-700" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-700" />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/assets/imgs/patterns/noise.png')]" />

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
                    Book a complimentary 30-minute discovery session with our
                    engineering leads to discuss architecture, timeline, and
                    scope.
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
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]">
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
