"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/declarations/animations";
import { ArrowRight, Calendar, Mail } from "@/declarations/icons";
import { SOCIAL_LINKS } from "@/data/navigation/social-links";
import { SITE_CONFIG } from "@/data/site-config";
import { EXPECT_ITEMS } from "@/data/discovery";

/**
 * The contact form was removed on purpose.
 *
 * It posted leads to the shared multi-tenant CMS (POST /portfolios/{id}/leads),
 * and the CMS is not being set up for now. A form with no destination is the
 * silent-failure bug this page already had once: the visitor types a message, it
 * goes nowhere, and they walk away believing they made contact. Better to have no
 * form than a decorative one.
 *
 * The two paths that ship instead both work with no backend at all: book a time
 * on Cal.com, or email us.
 *
 * If a form is ever wanted back, give it a real destination first (a form service
 * that emails the submission, or our own send via Resend), then restore the JSX
 * from git history. `contactSchema` in src/lib/models/Contact.ts and the
 * ui/form, ui/input and ui/textarea primitives are all still in the repo.
 */
function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const socials = SOCIAL_LINKS.filter((social) => social.href);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 pt-4 pb-28 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Primary action: book a call. Hidden entirely until
              SITE_CONFIG.bookingUrl is set, so a "Book a call" button that goes
              nowhere never ships. */}
          {SITE_CONFIG.bookingUrl && (
            <Link
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group block p-10 lg:p-14 rounded-[40px] bg-primary text-primary-foreground relative overflow-hidden"
            >

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                    Book a call
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Pick a time that suits you. Thirty minutes, no pitch, and you
                    will get a straight answer on what your idea takes to build.
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs pt-2">
                    See available times
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* What to expect. Same source as the homepage funnel, so the
                    site describes one process in one voice. */}
                <ul className="space-y-4 md:border-l md:border-white/20 md:pl-10">
                  {EXPECT_ITEMS.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          )}

          {/* Secondary: email. Prominent on purpose, it is the obvious choice for
              anyone not ready to book a slot, and it is the only channel here
              while bookingUrl is empty. */}
          <div className="contact-card grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              className="group p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/40 transition-colors flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Rather write it down?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us what you want to build and where you are up to. We read
                everything and reply within 48 hours.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-bold text-primary text-sm break-all">
                {SITE_CONFIG.email}
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="p-10 rounded-3xl border border-border/50 bg-muted/20 flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-tight">
                What happens next
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We talk through your idea and what it would take. If it looks like
                a fit, you get a fixed price proposal within 48 hours, agreed
                before any work starts. If it is not a fit, we will say so.
              </p>

              {/* Only renders once a real profile URL exists in data/navigation/social-links.ts. */}
              {socials.length > 0 && (
                <div className="mt-auto pt-4 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Find us elsewhere
                  </h4>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="w-11 h-11 rounded-2xl bg-background flex items-center justify-center border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
