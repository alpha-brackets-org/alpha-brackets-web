import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import { Service } from "@/types";
import { SERVICE_CATEGORIES } from "@/data/services";
import { featuredRank } from "@/data/featured-services";

// One accent colour for every card. Primary is the site's only accent, see DESIGN.md.
const ACCENT_CLASS = "text-primary border-primary/30 bg-primary/5";

/**
 * Groups the catalog under category headings rather than rendering one flat list.
 *
 * The flat list mixed three different kinds of thing (what gets built, disciplines,
 * and a delivery model) with nothing to tell them apart. Headings come from
 * SERVICE_CATEGORIES so ordering and wording live with the data.
 *
 * Card numbers run continuously across the whole page, not per group. Restarting
 * per group would put "01" on three separate cards, which reads as a bug.
 *
 * **Within a group, featured services come first, in the ranked order.** Groups used
 * to render in whatever order services.ts happened to be written in, which put
 * `devops-and-cloud` above `code-rescue-and-rebuild` and pushed `crm-development`
 * third behind two catalog-only pages. Both are featured services losing the top of
 * their own group to ones that are not.
 *
 * The rank comes from featured-services.ts, the same list the nav, homepage grid and
 * footer use, so the whole site has one priority order. `sort` is stable in modern
 * JS, so everything unfeatured keeps its catalog order behind the ranked ones.
 */
export default function ServicesGrid({ services }: { services: Service[] }) {
  let numberedSoFar = 0;
  const groups = SERVICE_CATEGORIES.map(({ key, heading }) => ({
    heading,
    items: services
      .filter((service) => service.category === key)
      .sort(
        (a, b) => featuredRank(a.pragma_link) - featuredRank(b.pragma_link)
      ),
  }))
    // A category with nothing in it renders no heading, so a category can be added
    // to the data before the first service that belongs to it exists.
    .filter((group) => group.items.length > 0)
    .map((group) => {
      const startNumber = numberedSoFar;
      numberedSoFar += group.items.length;
      return { ...group, startNumber };
    });

  return (
    <section className="pb-32">
      <div className="container mx-auto px-4 space-y-20">
        {groups.map(({ heading, items, startNumber }) => (
          <div key={heading} className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-primary" />
              <h2 className="sub-title mb-0">{heading}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {items.map((service, i) => {
                const IconComponent = service.card?.icon || ArrowRight;
                return (
                  <Link
                    key={service._id}
                    href={`/services/${service.pragma_link}`}
                    className="group relative p-8 lg:p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative z-10 flex flex-col h-full gap-6">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 ${ACCENT_CLASS}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Number */}
                      <div className="absolute top-8 right-8 text-5xl font-extrabold text-foreground/5 group-hover:text-foreground/10 transition-colors select-none">
                        {String(startNumber + i + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 mt-auto text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
