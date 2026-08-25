import React from "react";
import {
  ArrowRight,
  Briefcase,
  Globe,
  Zap,
  Users,
  Star,
} from "@/declarations/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Route intentionally disabled: hiring reads as premature with no clients yet, and
// there is no monitored careers inbox, so it 404s.
// No `metadata` export on purpose. Next discards metadata for a route that calls
// notFound(). The description this used to carry ("bridge the gap between complex
// engineering and strategic business impact") is also the exact register DESIGN.md
// rules out, so it should not be restored as-is when the route comes back.

const BENEFITS = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Remote-First",
    desc: "Work from anywhere in the world with our distributed team.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast-Paced",
    desc: "We move quickly, experiment often, and ship daily.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative",
    desc: "Learn from world-class engineers and strategic thinkers.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Ownership",
    desc: "Every team member has a direct impact on the product and culture.",
  },
];

const OPEN_POSITIONS = [
  {
    title: "Senior Full Stack Engineer",
    type: "Full-time",
    location: "Remote",
    category: "Engineering",
  },
  {
    title: "Product Designer (UI/UX)",
    type: "Full-time",
    location: "Remote",
    category: "Design",
  },
  {
    title: "Strategic Account Manager",
    type: "Full-time",
    location: "Remote",
    category: "Business",
  },
];

export default function CareersPage() {
  notFound();
  return (
    <div className="relative pt-32 overflow-clip bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid-white_1px_bg-transparent_20px_20px]" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mb-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">
            We are hiring
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-none">
          Build the <span className="text-primary italic">Future</span> <br />
          of Alpha Brackets.
        </h1>
        {/* Was: "strategic thinkers, zero-waste engineers, and visionaries to help us
            redefine technical execution." Every noun in that sentence is on the
            banned list in DESIGN.md, and "zero-waste engineers" is the doc's own
            named example of what not to write. This route is disabled, so it was
            never user-facing, but it would have shipped the moment it was switched
            back on. */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          We are looking for engineers who like owning a problem end to end, and
          who would rather ship something small that works than something big
          that nearly does.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            <Link href="#positions">View Openings</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-white/10 hover:bg-white/5 font-bold"
          >
            <Link href="/about">Our Story</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-muted/30 py-32 mb-32 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="container mx-auto px-4 mb-32">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
              Open Positions
            </h2>
            {/* The careers address moved to SITE_CONFIG.careersEmail, where it is
                commented out along with this block. It was hardcoded here, so it
                would not have followed a change to the main site email. When
                /careers is re-enabled, uncomment the field in site-config and
                restore this as {SITE_CONFIG.careersEmail} rather than typing the
                address again:

                <p className="text-muted-foreground">
                  Don&apos;t see a role that fits? Send us an open application at
                  <span className="text-primary ml-1">
                    {SITE_CONFIG.careersEmail}
                  </span>
                </p>
            */}
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              Scroll to explore
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {OPEN_POSITIONS.map((job, i) => (
            <div
              key={i}
              className="group relative flex flex-wrap items-center justify-between p-8 rounded-3xl bg-background border border-white/5 hover:bg-muted/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">
                    {job.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                    {job.title}
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-12 mt-4 md:mt-0">
                <div className="text-right">
                  <span className="block text-sm font-bold uppercase tracking-tighter">
                    {job.location}
                  </span>
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    {job.type}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <Link href="/contact" className="absolute inset-0 z-10" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}
