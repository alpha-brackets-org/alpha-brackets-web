import { notFound } from "next/navigation";
import Header from "@/components/sections/blog/BlogDetailsHeader";
import Blog from "@/components/sections/blog/Blog";
import { Metadata } from "next";
import { getBlogBySlug, getBlogs } from "@/lib/cms-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);
  if (!article) return { title: "Not Found | Alpha Brackets" };

  return {
    title: `${article.title} | Alpha Brackets`,
    description: article.excerpt,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, recentBlogs] = await Promise.all([
    getBlogBySlug(slug),
    getBlogs(),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header article={article} />
      <Blog article={article} recentArticles={recentBlogs} />
    </>
  );
}
