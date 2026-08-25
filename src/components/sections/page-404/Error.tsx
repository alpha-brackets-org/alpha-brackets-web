"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ArrowRight } from "@/declarations/icons";
import { cn } from "@/lib/utils";

/**
 * No GSAP here, deliberately.
 *
 * This component had a single decorative float tween (`y: -15, repeat: -1,
 * yoyo: true`). It is rendered by `src/app/not-found.tsx`, and in the App Router
 * the not-found boundary is part of EVERY route's tree, so that one animation put
 * 68.5 KB of GSAP core into the shared first-load chunk of every page on the
 * site, `/terms` and `/privacy` included.
 *
 * It is now the `.animate-float-y` class in globals.css: same motion, no library,
 * runs on the compositor instead of the main thread, and honours
 * prefers-reduced-motion. Do not reintroduce a JS animation library here.
 */
function Error() {
  const marqueeText = "Page Not Found";
  const items = Array(12).fill(marqueeText);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 bg-background overflow-hidden">
      {/* Subtle Background Glows */}

      <div className="container mx-auto px-4 relative z-10 text-center mb-20">
        <h1 className="text-[12rem] md:text-[20rem] font-black leading-none text-white/[0.03] select-none tracking-tighter">
          404
        </h1>
        <div className="-mt-12 md:-mt-24 animate-float-y">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
            Lost in Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            The coordinate you are looking for doesn&lsquo;t exist or has been
            moved to another galaxy.
          </p>

          {/* Helpful Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group p-6 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    Home Base
                  </h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Return to safety and explore from the start.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group p-6 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    Services
                  </h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover how we bridge engineering and strategy.
                </p>
              </div>
            </Link>

            <Link
              href="/blogs"
              className="group p-6 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    Insights
                  </h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Read our latest deep dives and strategy notes.
                </p>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group p-6 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    Contact
                  </h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Reach out for strategic collaboration.
                </p>
              </div>
            </Link>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-full px-12 py-6 text-lg bg-primary hover:bg-primary/90 font-bold"
          >
            <Link href="/" className="flex items-center gap-3">
              <Home className="w-5 h-5" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Marquee Backgrounds */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex whitespace-nowrap overflow-hidden border-y border-foreground py-4",
              i % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
            )}
          >
            <div className="flex shrink-0 items-center gap-12 px-6">
              {items.map((item, j) => (
                <div key={j} className="flex items-center gap-12">
                  <span className="text-6xl md:text-8xl font-black uppercase tracking-widest">
                    {item}
                  </span>
                  <AlertTriangle className="w-12 h-12 md:w-20 md:h-20" />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 items-center gap-12 px-6">
              {items.map((item, j) => (
                <div key={j} className="flex items-center gap-12">
                  <span className="text-6xl md:text-8xl font-black uppercase tracking-widest">
                    {item}
                  </span>
                  <AlertTriangle className="w-12 h-12 md:w-20 md:h-20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Error;
