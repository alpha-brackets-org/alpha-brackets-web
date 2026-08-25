import type { MetadataRoute } from "next";
import * as serviceRepo from "@/lib/repos/service-repo";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * Sitemap for the live routes only.
 *
 * Deliberately excludes /blogs, /team, /team-details, /careers and /case-studies.
 * Those route files still exist but call notFound(), so listing them would be
 * pointing search engines at 404s. Add each one back here when its page is
 * re-enabled.
 *
 * Service pages are read from the same source as generateStaticParams in
 * src/app/services/[slug]/page.tsx, so the two cannot drift apart.
 */
/**
 * Bump this when page content meaningfully changes.
 *
 * `lastModified` is the one field in a sitemap that Google actually uses, as a
 * recrawl hint. `priority` and `changeFrequency`, which this file already set,
 * are ignored by Google entirely. They are kept because Bing and other crawlers
 * still read them and they cost nothing, but do not expect them to do anything.
 *
 * Deliberately a constant rather than `new Date()`. Stamping the build time would
 * tell crawlers every page changed on every deploy, which is false and trains
 * them to ignore the field.
 */
const LAST_MODIFIED = new Date("2026-08-21");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_CONFIG.url;

  const services = await serviceRepo.getRootServices();

  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: LAST_MODIFIED,
      priority,
      changeFrequency,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.pragma_link}`,
      lastModified: LAST_MODIFIED,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
}
