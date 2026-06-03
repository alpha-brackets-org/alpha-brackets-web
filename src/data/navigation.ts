import {
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Mail,
  MapPin,
  Phone,
} from "@/declarations/icons";
import { NavLink } from "@/types/navigation";

export const COMPANY_LINKS: NavLink[] = [
  { name: "About Us", href: "/about", desc: "Mission, vision and our values" },
//   {
//     name: "Expert Team",
//     href: "/team",
//     desc: "The architects behind your success",
//   },
//   { name: "Careers", href: "/careers", desc: "Join our mission-driven team" },
  {
    name: "Contact Us",
    href: "/contact",
    desc: "Strategic collaboration opportunities",
  },
];

export const RESOURCE_LINKS: NavLink[] = [
  {
    name: "Blogs",
    href: "/blogs",
    desc: "Deep dives into tech and strategy",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
    desc: "Real-world impact and results",
  },
  {
    name: "FAQs",
    href: "/faqs",
    desc: "Common technical questions answered",
  },
];

// Dynamically generated Mobile Links to avoid manual updates
export const MOBILE_LINKS: NavLink[] = [
  { name: "Services", href: "/services" },
  ...COMPANY_LINKS.map(({ name, href }) => ({ name, href })),
  ...RESOURCE_LINKS.map(({ name, href }) => ({ name, href })),
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/alphabrackets",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/alphabrackets", icon: Twitter },
  { name: "GitHub", href: "https://github.com/alphabrackets", icon: Github },
  {
    name: "Instagram",
    href: "https://instagram.com/alphabrackets",
    icon: Instagram,
  },
];

import { SITE_CONFIG } from "./site-config";

export const CONTACT_DATA = {
  address: {
    label: "Visit Us",
    value: SITE_CONFIG.address,
    icon: MapPin,
    href: "#",
  },
  email: {
    label: "Email Us",
    value: SITE_CONFIG.email,
    icon: Mail,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  phone: {
    label: "Call Us",
    value: SITE_CONFIG.phone,
    icon: Phone,
    href: `tel:${SITE_CONFIG.phoneRaw}`,
  },
};

export const CONTACT_LIST = Object.values(CONTACT_DATA);

// Keep this for backward compatibility with Footer if needed,
// or I'll update Footer to use CONTACT_DATA
export const CONTACT_INFO = CONTACT_DATA;

export const FOOTER_LINKS = {
  company: COMPANY_LINKS,
  resources: RESOURCE_LINKS,
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};
