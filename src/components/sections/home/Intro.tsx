import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/declarations/icons";
import { STATS } from "@/data/stats";

function Intro() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-64">
                <Image
                  src="/assets/icons/general/arw2.png"
                  alt="illustration"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  We believe in the power of{" "}
                  <span className="font-light text-muted-foreground">
                    individual contribution.
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We back the founders of new forms of network, digital
                  organisations that harness the talents of individuals for the
                  benefit of the collective.
                </p>

                <Link
                  href="/page-about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
                >
                  More About Us
                  <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border/50">
              {STATS.slice(0, 2).map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-end justify-between p-8 rounded-2xl bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <div>
                    <h3 className="text-5xl font-light mb-2">{stat.value}</h3>
                    <h6 className="text-sm uppercase tracking-widest text-primary font-semibold">
                      {stat.label}
                    </h6>
                  </div>
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/assets/icons/general/arw0.png"
                      alt="icon"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 h-full min-h-[400px]">
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/imgs/intro/04.jpg"
                alt="intro image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
