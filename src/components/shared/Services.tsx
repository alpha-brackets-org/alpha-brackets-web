import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FEATURED_SERVICES } from "@/data/featured-services";

// One accent colour for every card. Primary is the site's only accent, see DESIGN.md.
const ACCENT: string = "text-primary bg-primary/10 border-primary/20";

async function Services() {
  // Homepage shows only the Featured + Supporting bundle (business-strategy.md
  // Section 2), the same five the nav mega-menu and footer use. The rest stay live
  // at /services but should not headline the homepage. Order comes from
  // featured-services.ts and is strategy order, not catalog order. This used to
  // filter the catalog instead, which silently discarded that order.
  const services = FEATURED_SERVICES;

  return (
    <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background Decor */}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 relative">
          <div className="space-y-4">
            {/* Was "Everything your product needs, from one team." That is the
                generic-agency sentence, and it sat one block under a hero that spent
                its whole word budget being specific. Naming a number and admitting
                there is a limit is what makes it credible. Do not widen this back
                out. */}
            <span className="sub-title">What We Do</span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Five things we do properly,{" "}
              <span className="font-extralight text-muted-foreground">
                and a catalog behind them.
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline shrink-0 group transition-all"
          >
            All Services
            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-2">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const accentClass = ACCENT;

            return (
              <Link
                key={item._id}
                href={`/services/${item.pragma_link}`}
                className="group block h-full"
              >
                <SpotlightCard className="h-full border-border/40 hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-500">
                  {/* Ghost number */}
                  <div className="absolute top-6 right-6 text-7xl font-black text-foreground/3 select-none group-hover:text-foreground/6 transition-colors leading-none italic">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 flex flex-col h-full gap-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${accentClass}`}
                    >
                      {(() => {
                        const IconComponent = item.card?.icon || ArrowRight;
                        return <IconComponent className="w-6 h-6" />;
                      })()}
                    </div>

                    {/* Text */}
                    <div className="space-y-3 flex-1">
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300 text-xl lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-3">
                        {item.card?.intro ?? item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>

                      {/* Tag badges - subtle */}
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                        <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/60 transition-colors" />
                        <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/30 transition-colors" />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
