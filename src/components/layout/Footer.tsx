import Link from "next/link";
import Image from "next/image";
import { FEATURED_SERVICES } from "@/data/featured-services";
import { CONTACT_DATA } from "@/data/navigation/contact-links";
import { SOCIAL_LINKS } from "@/data/navigation/social-links";
import { FOOTER_LINKS } from "@/data/navigation/footer-links";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/site-config";
// NewsletterForm was deleted along with the CMS server actions. See the note on
// the Follow column below.

async function Footer() {
  const socials = SOCIAL_LINKS.filter((social) => social.href);

  // Same resolved list the nav and homepage use, so the three cannot drift apart.
  const featuredServices = FEATURED_SERVICES;

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Brand column spans 2, then Services, Company, Resources. The Follow
            column only exists when there is a social link to show, so the column
            count has to follow it or the footer leaves an empty gap on the right. */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8",
            socials.length > 0 ? "lg:grid-cols-6" : "lg:grid-cols-5"
          )}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link
              href="/"
              className="block hover:opacity-80 transition-all shrink-0"
            >
              <Image
                src="/brand/logo.svg"
                alt="Alpha Brackets Logo"
                width={195}
                height={24}
                style={{ width: "auto" }}
                className="w-auto h-7 object-contain"
                // Same file the navbar already loads with priority, so it comes
                // from cache. Eager here only stops Next warning that the LCP
                // image (matched by src) is lazily loaded.
                loading="eager"
              />
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We design, build, and launch SaaS products for founders who want a
              product people pay for, not just a prototype.
            </p>

            <div className="space-y-4">
              {/* Dynamic Contact Info */}
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <CONTACT_DATA.email.icon className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href={`mailto:${CONTACT_DATA.email.value}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_DATA.email.value}
                </Link>
              </div>
            </div>
          </div>

          {/* Dynamic Services Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Services
            </h3>
            {/* The featured five, matching the nav and homepage, plus a link to the
                full catalog. This used to list every root service, which was
                already a ten-item column and grew with the catalog. The footer is
                for orientation, not for the whole inventory, and /services is the
                page that exists to hold all of it. */}
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service._id}>
                  <Link
                    href={`/services/${service.pragma_link}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-primary hover:underline transition-colors"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links — Company */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — Resources */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow column. The whole column is conditional, not just its
              contents: an empty div would still take a grid cell and wrap onto a
              new row, leaving a stray empty band under the footer.

              The newsletter signup lived here. Both it and NewsletterForm have now
              been deleted rather than left commented out, because the server action
              behind them POSTed addresses to a third-party CMS that /privacy says
              receives nothing. There is also no mailing list and no publishing
              cadence, so it collected addresses nothing would be sent to, and it
              printed raw server error strings to the visitor on failure.

              If a signup is ever wanted, build it fresh, and update /privacy and
              /cookies in the same commit.
          */}
          {socials.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
                Follow
              </h3>
              <div className="flex gap-3 pt-2">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-primary hover:text-primary-foreground"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-16 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs uppercase tracking-[0.15em]">
          <p>
            © {new Date().getFullYear()} Alpha Brackets LLC Pakistan. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
