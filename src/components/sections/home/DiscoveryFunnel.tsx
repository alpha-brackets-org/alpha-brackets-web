"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  FileCheck,
  Rocket,
  Repeat,
  CheckCircle2,
} from "@/declarations/icons";
import { Button } from "@/components/ui/button";
import { gsap } from "@/declarations/animations";
import { EXPECT_ITEMS } from "@/data/discovery";

const FUNNEL_STEPS = [
  {
    icon: PhoneCall,
    title: "Free Discovery Call",
    desc: "30 minutes, no pitch. We learn about your product and your budget. You learn if we are a good fit.",
  },
  {
    icon: FileCheck,
    title: "Fixed Price Proposal",
    desc: "A clear proposal within 48 hours, whichever option fits. One price, agreed before we start.",
  },
  {
    icon: Rocket,
    title: "Weekly Demo Build",
    desc: "You see working software every week from day one. Never months of silence.",
  },
  {
    icon: Repeat,
    title: "Scale Retainer (Optional)",
    desc: "Once you are live, we can keep building new features and improving the product if you want to continue.",
  },
];

// Three em dashes were removed from this list. DESIGN.md bans them as sentence
// punctuation, and they had survived here since before that rule was written down.
//
// The Code Review was added as a third option, and it is deliberately first. It is
// the lowest-commitment way in: small, fixed price, and the client keeps the written
// assessment whether they continue or not. That last part is a structural guarantee,
// and for a shop with no case studies it does more to build trust than any proof we
// could display, because it lets the client walk away without losing anything.
//
// It matches the offer in docs/business-strategy.md §3 and the service page at
// /services/code-rescue-and-rebuild. **No figure on any of these**, per §4. The
// price is quoted on the call.
// The first two are deliberately the small ones, and that ordering is the point.
//
// With no case studies, what de-risks a buyer is a **small first step**, not a cheap
// whole project. Both entry offers are fixed price, short, and leave the client with
// something they keep even if they walk away. That converts "discount to buy trust"
// into "get paid to earn it", and it produces delivered engagements much faster than
// a full build, which is how the first real proof points get made.
//
// Code Review is the entry point for software that exists. Scoping Sprint is its
// mirror for people starting from nothing, who otherwise jump straight from a free
// call to committing to a full build.
//
// ## The four cards split by situation, not by price tier
//
// The build offers used to be "MVP Sprint" (4 to 6 weeks) and "AI Native MVP" (6 to
// 10 weeks), and the page never explained the difference. The only visible signals
// were that one card said AI and cost more. Worse, "multiple customers on one
// product" sat in the AI tier, where it has nothing to do with AI and implied the
// cheaper tier could not serve a second customer. Two precisely scoped tiers with
// different week counts also claim more precision than this company can back, since
// there is no delivery record yet.
//
// They are now **one MVP Build**, scoped and quoted on the call. The two internal
// price bands still govern quoting, in business-strategy.md Section 4.
//
// What replaced the tier split is a **situation split**, which is the same axis the
// Paths section uses and is something a visitor can actually self-select on:
//
//   Code Review     you have software and it is misbehaving
//   Scoping Sprint  you have an idea and nothing built
//   MVP Build       you need the product built, AI included if it belongs
//   AI Integration  you have a working product and the AI part is what is new
//
// AI Integration is the door for the "existing software companies retrofitting AI"
// segment in business-strategy.md Section 1, which previously had no entry point
// anywhere on the page. Its 4 to 6 week timeline is not invented for this card: it
// is already published as a stat on /services/ai-and-intelligent-integrations, and
// the two must not drift apart.
//
// AI appears on two cards and is framed as a judgement on both, never as a default.
// That is deliberate and it is not timidity: Section 1 warns against forcing the
// AI-native framing onto a founder whose product does not need it, and with no case
// studies, "we will say so if you do not need it" is worth more than joining every
// competitor in shouting about AI. **Do not rewrite this into hype.**
//
// **No figure on any of these**, per Section 4.
const PACKAGES = [
  {
    name: "Code Review",
    timeline: "Fixed price",
    desc: "For software that already exists and is not behaving. We read the code and the infrastructure, then tell you plainly what is there.",
    features: [
      "A written assessment: what works, what is risky, what is missing",
      "The report is yours to keep whether you carry on with us or not",
      "Any rebuild or finishing work is quoted after, never before",
    ],
  },
  {
    name: "Scoping Sprint",
    timeline: "Fixed price",
    desc: "For an idea you want built, before committing to building it. We work out what it actually takes, then write it down properly.",
    features: [
      "A written spec: the screens, the data, and what comes first",
      "The spec is yours to keep whether you build it with us or not",
      "A fixed price for the build, quoted from the spec rather than a guess",
    ],
  },
  {
    name: "MVP Build",
    timeline: "4 to 10 weeks",
    desc: "A working product your first users can sign up to and actually use. Real accounts, real data, and payments when you need to charge. If an AI feature belongs in it, we build that too.",
    features: [
      "A product you can put in front of real users, not a prototype",
      "One AI feature built for your use case, when your product needs one. We will say so if it does not.",
      "Built to grow, so the first version does not become a rewrite",
    ],
  },
  {
    name: "AI Integration",
    timeline: "4 to 6 weeks",
    desc: "For a product that already works, where the AI part is what is new. Chatbots, reading documents, search that understands the question, or handing AI a step someone still does by hand.",
    features: [
      "One AI feature built into the product you already have",
      "We do not rebuild what is already working and earning",
      "We say so first if a plain feature would do the job better than AI",
    ],
  },
];

export default function DiscoveryFunnel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".funnel-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background accents */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="sub-title">A Simple, Fixed Price Path</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mt-4">
            No free work,{" "}
            <span className="font-extralight text-muted-foreground italic">
              no hidden costs.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            One short call, a proposal within 48 hours, and a fixed price
            before any work starts. This works whether you are building
            something new, finishing something someone else started, or adding
            to a product that is already live.
          </p>
        </div>

        {/* Expectation strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {EXPECT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="funnel-card flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-muted/10"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground/80">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Funnel Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {FUNNEL_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="funnel-card p-6 lg:p-7 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all duration-300 group relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-base leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Packages. Four entries, so 2x2 at tablet and 4 across at desktop rather
            than a 3-wide grid that would strand the fourth card on its own row. */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="funnel-card h-full flex flex-col p-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {pkg.timeline}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {pkg.desc}
              </p>
              <ul className="space-y-3 mt-auto pt-6 border-t border-border/30">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground max-w-2xl mb-4">
          Price depends on what you need. We quote a fixed price on your free
          call, before any work starts.
        </p>
        {/* Was: "We also help you think through what happens after launch: who your
            first users are, how to reach them, and what to build next. You get a
            team, not just code."
            Two problems. "You get a team, not just code" is agency-speak filler, and
            offering to advise on who your users are and how to reach them is
            marketing consulting, which this company explicitly does not do. */}
        <p className="text-sm text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed">
          After launch we keep building. What to change first usually comes from
          what your first users actually do, not from the plan.
        </p>

        <Button
          asChild
          className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:scale-105 active:scale-95"
        >
          {/* Wording matches the hero and EXPECT_ITEMS in src/data/discovery.ts.
              All three must say the same thing as the real Cal.com event. */}
          <Link href="/contact" className="flex items-center gap-3">
            Book a free 30 minute call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
