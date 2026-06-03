import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "@/declarations/icons";

import { Blog } from "@/types/cms";

export default function ContentPillars({
  articles = [],
}: {
  articles?: Blog[];
}) {
  if (!articles || articles.length === 0) return null;

  const activeArticles = articles;

  return (
    <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[15vw] font-black text-foreground/[0.02] select-none pointer-events-none whitespace-nowrap leading-none uppercase">
        Insights
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="sub-title">Engineering Intelligence</span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mt-4">
              Strategic insights{" "}
              <span className="font-extralight text-muted-foreground italic">
                for operators & founders.
              </span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:gap-5 transition-all group shrink-0"
          >
            All Articles
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Featured + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <Link
            href={`/blogs/${activeArticles[0].slug}`}
            className="lg:col-span-7 group block relative h-full"
          >
            <div className="h-full min-h-[580px] p-10 lg:p-14 rounded-[2.5rem] border border-border/50 bg-[#080808] hover:border-primary/30 transition-all duration-700 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Background Image with sophisticated overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={
                    activeArticles[0].seo?.ogImage || "/assets/imgs/blog/1.jpg"
                  }
                  alt={activeArticles[0].title}
                  fill
                  className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 to-transparent" />
              </div>

              {/* Ghost number/Label */}
              <div className="absolute top-10 right-10 text-[180px] font-black text-white/[0.03] leading-none select-none italic tracking-tighter group-hover:text-primary/[0.05] transition-colors duration-700">
                01
              </div>

              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                    Featured Insight
                  </span>
                  <div className="h-px w-12 bg-primary/30" />
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    <Clock className="w-3.5 h-3.5" />
                    {activeArticles[0].readTime}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white group-hover:text-primary transition-all duration-500 mb-8">
                  {activeArticles[0].title}
                </h3>

                <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-medium group-hover:text-white transition-colors duration-500 line-clamp-3">
                  {activeArticles[0].excerpt}
                </p>

                <div className="mt-12 flex flex-wrap gap-3">
                  {["Architecture", "Scale", "Strategy"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-md border border-white/5 bg-white/5 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary mt-12 group-hover:gap-6 transition-all duration-500">
                Read Full Insight
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Article Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col">
            {activeArticles.slice(1, 4).map((article) => (
              <Link
                key={article._id || article.slug}
                href={`/blogs/${article.slug}`}
                className="block group flex-1"
              >
                <div className="h-full p-8 rounded-[2rem] border border-border/50 bg-[#0a0a0a] hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
                  {/* Subtle hover glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg lg:text-xl leading-tight text-white group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
