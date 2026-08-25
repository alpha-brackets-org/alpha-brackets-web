import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/declarations/icons";
import { Button } from "@/components/ui/button";

function Blog() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <div className="flex items-center">
            <div>
              <span className="text-primary mb-2 block uppercase tracking-widest text-sm font-medium">
                Our Blogs
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold">
                Latest{" "}
                <span className="font-extralight text-muted-foreground">
                  News.
                </span>
              </h2>
            </div>
            <div className="ml-auto flex items-center">
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-6 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Link href="/blog-classic">View All</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Blog Item 1 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl aspect-[16/10] relative">
              <Image
                src="/assets/imgs/blog/1.jpg"
                alt="Design Inspiration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="pt-10">
              <div className="flex items-center mb-4 text-sm text-muted-foreground space-x-8">
                <Link
                  href="/blog-classic"
                  className="hover:text-primary transition-colors"
                >
                  By : Admin
                </Link>
                <span className="hover:text-primary transition-colors">
                  August 14, 2023
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-medium mb-8 leading-tight group-hover:text-primary transition-colors">
                Design Inspiration: Where to Find Creative Ideas
              </h4>
              <Link
                href="/blog-details"
                className="inline-flex items-center group/link"
              >
                <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center mr-4 transition-all duration-300 group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-primary-foreground">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Read more
                </span>
              </Link>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl aspect-[16/10] relative">
              <Image
                src="/assets/imgs/blog/2.jpg"
                alt="Typography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="pt-10">
              <div className="flex items-center mb-4 text-sm text-muted-foreground space-x-8">
                <Link
                  href="/blog-classic"
                  className="hover:text-primary transition-colors"
                >
                  By : Admin
                </Link>
                <span className="hover:text-primary transition-colors">
                  August 14, 2023
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-medium mb-8 leading-tight group-hover:text-primary transition-colors">
                Typography: Choosing Fonts for Maximum Impact
              </h4>
              <Link
                href="/blog-details"
                className="inline-flex items-center group/link"
              >
                <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center mr-4 transition-all duration-300 group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-primary-foreground">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
