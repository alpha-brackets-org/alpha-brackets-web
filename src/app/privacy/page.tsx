import { SITE_CONFIG } from "@/data/site-config";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Privacy Policy | Alpha Brackets",
  description: "Our commitment to protecting your data and privacy.",
};

export default function PrivacyPolicy() {
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
            Privacy{" "}
            <span className="font-extralight text-muted-foreground italic text-outline">
              Policy
            </span>
          </h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
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
            <p>
              We collect several types of information from and about users of
              our Website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, postal address,
                e-mail address, and telephone number provided via contact forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your internet
                connection, the equipment you use to access our Website, and
                usage details.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>
              We use information that we collect about you or that you provide
              to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>
                To provide you with information, products, or services that you
                request from us.
              </li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>
                To notify you about changes to our Website or any products or
                services we offer or provide though it.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              4. Data Security
            </h2>
            <p>
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. All information you provide to us
              is stored on our secure servers behind firewalls.
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
            <p className="font-bold text-foreground">
              Email: {SITE_CONFIG.email}
              <br />
              Address: {SITE_CONFIG.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
