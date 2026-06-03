"use client";

import Image from "next/image";
import { CLIENT_BRANDS as BRANDS } from "@/data/clients";

export default function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-background border-y border-border/30 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Ecosystem Partners
          </span>
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
            We&apos;re proud to work with <br className="hidden md:block" /> a{" "}
            <span className="font-extralight text-muted-foreground italic">
              diverse range of companies.
            </span>
          </h3>
        </div>

        {/* CSS Marquee */}
        <div className="relative group">
          {/* Side Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden select-none gap-12 lg:gap-24">
            <div className="flex flex-none justify-around items-center min-w-full gap-12 lg:gap-24 animate-marquee py-10">
              {BRANDS.map((logo, index) => (
                <div
                  key={`m1-${index}`}
                  className="flex-none grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative w-32 lg:w-40 h-12 lg:h-16">
                    <Image
                      src={logo}
                      alt="Client logo"
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div
              className="flex flex-none justify-around items-center min-w-full gap-12 lg:gap-24 animate-marquee py-10"
              aria-hidden="true"
            >
              {BRANDS.map((logo, index) => (
                <div
                  key={`m2-${index}`}
                  className="flex-none grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <div className="relative w-32 lg:w-40 h-12 lg:h-16">
                    <Image
                      src={logo}
                      alt="Client logo"
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 border-t border-border/30 pt-12 mt-8">
          <div className="flex -space-x-3 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-muted overflow-hidden relative"
              >
                <Image
                  src={`/assets/imgs/testimonials/t${i > 2 ? 1 : i}.jpg`}
                  alt="User"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium tracking-wide text-muted-foreground/80">
            More than{" "}
            <span className="text-foreground font-bold">200+ companies</span>{" "}
            trusted our engineering worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
