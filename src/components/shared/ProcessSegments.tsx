"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide, Navigation } from "@/declarations/slider";
import { ProcessTimelineProps } from "@/types";
import { ArrowLeft, ArrowRight } from "@/declarations/icons";

export default function ProcessSegments({
  bTitle,
  sTitle,
  desc,
  items = [],
  bgImage,
  overlayDark = "9",
}: ProcessTimelineProps) {
  const swiperOptions = {
    modules: [Navigation],
    loop: false,
    spaceBetween: 40,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".services .swiper-button-next",
      prevEl: ".services .swiper-button-prev",
    },
  };
  return (
    <section
      className="services section-padding relative overflow-hidden flex items-center min-h-[60vh]"
      style={{ 
        backgroundImage: `url(${bgImage ?? "/assets/imgs/background/b2.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`absolute inset-0 bg-black/${overlayDark}0 z-0`} />
      
      <div className="container relative z-10">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Process</span>
              <h2 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  {bTitle} <span className="fw-200">{sTitle}.</span>
                </span>
              </h2>
              <p className="mt-10 mb-40 w-75 opacity-70">{desc}</p>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev hover:bg-primary transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div className="swiper-button-next hover:bg-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-serv"
            className="swiper-container"
          >
            {items.map((item: { title?: string; desc?: string; link?: string }, i: number) => (
              <SwiperSlide key={i}>
                <div className="item-box p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500">
                  <h6 className="mb-15 text-xl font-bold">
                    <span className="main-color font-black">
                      {(i + 1).toString().padStart(2, "0")}.
                    </span>{" "}
                    {item.title}
                  </h6>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="rmore mt-30 inline-flex items-center gap-2 group/link">
                      <span className="sub-title text-xs font-black uppercase tracking-widest text-primary">Read More</span>
                      <div className="w-5 h-5 relative transition-transform group-hover/link:translate-x-1">
                        <Image
                          src="/assets/icons/general/arrow-right.png"
                          alt="Arrow Right"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
