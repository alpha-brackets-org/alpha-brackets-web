"use client";
import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "@/declarations/animations";
import { MessageSquare } from "@/declarations/icons";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { Blog } from "@/types/cms";
import { formatDate } from "@/lib/utils";

function Header({ article }: { article: Blog }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    // SEO-friendly: Immediate start, subtle movement
    tl.fromTo(
      ".header .caption",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );
    tl.fromTo(
      ".header .mt-12",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const bgImage = article.seo?.ogImage || "/assets/imgs/blog/1.jpg";
  const authorName = article.author?.name || "Saad Qadir";
  const authorImg = article.author?.image || "/assets/imgs/blog/author.png";
  const publishedDate = formatDate(article.publishedAt) || "May 25, 2026";

  return (
    <div className="header blog-header relative min-h-[70vh] flex items-center pt-32 overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption space-y-6">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {article.category || "Insight"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1]">
                {article.title}
              </h1>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl relative">
                  <Image
                    src={authorImg}
                    alt={`${authorName} - Author of ${article.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">
                    Author
                  </span>
                  <h6 className="text-sm font-bold text-white">
                    {authorName}
                  </h6>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden sm:block" />

              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">
                  Published
                </span>
                <h6 className="text-sm font-bold text-white">{publishedDate}</h6>
              </div>

              <div className="ml-auto hidden md:flex items-center gap-2 text-white/60">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  02 Comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
