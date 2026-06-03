"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

/**
 * Generates or retrieves a persistent visitor ID from localStorage.
 */
function getVisitorId(): string {
  const key = "ab_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

/**
 * Detects basic device metadata from the User-Agent.
 */
function getDeviceMetadata(): {
  browser: string;
  os: string;
  device: string;
} {
  const ua = navigator.userAgent;

  // Browser detection
  let browser = "Unknown";
  if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Edg/")) browser = "Edge";
  else if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Safari")) browser = "Safari";

  // OS detection
  let os = "Unknown";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";

  // Device type
  let device = "Desktop";
  if (/Mobi|Android/i.test(ua)) device = "Mobile";
  else if (/Tablet|iPad/i.test(ua)) device = "Tablet";

  return { browser, os, device };
}

/**
 * Sends an analytics event to the CMS via the public collect endpoint.
 * Uses sendBeacon for reliability (fires even on page unload).
 * Falls back to fetch if sendBeacon is unavailable.
 */
function trackEvent(
  event: "page_view" | "session_start" | "session_end",
  path: string,
  duration?: number
) {
  if (!CMS_URL) return;

  const payload = {
    event,
    path,
    visitorId: getVisitorId(),
    duration: duration ?? 0,
    metadata: getDeviceMetadata(),
  };

  const url = `${CMS_URL}/analytics/collect`;
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Silently fail — analytics should never block the user
    });
  }
}

/**
 * Client component that tracks page views and session duration.
 * Mount once in the root layout — it reacts to pathname changes via Next.js router.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const sessionStartRef = useRef<number>(Date.now());
  const lastPathRef = useRef<string>(pathname);

  // Track page views on pathname change
  useEffect(() => {
    trackEvent("page_view", pathname);
    lastPathRef.current = pathname;
  }, [pathname]);

  // Track session start on mount and session end on unmount / tab close
  useEffect(() => {
    sessionStartRef.current = Date.now();
    trackEvent("session_start", pathname);

    const handleBeforeUnload = () => {
      const duration = Math.round(
        (Date.now() - sessionStartRef.current) / 1000
      );
      trackEvent("session_end", lastPathRef.current, duration);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      handleBeforeUnload();
    };
  }, []);

  return null;
}
