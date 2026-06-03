"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/assets/imgs/intro/i1.jpg"
                alt="Engineering Excellence"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Floating Metric */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 p-8 lg:p-10 rounded-[32px] bg-primary text-white shadow-2xl z-20">
              <div className="text-3xl lg:text-4xl font-black mb-2 tracking-tighter">
                40%
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-tight">
                Faster <br /> Time-to-Market
              </p>
            </div>
          </div>

          <div className="space-y-10 lg:pl-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                Bridging intelligence <br />
                <span className="font-extralight text-muted-foreground italic">
                  & technical execution.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Alpha Brackets, we don't just build software. We engineer
                strategic outcomes. Born from the need for technical execution
                that understands business intelligence, we help scaling
                operators and domain experts turn vision into high-performance
                reality.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                Our methodology centers on "Zero-Waste Engineering" — a
                systematic approach that eliminates architectural bloat and
                focuses exclusively on features that drive revenue and
                operational efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link
                href="/case-studies"
                className="inline-flex h-14 items-center px-10 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
              >
                Our Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center px-10 rounded-full border border-border bg-accent/5 text-foreground font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
