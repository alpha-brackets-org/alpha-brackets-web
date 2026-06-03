"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Filter, X } from "@/declarations/icons";
import { CaseStudy } from "@/types/cms";

export default function CaseStudiesGrid({
  caseStudies = [],
}: {
  caseStudies?: CaseStudy[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(6);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(caseStudies.map((p) => p.category).filter(Boolean))
      ),
    ] as string[];
  }, [caseStudies]);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((caseStudy) => {
      const matchesCategory =
        activeCategory === "All" || caseStudy.category === activeCategory;
      const projectTitle = caseStudy.projectTitle || "";
      const excerpt = caseStudy.excerpt || "";
      const client = caseStudy.client || "";
      const matchesSearch =
        projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [caseStudies, activeCategory, searchQuery]);

  const visibleCaseStudies = filteredCaseStudies.slice(0, displayCount);

  return (
    <section className="pb-40 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-20 p-4 rounded-3xl bg-accent/5 border border-border/50 sticky top-24 z-30 backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-background border border-border/50 rounded-full text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {visibleCaseStudies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleCaseStudies.map((caseStudy) => {
              const studyTag = caseStudy.tags?.[0]?.tag || "Case Study";
              return (
                <div
                  key={caseStudy._id || caseStudy.slug}
                  className="group flex flex-col bg-accent/5 rounded-[24px] border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={caseStudy.coverImage || "/assets/imgs/blog/1.jpg"}
                      alt={caseStudy.projectTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Featured Badge */}
                    {caseStudy.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white bg-primary px-3 py-1.5 rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {studyTag}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {caseStudy.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {caseStudy.projectTitle}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {caseStudy.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-primary hover:gap-3 transition-all"
                      >
                        View Detail <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-40">
            <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-20" />
            <h3 className="text-2xl font-bold text-muted-foreground">
              No case studies found
            </h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredCaseStudies.length > displayCount && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 8)}
              className="px-12 py-4 rounded-full border border-border hover:border-primary/50 text-xs font-bold uppercase tracking-widest transition-all hover:bg-primary/5"
            >
              Load More Case Studies
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
