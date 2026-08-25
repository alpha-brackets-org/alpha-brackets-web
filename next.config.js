import path from "path";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * This is deliberately NOT a nonce-based policy. Next inlines roughly 35
 * unnamed <script> tags per page carrying the RSC flight payload
 * (`self.__next_f.push(...)`), and a nonce has to be unique per response, so
 * using one forces every route to render per request. This repo has already been
 * burned by exactly that: see the note in src/components/layout/WebLayout.tsx
 * about reading request headers opting the whole site into on-demand rendering
 * and breaking generateStaticParams on /services/[slug]. Hashing the inline
 * scripts is not an option either, since their contents embed per-page data and
 * per-build chunk hashes.
 *
 * So `script-src` keeps 'unsafe-inline'. Be honest about what that costs and what
 * it still buys: it does NOT stop inline script injection, but it does stop
 * *externally hosted* script injection, which is the usual delivery mechanism,
 * and the remaining directives close off the vectors that matter here.
 * `object-src 'none'` and `base-uri 'self'` are the two that Google's own CSP
 * Evaluator weights alongside script-src; `base-uri` blocks <base> tag hijacking.
 *
 * Consequence to expect: Lighthouse will still report "no CSP effective against
 * XSS", because that audit specifically penalises 'unsafe-inline'. That is a known
 * and accepted trade, not an oversight. The alternative was giving up static
 * prerendering of all 31 routes to turn one audit row green, on a site with no
 * forms, no user input rendered anywhere, and no third-party scripts.
 *
 * `require-trusted-types-for` is also omitted on purpose: it breaks React's
 * dangerouslySetInnerHTML, which is how the JSON-LD blocks are emitted.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-eval' is dev-only, for the HMR runtime.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  // 'unsafe-inline' is required: there are inline style attributes in the markup
  // (hero overlay opacity, grid patterns) plus Next's own injected styles.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  // Fonts are self-hosted at build time by next/font, so no external font origin.
  "font-src 'self'",
  // ws:/wss: are dev-only, for the HMR websocket. Without them the dev server
  // cannot hot reload.
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // Production only. On a plain http://localhost dev server this can interfere.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  devIndicators: {
    buildActivity: false,
  },
  turbopack: {
    root: path.resolve(".."),
  },

  // There was no images config at all, so every next/image request served the
  // original format. AVIF and WebP are meaningfully smaller than the JPEGs in
  // public/images/backgrounds, and the hero images are the largest thing the
  // site ships.
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // Renamed slugs → new slugs
    ];
  },

  // None of these are ranking factors. They are here because the site is sold as
  // evidence that we build things properly, and shipping a marketing site with no
  // security headers undercuts that.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          // Isolates this page's browsing context from anything it opens or is
          // opened by. One line, no behavioural cost here since nothing on the
          // site uses window.opener or cross-origin popups.
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            // No `preload` directive. Adding it means submitting the domain to the
            // browser preload list, which is slow and painful to reverse, so it is
            // a deliberate decision rather than a default. Lighthouse will keep
            // noting its absence as Medium.
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Redundant with `frame-ancestors 'self'` above for modern browsers,
          // kept for older ones that ignore CSP framing directives.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
