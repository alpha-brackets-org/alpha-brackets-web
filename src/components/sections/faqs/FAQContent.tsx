"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search, HelpCircle, Filter } from "@/declarations/icons";
import { cn } from "@/lib/utils";


import { Faq } from "@/types/cms";

interface CleanFaqItem {
  q: string;
  a: string;
}

interface CleanGroupedFaq {
  category: string;
  questions: CleanFaqItem[];
}

export default function FAQContent({
  faqs = [],
}: {
  faqs?: Faq[];
}) {
  const [activeIndex, setActiveIndex] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  const groupedFaqs = useMemo<CleanGroupedFaq[]>(() => {
    if (faqs && faqs.length > 0) {
      // 1. Filter out non-published status
      const publishedFaqs = faqs.filter(
        (faq) => !faq.status || faq.status === "published"
      );

      // 2. Group by category/group name
      const groups: Record<
        string,
        { category: string; questions: { q: string; a: string; order: number }[] }
      > = {};

      publishedFaqs.forEach((faq) => {
        const categoryName = faq.group || "General";
        if (!groups[categoryName]) {
          groups[categoryName] = {
            category: categoryName,
            questions: [],
          };
        }
        groups[categoryName].questions.push({
          q: faq.question,
          a: faq.answer,
          order: faq.order ?? 0,
        });
      });

      // Sort questions in each category by order
      return Object.values(groups).map((group) => {
        const sortedQuestions = [...group.questions]
          .sort((a, b) => a.order - b.order)
          .map((item) => ({ q: item.q, a: item.a }));
        return {
          category: group.category,
          questions: sortedQuestions,
        };
      });
    }

    // No CMS data available
    return [];
  }, [faqs]);

  const totalFilteredQuestionsCount = useMemo(() => {
    return groupedFaqs.reduce((acc, cat) => {
      const count = cat.questions.filter(
        (q: CleanFaqItem) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ).length;
      return acc + count;
    }, 0);
  }, [groupedFaqs, searchQuery]);

  const toggleAccordion = (index: string) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-20 group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full h-16 pl-16 pr-6 rounded-2xl bg-accent/5 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-16">
            {totalFilteredQuestionsCount > 0 ? (
              groupedFaqs.map((cat, catIdx: number) => {
                const filteredQuestions = cat.questions.filter(
                  (q: CleanFaqItem) =>
                    q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.a.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (filteredQuestions.length === 0) return null;

                return (
                  <div key={catIdx} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-[2px] bg-primary/30" />
                      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {filteredQuestions.map((item: CleanFaqItem, qIdx: number) => {
                        const id = `${catIdx}-${qIdx}`;
                        const isOpen = activeIndex === id;

                        return (
                          <div
                            key={qIdx}
                            className={cn(
                              "group border rounded-3xl transition-all duration-500 overflow-hidden",
                              isOpen
                                ? "bg-accent/5 border-primary/30 shadow-2xl shadow-primary/5"
                                : "border-border/50 hover:border-primary/20 hover:bg-accent/2"
                            )}
                          >
                            <button
                              onClick={() => toggleAccordion(id)}
                              className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
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
                                    ? "bg-primary border-primary rotate-180"
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

                            <div
                              className={cn(
                                "px-8 transition-all duration-500 ease-in-out overflow-hidden",
                                isOpen
                                  ? "max-h-[500px] pb-8 opacity-100"
                                  : "max-h-0 opacity-0"
                              )}
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
                );
              })
            ) : (
              <div className="text-center py-24 rounded-[32px] border border-border/50 bg-muted/10">
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-20" />
                <h3 className="text-2xl font-bold text-muted-foreground">No FAQs found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search query.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Clear search query
                </button>
              </div>
            )}
          </div>

          {/* Help Footer */}
          <div className="mt-24 p-12 rounded-[40px] bg-primary relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Still have questions?
                </h4>
                <p className="text-white/80">
                  Can't find the answer you're looking for? Talk to our team.
                </p>
              </div>
              <button className="h-14 px-10 rounded-full bg-white text-primary font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl">
                Get in Touch
              </button>
            </div>
            {/* Background Icon */}
            <HelpCircle className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
