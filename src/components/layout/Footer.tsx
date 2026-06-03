import Link from "next/link";
import Image from "next/image";
import { getRootServices } from "@/lib/repos/service-repo";
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_LINKS } from "@/data/navigation";
import NewsletterForm from "./NewsletterForm";

async function Footer() {
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="block hover:opacity-80 transition-all shrink-0">
              <Image
                src="/assets/imgs/logo.svg"
                alt="Alpha Brackets Logo"
                width={195}
                height={24}
                style={{ width: "auto" }}
                className="w-auto h-7 object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic technology partner bridging business intelligence and
              accelerated technical execution. Future-ready architecture,
              compressed deployment cycles.
            </p>

            <div className="space-y-4">
              {/* Dynamic Contact Info */}
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <CONTACT_INFO.address.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="max-w-[250px]">{CONTACT_INFO.address.value}</p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <CONTACT_INFO.email.icon className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href={`mailto:${CONTACT_INFO.email.value}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email.value}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <CONTACT_INFO.phone.icon className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href={`tel:${CONTACT_INFO.phone.value.replace(/\s+/g, "")}`}
                  className="text-base font-bold text-primary hover:underline"
                >
                  {CONTACT_INFO.phone.value}
                </Link>
              </div>
            </div>
          </div>

          {/* Dynamic Services Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {(await getRootServices()).map((service) => (
                <li key={service._id}>
                  <Link
                    href={`/services/${service.pragma_link}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — Company */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Company
            </h4>
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
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              Resources
            </h4>
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

          {/* Newsletter Column - NO CARD STYLE */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
                Technical Pulse
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Join 500+ operators receiving our monthly brief on architecture
                and strategy.
              </p>
              <NewsletterForm />

              {/* Dynamic Social Links */}
              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-primary hover:text-white"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-16 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground/60 text-xs uppercase tracking-[0.15em]">
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
