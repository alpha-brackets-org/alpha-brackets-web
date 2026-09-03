import { SITE_CONFIG } from "@/data/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/cookies",
  title: "Cookie Policy",
  description:
    "This site sets no cookies and stores nothing in your browser. What that means, and what happens when you book a call.",
});

/**
 * Hardcoded, not `new Date()`.
 *
 * This previously used `formatDate(new Date(), ...)`, which stamped the build
 * date. Every deploy silently re-dated the policy, so it always looked freshly
 * reviewed even when the text had not changed in months. Update this by hand
 * when the wording below actually changes.
 */
const LAST_UPDATED = "August 20, 2026";

/**
 * Every claim on this page is checkable against the code.
 *
 * The previous version was inherited boilerplate and was wrong in six places: it
 * described essential, analytics and preference cookies, and claimed
 * third-party cookies were used to "deliver advertisements on and through the
 * Service". None of that was ever true. The site sets no cookies at all (there
 * is no `document.cookie` and no `cookies()` call anywhere in `src/`), runs no
 * analytics, and loads no third-party scripts. It also directly contradicted
 * `/privacy`, which correctly said the opposite.
 *
 * If a cookie, an analytics script or a form is ever added, this page changes in
 * the same commit. Not afterwards.
 */
export default function CookiePolicy() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4 mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold block">
            Legal Documentation
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Cookie{" "}
            <span className="font-extralight text-muted-foreground italic text-outline">
              Policy
            </span>
          </h1>
          <p className="text-muted-foreground">Last Updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-invert prose-primary max-w-none space-y-12 text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              1. This Site Sets No Cookies
            </h2>
            <p>
              We do not set cookies on this website. Not for analytics, not for
              advertising, and not to remember settings. There is nothing to
              accept and nothing to opt out of, which is why you will not see a
              cookie banner here.
            </p>
            <p>
              We also do not store anything in your browser through any other
              method, so nothing is kept on your device after you close the tab.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              2. No Analytics And No Trackers
            </h2>
            <p>
              This site runs no analytics. We do not know who visits, which
              pages they read, or where they came from. We do not load tracking
              scripts, advertising pixels, session recorders, or heatmaps.
            </p>
            <p>
              The practical trade off is that we get no data about how the site
              is used. We decided that was worth it, and if that ever changes we
              will say so on this page before we turn anything on.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              3. Booking A Call Happens On Cal.com
            </h2>
            <p>
              When you book a call, the booking link takes you to Cal.com. That
              is a separate company and a separate website. Anything you enter
              there, like your name and email, is handled by Cal.com under their
              own privacy and cookie policies, not ours.
            </p>
            <p>
              Until you click through to Cal.com, nothing about your visit
              leaves this site, because there is nothing collecting it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              4. Fonts Are Served From This Site
            </h2>
            <p>
              The fonts used here are downloaded and served from our own domain
              when the site is built. Your browser does not request them from
              Google or any other font provider, so no third party sees your
              visit.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              5. Questions
            </h2>
            <p>
              If you have a question about this policy, or you want to check any
              of the above, email us at {SITE_CONFIG.email} and we will answer
              plainly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
