export const SITE_CONFIG = {
  name: "Alpha Brackets",
  // Matches the Tagline section of DESIGN.md. Use it as a short label, never
  // folded into a sentence.
  tagline: "Future-Ready Tech",
  email: "info@alphabrackets.com",

  // Contact details below are deliberately off the site. Only publish a channel
  // that someone is actually watching.
  //
  // phone/phoneRaw: no monitored number to publish. Note the value below is also
  // malformed for a Pakistani mobile, correct grouping is "+92 320 289 3786", so
  // fix it before restoring rather than pasting it back as-is.
  // phone: "+92 320 (289) 37 86",
  // phoneRaw: "+923202893786",
  //
  // address/location: no public office address. `address` was previously the only
  // place the street address appeared publicly, in the privacy policy.
  // address: "5919 Building BOK, Office 14, Shah Shams Colony, Multan, Pakistan",
  // location: "Multan, Pakistan",
  //
  // careersEmail: for open applications on /careers. That route returns
  // notFound() (no clients yet, so hiring reads as premature), and there is no
  // monitored careers inbox. This address used to be hardcoded in
  // src/app/careers/page.tsx, which meant it would not follow a change to
  // `email` above. It lives here now so there is one place to edit when /careers
  // is re-enabled. Uncomment this and the matching block in that page together.
  // careersEmail: "careers@alphabrackets.com",

  // Single source of truth for the site's absolute URL. `metadataBase`, robots.ts,
  // sitemap.ts and the Organization schema all resolve through here. This is the
  // only environment variable the entire app reads.
  //
  // **The default is the production URL, and the repo ships no env file.** That is
  // deliberate. There used to be a `.env.local` setting this to
  // `http://localhost:3000`, and Next loads `.env.local` during `next build` too,
  // where it overrides `.env.production`. So a production build run on a developer
  // machine baked `http://localhost:3000` into every canonical tag and every
  // sitemap entry. Canonicals pointing at an unreachable host tell Google the real
  // pages are duplicates of nothing, which would have quietly undone the canonical
  // work in Section 11 of docs/project-notes.md.
  //
  // Keep the `process.env` read: it costs nothing, needs no file, and lets a deploy
  // platform override the URL for preview builds. Do not reintroduce a local env
  // file just to point this somewhere else. Dev resolving to the production domain
  // is harmless, because nothing indexes localhost.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphabrackets.com",
  // Cal.com scheduling link, e.g. "https://cal.com/alphabrackets/30min".
  // Leave it empty and every "Book a call" button hides itself, so an
  // unfinished booking setup never ships as a broken link.
  bookingUrl: "https://cal.com/alphabrackets/30min",
};
