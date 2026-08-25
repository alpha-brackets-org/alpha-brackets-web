import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "@/declarations/icons";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";
import { CaseStudy } from "@/types/cms";

export interface FeaturedCaseStudiesProps {
  caseStudies?: CaseStudy[];
  highlight?: string[];
  heading?: string;
}
export default function FeaturedCaseStudies({
  caseStudies = [],
  highlight,
  heading = "Built by Alpha Brackets",
}: FeaturedCaseStudiesProps) {
  // If highlight is provided, filter them. Otherwise, default to featured ones
  const activeCaseStudies = highlight
    ? caseStudies.filter((cs) =>
        highlight.includes(cs.projectTitle || cs.slug || "")
      )
    : caseStudies.filter((cs) => cs.featured);

  if (activeCaseStudies.length === 0) return null;

  return (
    <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div className="space-y-4">
            <span className="sub-title">Featured Work</span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              {heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-extralight text-muted-foreground italic">
                {heading.split(" ").slice(-1)[0]}.
              </span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:gap-5 transition-all group"
          >
            All Case Studies
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Cards */}
        <div
          className={cn(
            "grid grid-cols-1 gap-8",
            activeCaseStudies.length === 1
              ? "lg:grid-cols-1 max-w-4xl mx-auto"
              : activeCaseStudies.length === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-3"
          )}
        >
          {activeCaseStudies.map((project) => (
            <Link
              key={project._id || project.slug}
              href={`/case-studies/${project.slug}`}
              className="group block h-full"
            >
              <SpotlightCard className="h-full p-0 overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.coverImage || "/assets/imgs/blog/1.jpg"}
                    alt={project.projectTitle || "Case Study"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-foreground bg-primary px-3 py-1.5 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {project.category || "Case Study"}
                    </div>
                    <h4 className="font-black text-2xl lg:text-3xl uppercase italic leading-none text-foreground group-hover:text-primary transition-colors">
                      {project.projectTitle}
                    </h4>
                    {project.client && (
                      <p className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-tighter italic">
                        {project.client}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-medium">
                    {project.excerpt}
                  </p>

                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.services.map((s: string) => (
                        <span
                          key={s}
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-border/50 bg-muted/20 text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
