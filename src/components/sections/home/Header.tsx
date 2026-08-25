"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/declarations/animations";
import { ArrowRight, CheckCircle2 } from "@/declarations/icons";
import { Button } from "@/components/ui/button";

/**
 * The bar under the hero. It used to render the two shared STATS ("4 to 6 Weeks
 * To A Working MVP" and "10x Load Without A Rewrite").
 *
 * Those were replaced rather than removed for cause. The headline now covers
 * software built, finished **or** fixed, and an MVP timeline immediately under it
 * re-narrowed the page to the one audience that does not apply to: a visitor who
 * arrived about a product that already exists and is broken. Nothing was lost by
 * moving them, because MVP_TIMELINE still renders on the SaaS and Web service
 * pages through WhyChooseUs, which is where the claim is actually relevant.
 *
 * What replaced them is the homepage's only trust element. With no clients, no
 * case studies and no logos, the honest substitute for a logo strip is a small
 * number of specific, verifiable promises. Conversion research is consistent that
 * specificity beats volume of proof, so these are a real stand-in and not a
 * consolation prize.
 *
 * **Every line here must already be true and stated elsewhere on the site.** Each
 * one below is, and the source is noted. Do not add a claim here that is not
 * backed somewhere a client could hold us to.
 */
const TRUST_POINTS = [
  {
    // src/data/faqs.ts, "Who owns the code?"
    title: "You own the code",
    detail: "Repo, accounts and infrastructure, in your name from the start.",
  },
  {
    // docs/business-strategy.md Section 4. No figure, the price is quoted on the call.
    title: "Fixed price up front",
    detail: "Agreed in writing before any work starts.",
  },
  {
    // src/data/faqs.ts, "What do those weeks actually look like?"
    title: "Working software weekly",
    detail: "From the first week, not a big reveal at the end.",
  },
  {
    // src/data/faqs.ts, "Who will I actually be talking to?"
    title: "You talk to the engineer",
    detail: "The person building it. No account manager in between.",
  },
];

function Header() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // The ".hero-badge" tween that used to start this timeline was removed. The
      // badge element itself went in the positioning rewrite, so the tween had no
      // target and GSAP warned about it on every homepage load, plus two more
      // warnings from initialising the empty tween.
      //
      // The headline animates transform ONLY. It used to fade from opacity 0 with
      // a 0.3s delay, and Lighthouse reported ~350ms of "element render delay" on
      // this exact h1, which is the page's LCP element. An element at opacity 0 has
      // not been painted, so LCP could not resolve until the fade had run. Moving
      // to transform-only means the text is painted at first paint and LCP stops
      // waiting on JavaScript, while still animating.
      //
      // The 0.3s delay went with it: with no fade, a delay would just park fully
      // visible text 60px out of position for 300ms. Keep opacity off this element.
      tl.fromTo(".hero-headline", { y: 60 }, { y: 0, duration: 1 })
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-metric",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-start pt-32 lg:pt-48 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/bg1.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          // The wrapper is `absolute inset-0` inside a `min-h-screen` section, so
          // this image is always full viewport width. The previous value declared
          // 50vw above 768px and 33vw above 1200px, which made Next serve a
          // candidate about a third of the width actually needed, so the hero
          // rendered upscaled and soft on every desktop.
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/90"></div>
      </div>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-1 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Headline */}
          {/* The old headline was "From Idea to a Product People Actually Pay For",
              which only speaks to someone with nothing built yet. That excluded the
              two audiences the catalog now serves: people with an existing product
              that needs finishing or fixing, and businesses buying a CRM or ERP.
              "built, finished, or fixed" in the subheading is the load-bearing
              phrase, three words covering three situations without going vague. */}
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8">
            Custom software,{" "}
            <br className="hidden md:block" />
            built in weeks and{" "}
            <span className="text-primary relative">
              handed over working.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 9C30 3 70 1 100 5C130 9 170 3 199 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="hero-sub text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            For founders and businesses who need software{" "}
            <span className="text-foreground font-semibold">
              built, finished, or fixed.
            </span>{" "}
            A fixed price agreed up front, a working version every week, and you
            own all of it.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-start gap-4 mb-24">
            <Button
              asChild
              className="rounded-full px-8 h-13 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base transition-all hover:scale-105 active:scale-95"
            >
              {/* "free 30 minute call" rather than "Free Discovery Call".
                  Concrete CTA wording converts better, and it has to match the real
                  Cal.com event and the wording in src/data/discovery.ts exactly, or
                  the site promises a length the booking page does not offer. */}
              <Link href="/contact" className="flex items-center gap-3">
                Book a free 30 minute call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 h-13 border-foreground/20 text-foreground/80 hover:text-primary hover:border-primary/30 font-semibold text-base transition-all"
            >
              <Link href="#how-we-work" className="flex items-center gap-3">
                See How We Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust row. Keeps the .hero-metric class because the GSAP timeline above
            staggers it, and keeps the bordered strip layout the metrics bar used. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="hero-metric flex items-start gap-3 py-6 px-2 lg:px-8 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-sm font-bold text-foreground leading-tight">
                  {point.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
