import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "@/declarations/icons";
import { ServiceOffer as ServiceOfferData } from "@/types";

/**
 * A named, buyable first step for a service. Renders only when the service defines
 * an `offer`, matching how ProcessTimeline and WhyChooseUs guard themselves on the
 * detail page.
 *
 * Built for the rescue service, where the page previously described the written
 * assessment inside its process steps but never presented it as something you could
 * actually buy. That is the difference between explaining a method and making an
 * offer.
 *
 * The guarantee is given its own block rather than being folded into the list. It is
 * the strongest trust element available to a shop with no case studies, because it
 * removes the buyer's downside, and burying it in a bullet would waste it.
 *
 * No price appears here by design. See docs/business-strategy.md Section 4.
 */
function ServiceOffer({ offer }: { offer: ServiceOfferData }) {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: the offer */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="sub-title flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Where It Starts
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
                {offer.name}
                <span className="block text-lg lg:text-xl font-semibold text-primary mt-4">
                  Fixed price, agreed before we start.
                </span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-border/50 pl-8">
              {offer.summary}
            </p>

            <div className="pl-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary group"
              >
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>Book a free 30 minute call</span>
              </Link>
            </div>
          </div>

          {/* Right: what is included, then the guarantee */}
          <div className="space-y-6">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 space-y-8">
              <h3 className="text-xs uppercase tracking-widest font-black text-foreground flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                What You Get
              </h3>

              <ul className="space-y-4">
                {offer.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {offer.next}
                </p>
              </div>
            </div>

            {/* The guarantee, deliberately separate and deliberately loud. */}
            <div className="flex items-start gap-4 p-6 lg:p-8 rounded-3xl border border-primary/25 bg-primary/5">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <p className="text-base font-semibold text-foreground leading-relaxed">
                {offer.guarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceOffer;
