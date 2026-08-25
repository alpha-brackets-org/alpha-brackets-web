import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import { CaseStudy } from "@/types/cms";

// Alternates two accent variants by index. CaseStudy has no color/border
// fields of its own, this is presentation only.
const CARD_VARIANTS = [
  { color: "from-primary/20 to-primary/5", border: "border-primary/20" },
  { color: "from-primary/10 to-transparent", border: "border-border" },
];

export default function FeaturedWork({ projects }: { projects: CaseStudy[] }) {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sub-title">Featured Work</span>
            <h2 className="mt-4">
              A look at what we&apos;ve{" "}
              <span className="font-extralight text-muted-foreground">
                built.
              </span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline shrink-0 group"
          >
            All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const variant = CARD_VARIANTS[i % CARD_VARIANTS.length];
            const tag = [project.category, project.industry]
              .filter(Boolean)
              .join(" · ");

            return (
              <div
                key={project.slug}
                className={`group relative rounded-3xl border ${variant.border} bg-linear-to-br ${variant.color} p-8 flex flex-col gap-6 transition-all duration-500`}
              >
                <div>
                  {tag && (
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {tag}
                    </div>
                  )}
                  <h4 className="font-extrabold text-2xl">
                    {project.projectTitle}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full border border-border bg-card text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
