import Image from "next/image";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Behance,
} from "@/declarations/icons";
import Link from "next/link";
import team from "@/data/team";

function TeamGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm uppercase tracking-widest font-semibold text-primary mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Meet our{" "}
              <span className="font-light text-muted-foreground">legends.</span>
            </h2>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline group"
          >
            <span>Join us</span>
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((item, i) => (
            <div key={i} className="group relative">
              <div className="relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
                  <Image
                    src={item.img}
                    alt={`${item.name} - ${item.subName}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Decorative Blur */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/40 transition-colors duration-500" />

                  {/* Hover Social Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <Link
                      href="#0"
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all -translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all -translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                    >
                      <Behance className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all -translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
                    >
                      <Instagram className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 bg-card border-t border-border/50">
                  <h6 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {item.name}
                  </h6>
                  <span className="text-sm text-muted-foreground block mt-1">
                    {item.subName}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Become Our Member Card */}
          <div className="group relative">
            <Link
              href="/careers"
              className="relative rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6 hover:-translate-y-1"
            >
              <h5 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                Become <br /> Our Member
              </h5>
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamGrid;
