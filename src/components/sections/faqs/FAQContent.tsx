"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Plus, Minus, Search, HelpCircle, Filter } from "@/declarations/icons";
import { cn } from "@/lib/utils";

import { FaqGroup, FaqItem } from "@/data/faqs";

// Below this many questions a search box is more clutter than help, so it is
// hidden and the list is just read top to bottom.
const SEARCH_THRESHOLD = 8;

export default function FAQContent({ groups = [] }: { groups?: FaqGroup[] }) {
  const [activeIndex, setActiveIndex] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  const totalQuestions = useMemo(
    () => groups.reduce((acc, group) => acc + group.questions.length, 0),
    [groups]
  );

  const showSearch = totalQuestions >= SEARCH_THRESHOLD;
  const query = searchQuery.trim().toLowerCase();

  const visibleGroups = useMemo(
    () =>
      groups
        .map((group, groupIndex) => ({
          ...group,
          groupIndex,
          questions: group.questions.filter(
            (item: FaqItem) =>
              !query ||
              item.q.toLowerCase().includes(query) ||
              item.a.toLowerCase().includes(query)
          ),
        }))
        .filter((group) => group.questions.length > 0),
    [groups, query]
  );

  const toggleAccordion = (index: string) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="sr-only">Frequently asked questions</h2>

          {showSearch && (
            <div className="relative mb-20 group">
              <label htmlFor="faq-search" className="sr-only">
                Search the questions
              </label>
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input
                id="faq-search"
                type="search"
                placeholder="Search the questions"
                className="w-full h-16 pl-16 pr-6 rounded-2xl bg-accent/5 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          <div className={cn("space-y-16", !showSearch && "mt-4")}>
            {visibleGroups.length > 0 ? (
              visibleGroups.map((cat) => (
                <div key={cat.category} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-[2px] bg-primary/30" />
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.questions.map((item, qIdx) => {
                      const id = `${cat.groupIndex}-${qIdx}`;
                      const isOpen = activeIndex === id;
                      const panelId = `faq-panel-${id}`;
                      const buttonId = `faq-button-${id}`;

                      return (
                        <div
                          key={item.q}
                          className={cn(
                            "group border rounded-3xl transition-all duration-500 overflow-hidden",
                            isOpen
                              ? "bg-accent/5 border-primary/30"
                              : "border-border/50 hover:border-primary/20"
                          )}
                        >
                          <h4>
                            <button
                              id={buttonId}
                              type="button"
                              onClick={() => toggleAccordion(id)}
                              aria-expanded={isOpen}
                              aria-controls={panelId}
                              className="w-full flex items-center justify-between p-8 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-3xl"
                            >
                              <span
                                className={cn(
                                  "text-xl font-bold tracking-tight transition-colors",
                                  isOpen
                                    ? "text-foreground"
                                    : "text-foreground/80 group-hover:text-foreground"
                                )}
                              >
                                {item.q}
                              </span>
                              <div
                                className={cn(
                                  "shrink-0 ml-6 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
                                  isOpen
                                    ? "bg-primary border-primary"
                                    : "border-border/50 group-hover:border-primary/50"
                                )}
                              >
                                {isOpen ? (
                                  <Minus className="w-4 h-4 text-white" />
                                ) : (
                                  <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                )}
                              </div>
                            </button>
                          </h4>

                          {/* `hidden` rather than the old max-h-[500px] cap,
                              which silently clipped longer answers. This also
                              keeps collapsed answers out of the accessibility
                              tree and the tab order. */}
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            hidden={!isOpen}
                            className="px-8 pb-8"
                          >
                            <div className="pt-4 border-t border-primary/10">
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              // Only reachable with an active search, since the static content
              // is never empty. Copy assumes a query for that reason.
              <div className="text-center py-24 rounded-[32px] border border-border/50 bg-muted/10">
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-20" />
                <h3 className="text-2xl font-bold text-muted-foreground">
                  Nothing matched that
                </h3>
                <p className="text-muted-foreground mt-2">
                  Try a different word, or just ask us directly.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Clear the search
                </button>
              </div>
            )}
          </div>

          {/* Help Footer. PageCTA is hidden on /faqs, so this is the page's
              only route to contact. It must always be a real link. */}
          <div className="mt-24 p-12 rounded-[40px] bg-primary relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-white/80">
                  Ask us directly. The first call is free and there is no pitch.
                </p>
              </div>
              <Link
                href="/contact"
                className="h-14 px-10 inline-flex items-center rounded-full bg-white text-primary font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                Get in Touch
              </Link>
            </div>
            {/* Background Icon */}
            <HelpCircle className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
