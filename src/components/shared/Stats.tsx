import React from "react";
import { STATS } from "@/data/stats";

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-background border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative inline-block mb-4">
                <h3 className="text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40 group-hover:scale-105 transition-transform duration-500">
                  {stat.value}
                </h3>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/20 rounded-full group-hover:w-full group-hover:bg-primary/40 transition-all duration-500" />
              </div>
              <h6 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
