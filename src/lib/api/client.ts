import { getPortfolioId } from "@/lib/cms-client";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

/**
 * Base fetcher that automatically resolves the multi-tenant portfolio ID 
 * and handles base CMS URL resolution.
 */
async function fetchCmsApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  if (!CMS_URL) {
    throw new Error("CMS_URL environment variable is not defined.");
  }

  const portfolioId = await getPortfolioId();
  const urlObj = new URL(`${CMS_URL}${endpoint}`);

  // Automatically inject portfolio ID if available and not already set
  if (portfolioId && !urlObj.searchParams.has("portfolio")) {
    urlObj.searchParams.append("portfolio", portfolioId);
  }

  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && options.method !== "GET" && options.method !== "DELETE") {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(urlObj.toString(), {
    next: { revalidate: 300 }, // Default revalidation
    ...options,
    headers,
  });

  if (!res.ok) {
    let errMsg = `CMS API request failed: ${res.status} ${res.statusText}`;
    try {
      const errJson = await res.json();
      if (errJson && typeof errJson === "object") {
        errMsg = errJson.message || errJson.error || errMsg;
      }
    } catch (_) {}
    throw new Error(errMsg);
  }

  const json = await res.json();
  // Strip .data wrapping if present, otherwise return raw json
  return (json.data !== undefined) ? json.data : json;
}

/**
 * DRY HTTP method handlers
 */
export const api = {
  get: <T>(endpoint: string, options?: RequestInit) => 
    fetchCmsApi<T>(endpoint, { ...options, method: "GET" }),

  post: <T>(endpoint: string, body?: unknown, options?: RequestInit) => 
    fetchCmsApi<T>(endpoint, { 
      ...options, 
      method: "POST", 
      body: body ? JSON.stringify(body) : undefined 
    }),

  patch: <T>(endpoint: string, body?: unknown, options?: RequestInit) => 
    fetchCmsApi<T>(endpoint, { 
      ...options, 
      method: "PATCH", 
      body: body ? JSON.stringify(body) : undefined 
    }),

  put: <T>(endpoint: string, body?: unknown, options?: RequestInit) => 
    fetchCmsApi<T>(endpoint, { 
      ...options, 
      method: "PUT", 
      body: body ? JSON.stringify(body) : undefined 
    }),

  delete: <T>(endpoint: string, options?: RequestInit) => 
    fetchCmsApi<T>(endpoint, { ...options, method: "DELETE" }),
};
