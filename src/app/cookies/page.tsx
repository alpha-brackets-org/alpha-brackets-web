import { SITE_CONFIG } from "@/data/site-config";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Cookie Policy | Alpha Brackets",
  description: "How we use cookies to improve your experience.",
};

export default function CookiePolicy() {
  const lastUpdated = formatDate(new Date(), {
    month: "long",
    day: "numeric",
    year: "numeric",
  });


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
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-primary max-w-none space-y-12 text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Service or a third-party to recognize you and make your
              next visit easier and the Service more useful to you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              2. How Alpha Brackets Uses Cookies
            </h2>
            <p>
              When you use and access the Service, we may place a number of
              cookies files in your web browser. We use cookies for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> To enable certain functions
                of the Service.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To track information how the
                Service is used so that we can make improvements.
              </li>
              <li>
                <strong>Preference Cookies:</strong> To remember your
                information that changes the way the Service behaves or looks.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              3. Third-Party Cookies
            </h2>
            <p>
              In addition to our own cookies, we may also use various
              third-parties cookies to report usage statistics of the Service,
              deliver advertisements on and through the Service, and so on.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              4. What Are Your Choices Regarding Cookies
            </h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser. Please note, however, that if you delete cookies or
              refuse to accept them, you might not be able to use all of the
              features we offer, you may not be able to store your preferences,
              and some of our pages might not display properly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              5. More Information
            </h2>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at {SITE_CONFIG.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
