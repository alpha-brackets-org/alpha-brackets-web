import Link from "next/link";
import { Star } from "@/declarations/icons";

import { MARQUEE_MESSAGES, MARQUEE_CONTACTS } from "@/data/marquee";

function Marq2() {
  // We double the content to allow infinite scrolling
  const topMarquee = Array(8).fill(MARQUEE_MESSAGES).flat();
  const bottomMarquee = Array(12).fill(MARQUEE_CONTACTS).flat();

  return (
    <section className="py-24 bg-background overflow-hidden border-y border-border/50 relative">
      <Link
        href="/contact"
        className="absolute inset-0 z-20"
        aria-label="Contact Us"
      ></Link>

      {/* Top Marquee */}
      <div className="relative flex overflow-x-hidden group bg-primary/5 py-8 border-y border-border/30">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] items-center">
          {topMarquee.map((item, i) => (
            <div key={`top1-${i}`} className="flex items-center px-8">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90 uppercase">
                {item}
              </h4>
              <Star className="w-10 h-10 ml-8 text-primary fill-primary opacity-50" />
            </div>
          ))}
          {topMarquee.map((item, i) => (
            <div key={`top2-${i}`} className="flex items-center px-8">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90 uppercase">
                {item}
              </h4>
              <Star className="w-10 h-10 ml-8 text-primary fill-primary opacity-50" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Reverse) */}
      <div className="relative flex overflow-x-hidden group py-6">
        <div className="flex whitespace-nowrap animate-marquee-reverse group-hover:[animation-play-state:paused] items-center">
          {bottomMarquee.map((item, i) => (
            <div key={`bot1-${i}`} className="flex items-center px-6">
              <h4 className="text-xl md:text-2xl font-medium tracking-widest text-muted-foreground/80 uppercase">
                {item}
              </h4>
              <span className="mx-6 w-2 h-2 rounded-full bg-primary/50" />
            </div>
          ))}
          {bottomMarquee.map((item, i) => (
            <div key={`bot2-${i}`} className="flex items-center px-6">
              <h4 className="text-xl md:text-2xl font-medium tracking-widest text-muted-foreground/80 uppercase">
                {item}
              </h4>
              <span className="mx-6 w-2 h-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marq2;
