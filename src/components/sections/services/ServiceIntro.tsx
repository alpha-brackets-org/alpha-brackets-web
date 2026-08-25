import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/declarations/icons";

import { ServiceIntroProps } from "@/types/service";

// No `stats` prop. Numbers render once per service page, in WhyChooseUs.
function ServiceIntro({ title, description, solutions }: ServiceIntroProps) {
  // No generic fallback. `solutions` is required on the Service type, so an empty
  // list here means the caller passed nothing and we render nothing, rather than
  // filling the page with another service's offering. See src/data/services.ts.
  const displaySolutions = solutions ?? [];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decor line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: text */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="sub-title flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                What You Get
              </span>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tight leading-[0.9] uppercase">
                {title ?? (
                  <>
                    What we build,{" "}
                    <span className="font-extralight text-muted-foreground italic block">
                      and how.
                    </span>
                  </>
                )}
              </h2>
            </div>
 
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-medium border-l-2 border-border/50 pl-8">
                {description ??
                  "We work as your product team. One team handles design, development, AI, and launch. If something needs to change after your first users try it, we are still there."}
              </p>
            </div>

            <div className="pl-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary group"
              >
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>Discuss Project</span>
              </Link>
            </div>
          </div>

          {/* Right: solutions list and the timeline stat */}
          <div className="space-y-16">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 space-y-10 relative overflow-hidden group">
              {/* Corner accent */}

              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest font-black text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Solutions We Provide
                </h3>
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

              {/* We pick tools per project, so no fixed stack list is shown here */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We pick the tools to fit your project, not the other way
                  round. On the first call we will tell you what we would build
                  it with and why.
                </p>
              </div>
            </div>

            {/* No stat grid here on purpose. The timeline figure used to render in
                this section AND again in WhyChooseUs further down the same page, so
                every service page showed the same number twice. Stats now live only
                in WhyChooseUs, where a number reads as a reason to choose us. */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIntro;
