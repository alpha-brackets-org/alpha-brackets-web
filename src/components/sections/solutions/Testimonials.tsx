"use client";

import Image from "next/image";
import {
  Swiper,
  SwiperSlide,
  Pagination,
  Navigation,
  Autoplay,
} from "@/declarations/slider";
import { Quote, ChevronLeft, ChevronRight } from "@/declarations/icons";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/types/cms";


function Testimonials({ testimonials = [] }: { testimonials?: Testimonial[] }) {
  const isLoopable = testimonials.length > 1;
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    spaceBetween: 30,
    loop: isLoopable,
    autoplay: isLoopable ? {
      delay: 5000,
      disableOnInteraction: false,
    } : false,
    pagination: {
      clickable: true,
      bulletClass: "swiper-pagination-bullet bg-white/20",
      bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
    },
    navigation: {
      nextEl: ".testim-next",
      prevEl: ".testim-prev",
    },
  };

  return (
    <section
      className="relative py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/imgs/background/b1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <span className="text-primary uppercase tracking-widest text-sm font-bold block">
                Evidence of Impact
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                What Partners{" "}
                <span className="logo font-extralight text-muted-foreground italic">
                  Say?
                </span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 relative group">
            <Swiper {...swiperOptions} className="w-full">
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="py-8">
                    <div className="relative mb-12">
                      <Quote className="absolute -top-10 -left-10 w-24 h-24 text-primary/10 -z-10" />
                      <p className="text-2xl lg:text-3xl font-medium leading-relaxed italic text-foreground/90">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center pt-10 border-t border-white/10 mt-10">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 relative">
                        <Image
                          src={item.avatar || "/assets/imgs/testimonials/default.jpg"}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-6">
                        <h5 className="text-xl font-bold">{item.name}</h5>
                        <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                          {item.role || item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="absolute bottom-0 right-0 flex gap-4 z-20">
              <Button
                variant="outline"
                size="icon"
                className="testim-prev rounded-full border-white/10 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="testim-next rounded-full border-white/10 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
