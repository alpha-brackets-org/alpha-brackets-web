import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import * as serviceRepo from "@/lib/repos/service-repo";

export const metadata: Metadata = {
  title: "Services | Alpha Brackets",
  description:
    "From web and mobile apps to AI integrations, SaaS platforms, DevOps, SEO, and AI-driven marketing — full-stack digital delivery under one roof.",
  keywords: [
    "software development services",
    "AI integrations",
    "SaaS development",
    "DevOps",
    "mobile app development",
    "web app development",
    "Alpha Brackets",
  ],
  openGraph: {
    title: "Services | Alpha Brackets",
    description:
      "Full-stack digital delivery — from product idea to growth and scale.",
    url: "https://alphabrackets.com/services",
    siteName: "Alpha Brackets",
    type: "website",
  },
};

// Accent color cycle — alternates primary / secondary for visual rhythm
const ACCENT_CLASS = "text-primary border-primary/30 bg-primary/5";

export default async function ServicesPage() {
  const services = await serviceRepo.getRootServices();

  return (
    <main className="bg-background min-h-screen">
      {/* ── Hero ─── */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="sub-title">What We Build & Deliver</span>
            <h1 className="mt-4 mb-8 leading-tight">
              Everything your product needs —{" "}
              <span className="font-extralight text-muted-foreground">
                under one roof.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From the first line of code to post-launch growth campaigns — we
              are your end-to-end technical and marketing partner. No handoffs,
              no gaps.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─── */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const accentClass = ACCENT_CLASS;
              const IconComponent = service.card?.icon || ArrowRight;
              return (
                <Link
                  key={service._id}
                  href={`/services/${service.pragma_link}`}
                  className="group relative p-8 lg:p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10 flex flex-col h-full gap-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 ${accentClass}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Number */}
                    <div className="absolute top-8 right-8 text-5xl font-extrabold text-foreground/5 group-hover:text-foreground/10 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
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
      </section>

      {/* ── How We Work Strip ───────────────────────────────── */}
      <section className="py-24 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="sub-title">How We Work</span>
            <h2 className="mt-4">
              A process that keeps{" "}
              <span className="font-extralight text-muted-foreground">
                you in control.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Scoping",
                desc: "We understand your goals, users, and constraints before writing a single line of code.",
              },
              {
                step: "02",
                title: "Architecture & Design",
                desc: "Scalable system architecture and pixel-perfect UI/UX before development begins.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Iterative sprints with weekly demos — you see progress every week.",
              },
              {
                step: "04",
                title: "Launch & DevOps",
                desc: "Deployment, CI/CD pipelines, and cloud infrastructure for a smooth go-live.",
              },
              {
                step: "05",
                title: "Growth & Marketing",
                desc: "Post-launch SEO, AI-driven ads, monitoring, and feature iterations.",
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="p-6 rounded-2xl border border-border/50 bg-card h-full hover:border-primary/40 transition-colors duration-300">
                  <div className="text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h6 className="font-bold text-sm mb-2">{item.title}</h6>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ───────────────────────────────── */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="sub-title">Featured Work</span>
              <h2 className="mt-4">
                Products we&apos;ve{" "}
                <span className="font-extralight text-muted-foreground">
                  shipped.
                </span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline shrink-0 group"
            >
              All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: "GMS",
                full: "Garage Management System",
                tag: "SaaS · Operations",
                desc: "Multi-garage SaaS with appointment tracking, employee management, real-time parts pricing, and performance analytics. Built to scale across multiple locations.",
                services: ["SaaS Dev", "Web App", "DevOps", "Automation"],
                color: "from-primary/20 to-primary/5",
                border: "border-primary/20",
              },
              {
                name: "Hexadesk",
                full: "Construction Task Management",
                tag: "SaaS · PropTech",
                desc: "AI-assisted task and project management for construction companies — with interactive maps, AI-driven assistance, and real-time team collaboration.",
                services: ["AI Integration", "SaaS Dev", "UI/UX", "Web App"],
                color: "from-primary/20 to-primary/5",
                border: "border-primary/20",
              },
              {
                name: "Healthline",
                full: "Hospital Management System",
                tag: "HealthTech",
                desc: "Offline-first hospital management system for receptionists and doctors — reception, finance, appointments, and patient notes. Works fully without internet.",
                services: ["Web App", "Mobile", "Offline-First", "UI/UX"],
                color: "from-primary/10 to-transparent",
                border: "border-border",
              },
            ].map((project) => (
              <div
                key={project.name}
                className={`group relative rounded-3xl border ${project.border} bg-gradient-to-br ${project.color} p-8 flex flex-col gap-6 hover:shadow-2xl transition-all duration-500`}
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {project.tag}
                  </div>
                  <h4 className="font-extrabold text-2xl">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.full}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full border border-border bg-card text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
