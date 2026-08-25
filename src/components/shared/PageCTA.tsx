"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Zap, Users, Code, Rocket } from "@/declarations/icons";
import { cn } from "@/lib/utils";

type CTAVariant = "general" | "services" | "case-study" | "about" | "careers";

interface PageCTAProps {
  variant?: CTAVariant | "hidden";
  className?: string;
}

const CTA_DATA: Record<
  CTAVariant,
  {
    title: React.ReactNode;
    desc: string;
    buttonText: string;
    buttonHref: string;
    icon: React.ElementType;
    color: string;
  }
> = {
  // "Got an idea worth building?" was the old wording. It only speaks to someone
  // starting from nothing, and as the closing CTA it is the last thing a homepage
  // visitor reads, so it undid the work the hero does to include people with an
  // existing product or a business that needs a system.
  general: {
    title: (
      <>
        Building something,{" "}
        <span className="text-primary italic">or stuck with something?</span>
      </>
    ),
    desc: "Tell us where you are. We will tell you honestly what it takes, what we would leave out of the first version, and whether we are the right people for it.",
    buttonText: "Start a Conversation",
    buttonHref: "/contact",
    icon: Zap,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  services: {
    title: (
      <>
        Tell us what you{" "}
        <span className="font-extralight text-muted-foreground italic">
          want to build.
        </span>
      </>
    ),
    desc: "A free 30 minute call, no pitch. We will talk through your idea, what it would take, and whether we are the right team for it.",
    buttonText: "Book A Call",
    buttonHref: "/contact",
    icon: Code,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  "case-study": {
    title: (
      <>
        Want something{" "}
        <span className="text-primary italic">like this</span> built?
      </>
    ),
    desc: "Tell us what you are trying to build and we will tell you what it takes. No hard sell, just a straight answer.",
    buttonText: "Book Discovery Call",
    buttonHref: "/contact",
    icon: Rocket,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  about: {
    title: (
      <>
        Now tell us about{" "}
        <span className="font-extralight text-muted-foreground italic">
          your product.
        </span>
      </>
    ),
    desc: "You know how we work. The next step is a call about what you are building and where you want it to go.",
    buttonText: "Talk To Us",
    buttonHref: "/contact",
    icon: Users,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  careers: {
    title: (
      <>
        Want to build{" "}
        <span className="text-primary italic">real products?</span>
      </>
    ),
    desc: "We look for engineers who care about how a product is put together, not just whether it runs. The team is remote.",
    buttonText: "View Openings",
    buttonHref: "/careers#positions",
    icon: Code,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
};

const PageCTA = ({ variant, className }: PageCTAProps) => {
  const pathname = usePathname();

  // 1. Determine variant automatically if not provided
  let activeVariant: CTAVariant | "hidden" = variant || "general";

  if (!variant) {
    const cleanPath = pathname.replace(/\/$/, ""); // Remove trailing slash

    if (cleanPath === "/contact" || cleanPath === "/faqs") {
      activeVariant = "hidden";
    } else if (cleanPath.startsWith("/services")) {
      activeVariant = "services";
    } else if (cleanPath.startsWith("/case-studies")) {
      activeVariant = "case-study";
    } else if (
      cleanPath.startsWith("/about") ||
      cleanPath.startsWith("/team")
    ) {
      activeVariant = "about";
    } else if (cleanPath.startsWith("/careers")) {
      activeVariant = "careers";
    } else if (cleanPath === "" || cleanPath === "/") {
      activeVariant = "general";
    }
  }

  if (activeVariant === "hidden") return null;

  const data = CTA_DATA[activeVariant];
  const Icon = data.icon;

  return (
    <section className={cn("py-24 border-t border-border/50", className)}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "relative rounded-[2rem] border border-primary/20 bg-gradient-to-br p-12 lg:p-20 text-center overflow-hidden group",
            data.color
          )}
        >
          {/* Animated Background Accents */}

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 mb-8 group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-6 h-6 text-primary" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              {data.title}
            </h2>

            <p className="text-muted-foreground text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {data.desc}
            </p>

            <Link
              href={data.buttonHref}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all group/btn active:scale-95"
            >
              {data.buttonText}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
