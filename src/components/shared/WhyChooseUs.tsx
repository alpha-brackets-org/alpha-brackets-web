"use client";

import { useState } from "react";
import { Plus, Minus } from "@/declarations/icons";
import { cn } from "@/lib/utils";
import { STATS } from "@/data/stats";
import { WhyChooseUsProps } from "@/types";

export default function WhyChooseUs({
  title = "",
  diffrentials = [],
}: WhyChooseUsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  const displayStats = STATS.slice(0, 4);

  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading + visual */}
          <div className="space-y-8">
            <div>
              <span className="sub-title">Why Choose Us</span>
              <h2 className="mt-4">
                {title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="font-extralight text-muted-foreground">
                  {title.split(" ").slice(-2).join(" ")}.
                </span>
              </h2>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {displayStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl border border-border/50 bg-card space-y-1"
                >
                  <div className="text-2xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative line accent */}
            <div className="h-px w-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {diffrentials.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5"
                      : "border-border/50 bg-card hover:border-border"
                  )}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "text-xs font-extrabold tabular-nums w-6 shrink-0 transition-colors",
                          isOpen ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-semibold text-sm transition-colors",
                          isOpen
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        )}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                        isOpen
                          ? "bg-primary border-primary text-white rotate-0"
                          : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {/* Animated content */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed pl-16">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
