import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/declarations/icons";
import { cn } from "@/lib/utils";

import { ServiceIntroProps } from "@/types/service";
import { TECH_STACK } from "@/data/tech-stack";
import { DEFAULT_SOLUTIONS, DEFAULT_SERVICE_STATS } from "@/data/services";

function ServiceIntro({
  title,
  description,
  solutions,
  stats,
}: ServiceIntroProps) {
  const displaySolutions = solutions ?? DEFAULT_SOLUTIONS;

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decor line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left — Text */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="sub-title flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                How We Work
              </span>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tight leading-[0.9] uppercase">
                {title ?? (
                  <>
                    Future-ready tech,{" "}
                    <span className="font-extralight text-muted-foreground italic block">
                      built for growth.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-medium border-l-2 border-border/50 pl-8">
                {description ??
                  "We embed with your team as a technical and strategic partner — not a black-box vendor. Every product we ship is designed to integrate intelligent features, scale without rewrites, and move at startup speed."}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base pl-8 opacity-80">
                From the first line of code to post-launch growth campaigns, we
                stay accountable to your outcomes — not just your deliverables.
              </p>
            </div>

            <div className="pl-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary group"
              >
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>Discuss Project</span>
              </Link>
            </div>
          </div>

          {/* Right — Solutions & Tech */}
          <div className="space-y-16">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 space-y-10 relative overflow-hidden group">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

              <div className="space-y-6">
                <h6 className="text-xs uppercase tracking-widest font-black text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Solutions We Provide
                </h6>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {displaySolutions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-semibold text-muted-foreground group/item"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Mini Grid */}
              <div className="pt-10 border-t border-border/50 space-y-6">
                <h6 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
                  Powered by Industry Standards
                </h6>
                <div className="flex flex-wrap gap-4 lg:gap-6">
                  {TECH_STACK.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 group/tech opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover/tech:bg-primary/10 group-hover/tech:text-primary transition-all">
                        <tech.icon className={cn("w-4 h-4")} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats — Premium Cards */}
            <div className="grid grid-cols-2 gap-4">
              {(stats ?? DEFAULT_SERVICE_STATS).map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-primary/10 bg-primary/5 flex flex-col items-center justify-center text-center space-y-1 transition-all hover:scale-[1.02]"
                >
                  <div className="text-3xl lg:text-4xl font-black italic text-primary">
                    {stat.value}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIntro;
