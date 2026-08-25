"use client";

import { formatDate } from "@/lib/utils";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Calendar,
  User,
  Filter,
  X,
} from "@/declarations/icons";
import { Blog } from "@/types/cms";
import Pagination from "@/components/shared/Pagination";

const ITEMS_PER_PAGE = 6;

function BlogsContent({ blogs = [] }: { blogs?: Blog[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("category") || "All";
  const selectedTag = searchParams.get("tag") || "";
  const [searchVal, setSearchVal] = useState(searchParams.get("search") || "");
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const categoriesMap = new Map<string, number>();
  const tagsSet = new Set<string>();

  blogs.forEach((blog) => {
    const catName =
      typeof blog.category === "string"
        ? blog.category
        : (blog.category as unknown as { name: string })?.name;
    if (catName) {
      categoriesMap.set(catName, (categoriesMap.get(catName) || 0) + 1);
    }
    blog.tags?.forEach((t) => {
      if (t.tag) tagsSet.add(t.tag);
    });
  });

  const dynamicCategories = Array.from(categoriesMap.entries()).map(
    ([name, count]) => ({
      name,
      count,
    })
  );
  const dynamicTags = Array.from(tagsSet);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const catName =
        typeof blog.category === "string"
          ? blog.category
          : (blog.category as unknown as { name: string })?.name;

      const matchesCategory =
        selectedCategory === "All" || (catName && catName === selectedCategory);

      const matchesTag =
        !selectedTag ||
        (blog.tags && blog.tags.some((t) => t.tag === selectedTag));

      const title = blog.title || "";
      const excerpt = blog.excerpt || "";
      const matchesSearch =
        !searchVal ||
        title.toLowerCase().includes(searchVal.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchVal.toLowerCase());

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [blogs, selectedCategory, selectedTag, searchVal]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const activePage = Math.min(Math.max(1, currentPage), totalPages || 1);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogs, activePage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }
    params.delete("page");
    router.replace(`/blogs?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    router.push(`/blogs?${params.toString()}`, { scroll: true });
  };

  const handleClearFilters = () => {
    setSearchVal("");
    router.push("/blogs");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
      {/* Main Content: Blog Feed */}
      <div className="lg:col-span-8 space-y-16">
        {paginatedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {paginatedBlogs.map((post, idx) => (
              <article key={post._id || post.slug} className="group space-y-6">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden rounded-[32px] border border-border/50"
                >
                  <Image
                    src={
                      post.seo?.ogImage ||
                      `/assets/imgs/blog/${(idx % 3) + 1}.jpg`
                    }
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>
                        {formatDate(post.publishedAt || post.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-primary" />
                      <span>{post.author?.name || "Alpha Brackets"}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors pt-2"
                  >
                    Read Analysis <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-[32px] border border-border/50 bg-muted/10">
            <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-20" />
            <h3 className="text-2xl font-bold text-muted-foreground">
              No blogs found
            </h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {filteredBlogs.length > 0 && (
          <Pagination
            currentPage={activePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-12">
        {/* Search Widget */}
        <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
            Search Chronicle
          </h4>
          <div className="relative group">
            <input
              type="text"
              placeholder="Keywords..."
              value={searchVal}
              onChange={handleSearchChange}
              className="w-full bg-background border border-border group-focus-within:border-primary transition-colors rounded-full px-6 py-4 text-sm outline-none"
            />
            {searchVal ? (
              <button
                onClick={() => {
                  setSearchVal("");
                  const params = new URLSearchParams(window.location.search);
                  params.delete("search");
                  router.replace(`/blogs?${params.toString()}`, {
                    scroll: false,
                  });
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
            ) : (
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            )}
          </div>
        </div>

        {/* Categories Widget */}
        <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
            Categories
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/blogs"
                className={`flex items-center justify-between group ${
                  selectedCategory === "All" ? "text-primary" : ""
                }`}
              >
                <span
                  className={`text-sm font-bold transition-colors ${
                    selectedCategory === "All"
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  All Categories
                </span>
                <span className="text-[10px] font-black text-muted-foreground bg-muted px-2 py-1 rounded-md">
                  {blogs.length}
                </span>
              </Link>
            </li>
            {dynamicCategories.length > 0 ? (
              dynamicCategories.map((cat, i) => (
                <li key={i}>
                  <Link
                    href={`/blogs?category=${encodeURIComponent(cat.name)}`}
                    className="flex items-center justify-between group"
                  >
                    <span
                      className={`text-sm font-bold transition-colors ${
                        selectedCategory === cat.name
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-primary"
                      }`}
                    >
                      {cat.name}
                    </span>
                    <span className="text-[10px] font-black text-muted-foreground bg-muted px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-muted-foreground">
                No categories yet.
              </li>
            )}
          </ul>
        </div>

        {/* Recent Posts Widget */}
        <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
            Recent Analysis
          </h4>
          <div className="space-y-6">
            {blogs.slice(0, 3).map((post, idx) => (
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
                    {post.category}
                  </span>
                  <h5 className="text-sm font-bold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tags Widget */}
        <div className="p-8 rounded-[32px] bg-muted/20 border border-border/50 space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
            Trending Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {dynamicTags.length > 0 ? (
              dynamicTags.map((tag, i) => (
                <Link
                  key={i}
                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                  className={`px-4 py-2 rounded-full border transition-all text-[10px] font-black uppercase tracking-widest bg-background ${
                    selectedTag === tag
                      ? "border-primary text-primary"
                      : "border-border hover:border-primary hover:text-primary text-muted-foreground"
                  }`}
                >
                  #{tag}
                </Link>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">
                No trending tags.
              </span>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function Blogs({ blogs = [] }: { blogs?: Blog[] }) {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Suspense
          fallback={<div className="text-center py-24">Loading blogs...</div>}
        >
          <BlogsContent blogs={blogs} />
        </Suspense>
      </div>
    </section>
  );
}
