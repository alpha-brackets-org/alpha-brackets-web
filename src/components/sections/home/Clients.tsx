"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, Autoplay, FreeMode } from "@/declarations/slider";

function Clients() {
  const swiperOptions = {
    slidesPerView: 5,
    loop: true,
    speed: 5000,
    spaceBetween: 40,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  const clientLogos = [
    "/assets/imgs/brands/c1.svg",
    "/assets/imgs/brands/c2.svg",
    "/assets/imgs/brands/c3.svg",
    "/assets/imgs/brands/c4.svg",
    "/assets/imgs/brands/c5.svg",
    "/assets/imgs/brands/c1.svg",
    "/assets/imgs/brands/c2.svg",
    "/assets/imgs/brands/c3.svg",
    "/assets/imgs/brands/c4.svg",
    "/assets/imgs/brands/c5.svg",
  ];

  // Duplicate the logos list to ensure Swiper loop mode works flawlessly without warning
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-24 bg-accent/5 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="max-w-2xl text-center space-y-3">
            <span className="sub-title">Strategic Partners</span>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Trusted by operators and founders{" "}
              <span className="text-muted-foreground font-light italic">
                across industries.
              </span>
            </h3>
          </div>
        </div>

        <div className="relative">
          <Swiper
            {...swiperOptions}
            modules={[Autoplay, FreeMode]}
            className="flex items-center"
          >
            {duplicatedLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 h-28 relative">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-contain p-4"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
