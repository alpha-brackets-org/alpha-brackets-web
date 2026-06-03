import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "@/declarations/icons";
import { SITE_CONFIG } from "@/data/site-config";
import { EXPECT_ITEMS } from "@/data/discovery";

interface ServiceCTAProps {
  serviceTitle?: string;
}

export default function ServiceCTA({ serviceTitle }: ServiceCTAProps) {
  const subject = serviceTitle
    ? `Project enquiry — ${serviceTitle}`
    : "Project enquiry";

  return (
    <section className="py-24 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
      {/* Corner blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="space-y-8">
            <div>
              <span className="sub-title">Start a Project</span>
              <h2 className="mt-4">
                Ready to build{" "}
                <span className="font-extralight text-muted-foreground">
                  what&apos;s next?
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Whether you have a fully scoped brief or just an idea — we&apos;ll
              help you figure out the right path forward. No hard sell, just a
              real conversation.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              {EXPECT_ITEMS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — action cards */}
          <div className="space-y-4">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group flex items-center justify-between w-full p-7 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25"
            >
              <div>
                <div className="font-bold text-lg">Request a Proposal</div>
                <div className="text-sm text-white/70 mt-1">
                  Tell us about your project
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>

            {/* Email CTA */}
            <Link
              href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}`}
              className="group flex items-center justify-between w-full p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                <div className="font-bold text-base">{SITE_CONFIG.email}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Drop us a direct email
                </div>
              </div>
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Link>

            {/* WhatsApp / Call CTA */}
            <Link
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="group flex items-center justify-between w-full p-7 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                <div className="font-bold text-base">{SITE_CONFIG.phone}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Call or WhatsApp us
                </div>
              </div>
              <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Link>

            {/* Trust line */}
            <p className="text-center text-xs text-muted-foreground pt-2">
              Based in {SITE_CONFIG.location} · Serving clients globally ·{" "}
              <span className="text-primary font-semibold">
                Free first consultation
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
