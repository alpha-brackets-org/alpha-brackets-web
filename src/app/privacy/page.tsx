import { SITE_CONFIG } from "@/data/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "What we collect, which is almost nothing. No contact form, no analytics, no trackers. What happens to an email you send us.",
});

/**
 * Hardcoded, not `new Date()`.
 *
 * This previously stamped the build date, so every deploy silently re-dated the
 * policy and it always looked freshly reviewed. Update by hand when the wording
 * below actually changes.
 */
const LAST_UPDATED = "August 20, 2026";

export default function PrivacyPolicy() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4 mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold block">
            Legal Documentation
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Privacy{" "}
            <span className="font-extralight text-muted-foreground italic text-outline">
              Policy
            </span>
          </h1>
          <p className="text-muted-foreground">Last Updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-invert prose-primary max-w-none space-y-12 text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              1. Introduction
            </h2>
            <p>
              At Alpha Brackets ("we," "our," or "us"), we respect your privacy
              and are committed to protecting it through our compliance with
              this policy. This policy describes the types of information we may
              collect from you or that you may provide when you visit the
              website {SITE_CONFIG.url} and our practices for collecting, using,
              maintaining, protecting, and disclosing that information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            {/* This section used to claim we collect name, postal address, email and
                telephone number "via contact forms", and separately "usage data"
                about your connection and equipment. Both were untrue: the contact
                form was removed, and analytics is disabled so nothing collects usage
                data. A privacy policy describing collection that does not happen is
                not a harmless overstatement. This is the one page whose entire
                purpose is being accurate about this.

                If a form or analytics is ever added back, this section has to be
                updated in the same commit. */}
            <p>
              We have tried to keep this short and accurate rather than
              comprehensive. This website has no contact form, no analytics and
              no advertising trackers, so there is less to describe than a
              privacy policy usually contains.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>What you email us.</strong> If you write to us, we
                receive whatever you chose to put in that email, including your
                email address. Nothing more.
              </li>
              <li>
                <strong>If you book a call.</strong> Booking is handled by
                Cal.com, not by this website. The name, email and answers you
                give go to them and to us. Their privacy policy covers how they
                handle it.
              </li>
              <li>
                <strong>No usage tracking.</strong> We do not run analytics on
                this site and we do not set advertising or tracking cookies.
                Standard server logs from our hosting provider are the only
                automatic record that you visited.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            {/* Was generic boilerplate ("to present our Website and its contents to
                you", etc.) which did not match section 2 once that was corrected, and
                contained a typo, "provide though it". Rewritten to describe the two
                things that actually happen. */}
            <p>
              There are only two reasons we would use anything you send us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To reply to you, and to have the conversation you started.</li>
              <li>
                To prepare for and follow up on a call you booked, if you booked
                one.
              </li>
            </ul>
            <p>
              We do not sell it, we do not add you to a mailing list you did not
              ask for, and we do not use it to advertise to you anywhere else.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              4. Where It Actually Lives
            </h2>
            {/* Was boilerplate claiming "all information you provide to us is stored
                on our secure servers behind firewalls". We do not run servers in this
                flow. There is no database, no CRM and no form handler. An email you
                send sits in a mailbox, and a booking sits with Cal.com. Claiming
                infrastructure we do not have is the same category of error as the
                rest of this page's history, so it went. */}
            <p>
              We do not run a database or a customer system for this website, so
              there is no store of visitor information to protect. In practice
              there are two places anything ends up:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Email you send us</strong> sits in our email provider's
                mailbox, reachable by the people who work here and nobody else.
              </li>
              <li>
                <strong>A call you booked</strong> sits with Cal.com, under their
                security and their policy.
              </li>
            </ul>
            <p>
              We keep what you send for as long as the conversation is useful. If
              you want your email and its contents deleted, ask us at{" "}
              {SITE_CONFIG.email} and we will delete it and confirm that we have.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              5. Contact Information
            </h2>
            <p>
              To ask questions or comment about this privacy policy and our
              privacy practices, contact us at:
            </p>
            {/* Email only. The street address was removed from SITE_CONFIG, this
                was the one place it appeared publicly. */}
            <p className="font-bold text-foreground">
              Email: {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
