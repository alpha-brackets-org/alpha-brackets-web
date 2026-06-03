"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
} from "@/declarations/icons";

import { Blog as BlogType } from "@/types/cms";

export default function Blog({
  article,
  recentArticles = [],
}: {
  article?: BlogType;
  recentArticles?: BlogType[];
}) {
  if (!article) return null;
  const currentArticle = article;

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Main Content: Article */}
          <div className="lg:col-span-8 space-y-12">
            <article className="space-y-8">
              <div
                className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: currentArticle.content || "",
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-border/50">
                  <Image
                    src="/assets/imgs/blog/blog1.jpg"
                    alt="Workplace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-border/50">
                  <Image
                    src="/assets/imgs/blog/blog2.jpg"
                    alt="Design Lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Share & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-border/30">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Tags :
                  </span>
                  <div className="flex gap-2">
                    {["Tech", "Hardware", "Strategy"].map((tag) => (
                      <Link
                        key={tag}
                        href="#"
                        className="px-3 py-1 rounded-full bg-muted text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Share :
                  </span>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="p-10 rounded-[40px] bg-muted/20 border border-border/50 flex flex-col sm:flex-row items-center gap-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src={
                      currentArticle.author?.image ||
                      "/assets/imgs/blog/author.png"
                    }
                    alt={currentArticle.author?.name || "Saad Qadir"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="space-y-4 text-center sm:text-left relative z-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1 block">
                      Article Author
                    </span>
                    <h5 className="text-2xl font-black tracking-tighter text-foreground italic">
                      {currentArticle.author?.name || "Saad Qadir"}
                    </h5>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-xl">
                    {(currentArticle as BlogType & { authorRole?: string })
                      .authorRole ||
                      "Senior Technical Architect specialized in digital transformation and enterprise engineering. Helping founders bridge the gap between vision and execution."}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                    {/* Social links for author could go here */}
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer">
                      <Linkedin className="w-3 h-3" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer">
                      <Twitter className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Form */}
              <div className="pt-20 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black tracking-tighter uppercase italic">
                    Leave a <span className="text-primary">Comment</span>
                  </h3>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-muted/20 border border-border focus:border-primary transition-colors rounded-3xl px-8 py-5 text-sm outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-muted/20 border border-border focus:border-primary transition-colors rounded-3xl px-8 py-5 text-sm outline-none"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <textarea
                      placeholder="Your thoughts..."
                      rows={6}
                      className="w-full bg-muted/20 border border-border focus:border-primary transition-colors rounded-[32px] px-8 py-6 text-sm outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button
                      size="lg"
                      className="rounded-full px-12 py-8 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20"
                    >
                      Post Comment <ArrowRight className="ml-3 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Search Widget */}
            <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
                Search
              </h4>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Keywords..."
                  className="w-full bg-background border border-border group-focus-within:border-primary transition-colors rounded-full px-6 py-4 text-sm outline-none"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
                Categories
              </h4>
              <ul className="space-y-4">
                {(() => {
                  const catsMap = new Map<string, number>();
                  recentArticles.forEach((b) => {
                    const catName =
                      typeof b.category === "string"
                        ? b.category
                        : (b.category as unknown as { name: string })?.name;
                    if (catName)
                      catsMap.set(catName, (catsMap.get(catName) || 0) + 1);
                  });
                  const cats = Array.from(catsMap.entries());
                  return cats.length > 0 ? (
                    cats.map(([name, count], i) => (
                      <li key={i}>
                        <Link
                          href={`/blogs?category=${name}`}
                          className="flex items-center justify-between group"
                        >
                          <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                            {name}
                          </span>
                          <span className="text-[10px] font-black text-muted-foreground/40 bg-muted px-2 py-1 rounded-md">
                            {count}
                          </span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">
                      No categories yet.
                    </li>
                  );
                })()}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
                Recent Analysis
              </h4>
              <div className="space-y-6">
                {recentArticles.slice(0, 3).map((post, idx) => (
                  <Link
                    key={post._id || post.slug}
                    href={`/blogs/${post.slug}`}
                    className="flex items-center gap-5 group"
                  >
                    <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden border border-border/50">
                      <Image
                        src={
                          post.seo?.ogImage ||
                          `/assets/imgs/blog/c${(idx % 3) + 1}.jpg`
                        }
                        alt={post.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                        {post.category || "Insight"}
                      </span>
                      <h5 className="text-sm font-bold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
