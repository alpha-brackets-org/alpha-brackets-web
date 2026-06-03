"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function TeamAbout() {
  const skills = [
    { name: "Strategic Architecture", value: 95 },
    { name: "Technical Execution", value: 90 },
    { name: "Product Design", value: 85 },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">
                Who We Are
              </h2>
              <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight">
                A Collective of <br />
                <span className="font-extralight text-muted-foreground italic">
                  Digital Alchemists.
                </span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are more than just a development team; we are your strategic
                partners in transformation. Our architects don&apos;t just write
                code—they build the foundations for scalable, high-impact
                business outcomes.
              </p>
            </div>

            <div className="space-y-8 pt-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <h5 className="text-xs uppercase tracking-widest font-black text-foreground">
                      {skill.name}
                    </h5>
                    <span className="text-primary font-bold text-sm">
                      {skill.value}%
                    </span>
                  </div>
                  <Progress value={skill.value} className="h-1 bg-muted" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 relative aspect-[4/3] rounded-[40px] overflow-hidden border border-border/50">
                <Image
                  src="/assets/imgs/intro/2.jpg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              <div className="col-span-6 relative aspect-square rounded-[32px] overflow-hidden border border-border/50 -mt-20 ml-10">
                <Image
                  src="/assets/imgs/intro/03.jpg"
                  alt="Design Thinking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="col-span-6 relative aspect-square rounded-[32px] overflow-hidden border border-border/50 -mt-32 mr-10 shadow-2xl">
                <Image
                  src="/assets/imgs/intro/04.jpg"
                  alt="Engineering Excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
