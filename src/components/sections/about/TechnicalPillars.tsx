"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "@/declarations/icons";
import Link from "next/link";

const PILLARS = [
  {
    title: "SaaS Architecture",
    desc: "Multi-tenant, high-concurrency engines built for global scale.",
    image: "/assets/imgs/portfolio/gms.png",
  },
  {
    title: "AI Integration",
    desc: "Augmenting human workflows with RAG and custom LLM layers.",
    image: "/assets/imgs/portfolio/hexadesk.png",
  },
  {
    title: "Cloud Modernization",
    desc: "Migrating legacy monoliths to resilient, serverless ecosystems.",
    image: "/assets/imgs/portfolio/healthline.png",
  },
];

export default function TechnicalPillars() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-6">
              Our Specializations
            </h2>
            <h3 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Technical depth, <br />{" "}
              <span className="font-extralight text-muted-foreground italic">
                unmatched execution.
              </span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Start a Project{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative min-h-[500px] rounded-[40px] overflow-hidden border border-border/50"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover brightness-[0.3] group-hover:scale-105 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h4 className="text-3xl font-bold mb-4 tracking-tight text-white">
                  {pillar.title}
                </h4>
                <p className="text-white/70 text-lg leading-relaxed mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {pillar.desc}
                </p>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
