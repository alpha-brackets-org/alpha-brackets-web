import React from "react";
import Image from "next/image";
import data from "@/data/team";
import { ArrowUpRight, Facebook, Instagram, Behance } from "@/declarations/icons";
import Link from "next/link";

function Team() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
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
            href="/page-team"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline group"
          >
            <span>Join our team</span>
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.slice(0, 4).map((item, i) => (
            <div key={i} className="group relative">
              {/* Card Container */}
              <div className="relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center justify-center p-6 pt-10">
                {/* Background Blur blob */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-6 border-2 border-border group-hover:border-primary/50 transition-colors duration-500">
                    <Image
                      src={item.img}
                      alt={`${item.name} - ${item.subName}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h6 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {item.name}
                  </h6>
                  <span className="text-sm text-muted-foreground mt-1">
                    {item.subName}
                  </span>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-6">
                    <Link
                      href="#0"
                      className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <Behance className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
