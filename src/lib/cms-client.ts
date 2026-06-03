import {
  Blog,
  CaseStudy,
  Faq,
  PortfolioConfig,
  Testimonial,
  Project,
  SubscribeResponse,
  UnsubscribeResponse,
  AnalyticsCollectResponse,
  SubmitLeadResponse,
} from "@/types/cms";

import { headers } from "next/headers";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

/**
 * Gets the current request domain dynamically to support multi-tenancy.
 */
async function getCurrentDomain(): Promise<string | null> {
  try {
    const headersList = await headers();
    const host = headersList.get("host"); // e.g. "localhost:3000" or "alphabrackets.com"
    if (host) {
      let domain = host.split(":")[0]; // Strip port for exact domain matching
      domain = domain.replace(/^www\./, ""); // Strip www. if present
      // Fall through to the env variable so the portfolio ID resolves correctly.
      if (domain !== "localhost" && !domain.endsWith(".vercel.app")) {
        return domain;
      }
    }
  } catch {
    // headers() might throw in environments without request context (e.g. static generation)
  }

  // Fallback to environment variable for local development or static builds
  return process.env.NEXT_PUBLIC_PORTFOLIO_DOMAIN || null;
}

import { api } from "@/lib/api/client";

export async function getPortfolioConfig(): Promise<PortfolioConfig | null> {
  const domain = await getCurrentDomain();
  if (!CMS_URL || !domain) return null;

  const res = await fetch(
    `${CMS_URL}/portfolios/config?domain=${encodeURIComponent(domain)}`,
    {
      next: { revalidate: 3600, tags: [`portfolio-config-${domain}`] },
    }
  );

  if (!res.ok) return null;
  return await res.json();
}

export async function getPortfolioId(): Promise<string | null> {
  // Rely on Next.js fetch deduping per-request; do NOT use global module variables for caching
  // to prevent data leaks across different domains in a multi-tenant node server.
  const config = await getPortfolioConfig();
  return config?._id || null;
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    return await api.get<Blog[]>("/blogs");
  } catch (error) {
    console.error("getBlogs failed:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) || null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await api.get<CaseStudy[]>("/case-studies");
  } catch (error) {
    console.error("getCaseStudies failed:", error);
    return [];
  }
}

export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((cs) => cs.slug === id || cs._id === id) || null;
}

export async function getFAQs(): Promise<Faq[]> {
  try {
    return await api.get<Faq[]>("/faqs");
  } catch (error) {
    console.error("getFAQs failed:", error);
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await api.get<Testimonial[]>("/testimonials");
  } catch (error) {
    console.error("getTestimonials failed:", error);
    return [];
  }
}

import { SubmitLeadPayload } from "@/app/actions";

export async function submitLead(
  leadData: SubmitLeadPayload
): Promise<{
  success: boolean;
  message: string;
  downloadUrl: SubmitLeadResponse;
}> {
  const portfolioId = await getPortfolioId();
  if (!portfolioId) throw new Error("Portfolio ID missing");

  return await api.post<{
    success: boolean;
    message: string;
    downloadUrl: SubmitLeadResponse;
  }>(`/portfolios/${portfolioId}/leads`, {
    ...leadData,
    portfolio: portfolioId,
  });
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await api.get<Project[]>("/projects");
  } catch (error) {
    console.error("getProjects failed:", error);
    return [];
  }
}

export async function subscribeToNewsletter(
  email: string
): Promise<SubscribeResponse> {
  const portfolioId = await getPortfolioId();
  if (!portfolioId) throw new Error("Portfolio ID missing");

  return await api.post<SubscribeResponse>(
    `/portfolios/${portfolioId}/subscribe`,
    {
      email,
    }
  );
}

export async function unsubscribeFromNewsletter(
  email: string
): Promise<UnsubscribeResponse> {
  const portfolioId = await getPortfolioId();
  if (!portfolioId) throw new Error("Portfolio ID missing");

  return await api.post<UnsubscribeResponse>("/subscribers/unsubscribe", {
    email,
    portfolioId,
  });
}

export async function collectAnalytics(eventData: {
  event: "page_view" | "session_start" | "session_end" | "click";
  path: string;
  visitorId: string;
  duration?: number;
  metadata?: {
    browser?: string;
    os?: string;
    device?: string;
    country?: string;
  };
}): Promise<AnalyticsCollectResponse> {
  const portfolioId = await getPortfolioId();
  if (!portfolioId) throw new Error("Portfolio ID missing");

  return await api.post<AnalyticsCollectResponse>("/analytics/collect", {
    ...eventData,
    portfolio: portfolioId,
  });
}
