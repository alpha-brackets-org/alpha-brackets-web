import { SITE_CONFIG } from "@/data/site-config";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Terms of Service | Alpha Brackets",
  description: "The rules and regulations for using Alpha Brackets services.",
};

export default function TermsOfService() {
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
            Terms of{" "}
            <span className="font-extralight text-muted-foreground italic text-outline">
              Service
            </span>
          </h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-primary max-w-none space-y-12 text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Website ({SITE_CONFIG.url}), you accept
              and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on Alpha Brackets' website for personal, non-commercial
              transitory viewing only.
            </p>
            <p>
              This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials.</li>
              <li>
                Use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial).
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on Alpha Brackets' website.
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              3. Disclaimer
            </h2>
            <p>
              The materials on Alpha Brackets' website are provided on an 'as
              is' basis. Alpha Brackets makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              4. Limitations
            </h2>
            <p>
              In no event shall Alpha Brackets or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on Alpha Brackets'
              website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              5. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of Pakistan and you irrevocably submit to
              the exclusive jurisdiction of the courts in that State or
              location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
