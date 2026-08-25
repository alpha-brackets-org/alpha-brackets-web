import Link from "next/link";
import { ArrowRight } from "@/declarations/icons";
import * as serviceRepo from "@/lib/repos/service-repo";

/**
 * The three situations someone arrives in, so a visitor can self-identify and land
 * on the right page in one click.
 *
 * This section is what makes a generalist homepage work instead of reading as
 * vague. The brand is deliberately broad (a custom software development agency, not
 * a single-niche shop), and the risk of breadth is that nobody sees themselves in
 * it. Conversion research on B2B services sites names exactly that gap: the ideal
 * client is not identified above the fold. Three named situations fix it without
 * collapsing into "we do everything".
 *
 * The three map to the client-acquisition segments in docs/business-strategy.md §1:
 * new builds, inherited or unfinished work (segment 5), and businesses buying an
 * internal system (segment 4).
 *
 * `slug` is resolved against the service repo rather than hardcoding titles, so a
 * renamed service cannot leave a dead link or a stale label here. A slug that stops
 * resolving drops the card instead of rendering a broken one.
 */
const PATHS = [
  {
    slug: "saas-platform-development",
    situation: "Starting from an idea",
    detail:
      "Nothing built yet, or a prototype that was only ever meant to prove the idea. You need a first real version people can sign up to and pay for.",
  },
  {
    slug: "code-rescue-and-rebuild",
    situation: "Someone started it and it is stuck",
    detail:
      "A previous team, a contractor, or an AI tool got it part of the way. Now it breaks in ways nobody can explain and progress has stopped.",
  },
  {
    slug: "crm-development",
    situation: "The business needs a system",
    detail:
      "The spreadsheets stopped coping. You need software built around how the business actually runs, and nothing off the shelf fits it.",
  },
];

export default async function Paths() {
  const services = await serviceRepo.getRootServices();

  const cards = PATHS.map((path) => {
    const service = services.find((s) => s.pragma_link === path.slug);
    return service ? { ...path, service } : null;
  }).filter((card): card is NonNullable<typeof card> => card !== null);

  if (cards.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="sub-title">Where You Are Now</span>
          <h2 className="mt-4 leading-tight">
            Three ways people come to us{" "}
            <span className="font-extralight text-muted-foreground italic">
              and none of them start the same way.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ slug, situation, detail, service }) => {
            const Icon = service.card?.icon || ArrowRight;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group flex flex-col p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                  {situation}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {detail}
                </p>

                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  <span>{service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
