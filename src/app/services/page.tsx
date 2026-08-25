import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import * as serviceRepo from "@/lib/repos/service-repo";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ProcessStrip from "@/components/sections/services/ProcessStrip";
import DiscoveryFunnel from "@/components/sections/home/DiscoveryFunnel";
import { SERVICES_PAGE_PROCESS } from "@/data/process";
import { buildPageMetadata } from "@/lib/seo";
// FeaturedWork disabled. It links to /case-studies, which is currently off (no PDF gate yet).
// import FeaturedWork from "@/components/sections/services/FeaturedWork";
// import { FEATURED_WORK } from "@/data/case-studies";

const description =
  "From your first idea to a working SaaS product people pay for. One team, a fixed price, and AI planned in from the start.";

export const metadata = buildPageMetadata({
  path: "/services",
  title: "Services",
  description,
  keywords: [
    "SaaS development",
    "MVP development",
    "AI integration",
    "software development agency",
    "web app development",
    "Alpha Brackets",
  ],
});

export default async function ServicesPage() {
  const services = await serviceRepo.getRootServices();

  return (
    <main className="bg-background min-h-screen">
      {/* ── Hero ─── */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
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
            <span className="sub-title">
              Your build partner, from idea to revenue
            </span>
            <h1 className="mt-4 mb-8 leading-tight">
              We don&apos;t just build your product.{" "}
              <span className="font-extralight text-muted-foreground">
                We help you ship one people will pay for.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From the first call to a working product with real users. One team,
              a fixed price, and AI planned in from the start.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <DiscoveryFunnel />

      <ServicesGrid services={services} />
      <ProcessStrip steps={SERVICES_PAGE_PROCESS} />
      {/* FeaturedWork stays disabled while /case-studies is off. */}
    </main>
  );
}
