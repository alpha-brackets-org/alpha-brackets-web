"use client";

import Link from "next/link";
import { MVP_TIMELINE } from "@/data/stats";

/**
 * The stock photo that used to fill the left half of this section is gone. It was
 * a generic "two people at a laptop" image of nobody who works here, so it made
 * the page look templated and told the reader nothing.
 *
 * Rather than swap in another placeholder, the section is now an editorial split:
 * heading and the one real number on the left, the actual story on the right. Put
 * an image back only when there is a real one, a photo of the team or of work we
 * have shipped.
 */
export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
              A small team that{" "}
              <span className="font-extralight text-muted-foreground italic">
                builds and ships.
              </span>
            </h2>

            {/* The one timeline figure we control and can stand behind. Read from
                src/data/stats.ts so it cannot drift from the homepage wording.
                Previously a "40% Faster Time-to-Market" stat with nothing behind
                it. */}
            <div className="inline-flex flex-col p-8 lg:p-10 rounded-4xl bg-primary text-primary-foreground">
              <div className="text-3xl lg:text-4xl font-black mb-2 tracking-tighter">
                {MVP_TIMELINE.value}
              </div>
              <p className="max-w-28 text-[10px] uppercase font-bold tracking-widest opacity-80 leading-tight">
                {MVP_TIMELINE.label}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alpha Brackets is an engineering team that builds SaaS products
                for founders. We started it because too much agency work stops
                at a handover, leaving the founder with a codebase nobody wants
                to touch and no idea what to build next.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                So we work the other way round. We agree what the first version
                is, build only that, put it in front of real users, and then
                help you decide what comes after. You get a working product and
                a team that is still there once it is live.
              </p>
            </div>

            {/* Only one button now. The other pointed at /case-studies, which
                returns notFound() while there is nothing to show. */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center px-10 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
