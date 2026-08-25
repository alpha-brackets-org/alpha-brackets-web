import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * /robots.txt was 404ing because nothing generated it.
 *
 * The disabled routes (/blogs, /team, /careers, /case-studies) are not listed as
 * disallowed. They already return 404, which tells a crawler the same thing more
 * definitively, and listing paths in robots.txt advertises that they exist.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
