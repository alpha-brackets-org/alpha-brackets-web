"use client";

import { useState } from "react";
import { Plus, Minus } from "@/declarations/icons";
import { cn } from "@/lib/utils";
import { WhyChooseUsProps } from "@/types";

export default function WhyChooseUs({
  title = "",
  diffrentials = [],
  stats,
}: WhyChooseUsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  // Render exactly what the caller passes, and nothing when it passes nothing.
  //
  // This used to top the caller's stats up from the global STATS list, which is
  // what put the same two numbers on all ten service pages: only two services
  // defined a stat, so the other eight received the shared pair wholesale, and the
  // two that did got topped up to match. Do not reintroduce a fallback here. A
  // service with no honest number should show none, see the note in
  // src/data/services.ts.
  const displayStats = stats ?? [];
  const hasStats = displayStats.length > 0;

  // Service titles are written to end with "Alpha Brackets" (see src/data/services.ts),
  // so the last two words are the emphasis. Guard short titles so a two-word
  // heading doesn't end up entirely italic with nothing in front of it.
  const words = title.split(" ");
  const emphasisCount = words.length > 3 ? 2 : 1;
  const lead = words.slice(0, -emphasisCount).join(" ");
  const emphasis = words.slice(-emphasisCount).join(" ");

  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden relative">
      {/* Background glow */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Two columns when there are stats to sit beside the accordion. Without
            them the left column would be a heading and a decorative line next to a
            tall accordion, which reads as broken rather than deliberate, so the
            layout drops to one column and the accordion takes the width. Half the
            services have no honest number, so both states are common. */}
        <div
          className={cn(
            hasStats
              ? "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
              : "space-y-12"
          )}
        >
          {/* Heading, plus the stats when this service has any */}
          <div className={cn("space-y-8", !hasStats && "max-w-2xl")}>
            <div>
              <span className="sub-title">Why Choose Us</span>
              <h2 className="mt-4">
                {lead}{" "}
                <span className="font-extralight text-muted-foreground">
                  {emphasis}.
                </span>
              </h2>
            </div>

            {hasStats && (
              <>
                {/* Column count follows the number of stats, so a lone pill fills
                    its row instead of sitting half width. */}
                <div
                  className={cn(
                    "grid gap-4 pt-4",
                    displayStats.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  )}
                >
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
              </>
            )}
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {diffrentials.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border transition-all duration-300",
                    isOpen
                      ?"border-primary/40 bg-primary/5"
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
                          ? "bg-primary border-primary text-primary-foreground rotate-0"
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
