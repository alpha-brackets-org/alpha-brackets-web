"use client";

import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

function TeamMemberIntro() {
  const skills = [
    { name: "Development", value: 90 },
    { name: "Design", value: 85 },
    { name: "Strategy", value: 95 },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border border-border/50">
              <Image
                src="/assets/imgs/team/1.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Saad Qadir
              </h2>
              <h6 className="text-primary font-bold uppercase tracking-widest">
                Founder & Technical Lead
              </h6>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading the technical vision and strategic execution at Alpha
              Brackets. Focused on delivering high-velocity, scalable solutions
              for modern businesses.
            </p>
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
        </div>
      </div>
    </section>
  );
}

export default TeamMemberIntro;
