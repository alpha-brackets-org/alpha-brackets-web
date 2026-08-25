import { COMPANY_LINKS } from "./company-links";
import { RESOURCE_LINKS } from "./resource-links";

/**
 * The footer's link columns.
 *
 * Company and Resources reuse the navbar dropdown lists rather than restating
 * them, so a route enabled or disabled in one place updates the navbar, the mobile
 * menu and the footer together.
 *
 * `legal` is defined here because it is footer-only, it appears in the bottom bar
 * and nowhere in the navbar. All three legal pages are live.
 */
export const FOOTER_LINKS = {
  company: COMPANY_LINKS,
  resources: RESOURCE_LINKS,
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};
