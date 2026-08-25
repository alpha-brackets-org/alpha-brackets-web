import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Zain } from "next/font/google";
import WebLayout from "@/components/layout/WebLayout";
import { ToastProvider } from "@/components/ui/toast";
import { SITE_CONFIG } from "@/data/site-config";
import { SOCIAL_LINKS } from "@/data/navigation/social-links";
import "./globals.css";

// No `weight` array. Plus Jakarta Sans is a variable font, and listing explicit
// weights forced Next to download six separate static instances instead of one
// variable file. Every weight the design uses is still available.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

// Zain is static-only, so weights have to be listed. It is used by exactly one
// rule, `.logo` in globals.css, so it needs one weight rather than the six that
// were previously downloaded to render a wordmark.
const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-zain",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  // Base canonical. Every page sets its own, which is what actually matters, but
  // this keeps a page that forgets from having none at all. Before this the site
  // had zero canonical tags on any route, so Google was left to pick between
  // apex, www and trailing-slash variants on a domain with no authority to spend
  // on duplicate resolution.
  alternates: {
    canonical: "/",
  },
  // `template` appends the brand to every child page's title automatically, so a
  // page must set only its own name: `title: "About Us"` renders as
  // "About Us | Alpha Brackets".
  //
  // **Do not write "| Alpha Brackets" in a page title.** Every page used to, which
  // rendered it twice ("About Us | Alpha Brackets | Alpha Brackets"). `default` is
  // exempt because the template does not apply to it, only to child segments.
  //
  // openGraph and twitter titles are a separate matter: Next does not run them
  // through this template, so those keep the brand written out in full.
  // These three fields are what appear in search results and link previews, so they
  // are more visible than the hero and must not disagree with it.
  //
  // They used to read "AI Native MVP Development" and "builds AI native MVPs for
  // SaaS founders", which was the earlier positioning. A visitor who arrived about a
  // broken product or an internal system was told we only build MVPs for founders,
  // which is two of three audiences turned away in the first thing they read. The
  // old title was also 62 characters, past where Google truncates, so the last
  // segment was likely never shown anyway.
  //
  // The MVP keywords stay. That funnel is still real, it is just no longer the whole
  // company. Rescue terms are added from docs/seo-keywords.md §2b.
  title: {
    default: "Alpha Brackets | Custom Software Development",
    template: "%s | Alpha Brackets",
  },
  description:
    "We build custom software and finish or fix what other teams started. Fixed price agreed up front, working software every week, and you own all of it.",
  keywords: [
    "custom software development company",
    "code rescue service",
    "take over unfinished software project",
    "MVP development company for startups",
    "SaaS MVP development agency",
    "AI integration for SaaS startups",
    "custom CRM development",
    "Alpha Brackets",
  ],
  // No `icons` entry. These pointed at /assets/imgs/favicon.ico, which had been
  // deleted from public/, so every page request 404'd on it. The icon now lives at
  // src/app/icon.svg using the Next.js file convention, which Next serves and
  // links automatically. Adding `icons` back here would override that.
  // The tagline stays here and in the footer and OG image. Per the Tagline section
  // of DESIGN.md it is a short brand label, never folded into a sentence and never
  // used as a headline or value proposition, because on its own it says nothing about
  // what we do. That is why it is not in the hero.
  openGraph: {
    title: "Alpha Brackets | Future-Ready Tech",
    description:
      "We build custom software and finish or fix what other teams started. Fixed price, working software every week, and you own all of it.",
    url: SITE_CONFIG.url,
    siteName: "Alpha Brackets",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Brackets | Future-Ready Tech",
    description: "Software built, finished, or fixed. For a fixed price.",
  },
};

const ORGANIZATION_DESCRIPTION =
  "We build custom software and finish or fix what other teams started. Fixed price agreed up front, working software every week, and you own all of it.";

/**
 * Organization plus WebSite, in one @graph. The site previously had no structured
 * data of any kind, then had a bare Organization node.
 *
 * With no backlinks and no brand searches, this is the main signal available for
 * getting Google to resolve "Alpha Brackets" as a business entity at all, which
 * matters because the brand name itself competes with unrelated things (Adobe's
 * Brackets editor, allbrackets.com, ECO Cladding hardware). The WebSite node adds
 * the other half of that: it names the site as a thing distinct from the company
 * and points back at the Organization as its publisher, which is what lets the two
 * be linked rather than guessed at.
 *
 * The @graph with @id anchors is the same shape src/app/services/[slug]/page.tsx
 * already uses, so `provider` and `publisher` reference an entity by id instead of
 * restating the company details on every page.
 *
 * Deliberately absent from Organization: `address`, `telephone` and
 * `foundingDate`. There is no published office address or monitored phone number
 * (see the commented-out block in site-config.ts), and inventing them to fill out
 * the schema would be exactly the kind of unbacked claim DESIGN.md rules out.
 * `sameAs` uses the real, owner-supplied profile URLs only.
 *
 * Deliberately absent from WebSite: `SearchAction`. There is no site search. A
 * potentialAction pointing at a search endpoint that does not exist is the same
 * class of unbacked claim as a made-up address.
 */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/brand/logo.svg`,
      description: ORGANIZATION_DESCRIPTION,
      email: SITE_CONFIG.email,
      sameAs: SOCIAL_LINKS.filter((link) => link.href).map((link) => link.href),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_CONFIG.email,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: ORGANIZATION_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${zain.variable}`}
    >
      <body suppressHydrationWarning className="font-sans">
        <script
          type="application/ld+json"
          // Static object built above from local config, no user or CMS input, so
          // there is nothing here to sanitise.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <ToastProvider>
          <WebLayout>{children}</WebLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
