import { CaseStudy, PublishStatus } from "@/types/cms";

// Local project portfolio for the /services page, shaped to match the CMS's
// own CaseStudy schema (src/types/cms.ts) so this can be swapped for real
// CMS data later with no shape changes. `portfolio` is a placeholder string,
// not a real CMS portfolio id, since this data never goes through the API.
// These are builds we've designed and developed, not currently live products.
// No client name, year, or cover photo is invented for fields we don't have
// real values for.
//
// Note before wiring this to a service page: `services` here holds free text
// ("SaaS Dev"), not service slugs ("saas-platform-development"). The old
// related-projects filter on the service detail page compared the two directly
// and could never match. Map these to `pragma_link` values first.
export const FEATURED_WORK: CaseStudy[] = [
  {
    projectTitle: "GMS",
    slug: "gms",
    industry: "Operations",
    services: ["SaaS Dev", "Web App", "DevOps", "Automation"],
    category: "SaaS",
    excerpt:
      "Multi-garage SaaS with appointment tracking, employee management, real-time parts pricing, and performance analytics. Designed to scale across multiple locations.",
    content:
      "Multi-garage SaaS with appointment tracking, employee management, real-time parts pricing, and performance analytics. Designed to scale across multiple locations.",
    status: PublishStatus.published,
    featured: true,
    portfolio: "alpha-brackets",
  },
  {
    projectTitle: "Hexadesk",
    slug: "hexadesk",
    industry: "PropTech",
    services: ["AI Integration", "SaaS Dev", "UI/UX", "Web App"],
    category: "SaaS",
    excerpt:
      "AI-assisted task and project management for construction companies, with interactive maps and real-time team collaboration.",
    content:
      "AI-assisted task and project management for construction companies, with interactive maps and real-time team collaboration.",
    status: PublishStatus.published,
    featured: true,
    portfolio: "alpha-brackets",
  },
  {
    projectTitle: "Healthline",
    slug: "healthline",
    industry: "HealthTech",
    services: ["Web App", "Mobile", "Offline-First", "UI/UX"],
    category: "HealthTech",
    excerpt:
      "Offline-first hospital management system for receptionists and doctors, covering reception, finance, appointments, and patient notes. Built to work fully without internet.",
    content:
      "Offline-first hospital management system for receptionists and doctors, covering reception, finance, appointments, and patient notes. Built to work fully without internet.",
    status: PublishStatus.published,
    featured: true,
    portfolio: "alpha-brackets",
  },
];
