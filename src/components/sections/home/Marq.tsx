import Image from "next/image";

import { MARQUEE_ITEMS } from "@/data/marquee";

function Marq() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // Duplicate for seamless loop

  return (
    <section className="py-12 bg-background overflow-hidden border-y border-border/30">
      <div className="flex flex-col gap-8 opacity-20 hover:opacity-50 transition-opacity duration-500">
        {/* First Row: Outline Text */}
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex shrink-0 items-center gap-12 px-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-outline">
                  {item}
                </span>
                <Image
                  src="/assets/icons/general/star.png"
                  alt="star"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 px-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-outline">
                  {item}
                </span>
                <Image
                  src="/assets/icons/general/star.png"
                  alt="star"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Solid Text */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <div className="flex shrink-0 items-center gap-12 px-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
                  {item}
                </span>
                <Image
                  src="/assets/icons/general/star.png"
                  alt="star"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 px-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
                  {item}
                </span>
                <Image
                  src="/assets/icons/general/star.png"
                  alt="star"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
