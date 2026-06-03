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
  general: {
    title: (
      <>
        Ready to compress your{" "}
        <span className="text-primary italic">time-to-market?</span>
      </>
    ),
    desc: "From technical debt cleanup to full-scale AI integration, we help you ship faster and scale smarter.",
    buttonText: "Start Your Project",
    buttonHref: "/contact",
    icon: Zap,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  services: {
    title: (
      <>
        Ready to build{" "}
        <span className="font-extralight text-muted-foreground italic">
          what's next?
        </span>
      </>
    ),
    desc: "Whether you're a startup with a vision or a growing business needing a technical partner — we'd love to hear from you.",
    buttonText: "Let's Build Together",
    buttonHref: "/contact",
    icon: Code,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  "case-study": {
    title: (
      <>
        Want <span className="text-primary italic">similar results</span> for
        your business?
      </>
    ),
    desc: "We don't just build features; we solve revenue leakage, operational friction, and scalability bottlenecks. Let's see what we can do for you.",
    buttonText: "Book Discovery Call",
    buttonHref: "/contact",
    icon: Rocket,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  about: {
    title: (
      <>
        Let's build the{" "}
        <span className="font-extralight text-muted-foreground italic">
          future together.
        </span>
      </>
    ),
    desc: "You've seen our philosophy and our team. Now let's see how our zero-waste engineering can accelerate your product roadmap.",
    buttonText: "Partner With Us",
    buttonHref: "/contact",
    icon: Users,
    color: "from-primary/10 via-primary/5 to-transparent",
  },
  careers: {
    title: (
      <>
        Want to build{" "}
        <span className="text-primary italic">engineering-first</span> products?
      </>
    ),
    desc: "We're always looking for senior talent who values clean architecture and business outcomes. Join our remote-first team.",
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
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] translate-y-1/2 -translate-x-1/2" />

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
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 group/btn active:scale-95"
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
