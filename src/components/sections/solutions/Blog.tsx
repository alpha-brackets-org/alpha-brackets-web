import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/declarations/icons";
import { Blog as CmsBlog } from "@/types/cms";
import { formatDate } from "@/lib/utils";

function Blog({ blogs = [] }: { blogs?: CmsBlog[] }) {
  const latestArticles = blogs.slice(0, 2);

  if (latestArticles.length === 0) return null;

  return (
    <section className="blog">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Latest <span className="fw-200">Insights</span>
              </span>
            </h2>
            <div className="ml-auto vi-more flex items-center">
              <Link href="/blogs" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </Link>
              <ArrowUpRight className="w-5 h-5 ml-4" />
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our Analysis</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {latestArticles.map((article, idx) => (
            <div key={article._id || article.slug} className="col-lg-6">
              <div className="item md-mb50">
                <div className="img relative aspect-[16/10] overflow-hidden rounded-[32px]">
                  <Image
                    src={
                      article.seo?.ogImage ||
                      `/assets/imgs/blog/${(idx % 3) + 1}.jpg`
                    }
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="cont pt-40">
                  <div className="info sub-title p-color d-flex align-items-center mb-15">
                    <div>
                      <Link href={`/blogs/${article.slug}`}>
                        By : {article.author?.name || "Alpha Brackets"}
                      </Link>
                    </div>
                    <div className="ml-30">
                      <Link href={`/blogs/${article.slug}`}>
                        {formatDate(article.publishedAt || article.createdAt)}
                      </Link>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight line-clamp-2">
                    {article.title}
                  </h4>
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="butn-crev d-flex align-items-center mt-40"
                  >
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </span>
                    <span className="text">Read more</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
