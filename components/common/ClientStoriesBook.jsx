"use client";
import React from "react";
import data from "@/data/portfolios/works1";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile from "@/components/p-creative/Portfolio";

export default function ClientStoriesBook() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: "auto",
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: ".work-crev .swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".work-crev .swiper-button-next",
      prevEl: ".work-crev .swiper-button-prev",
    },
  };
  return (
    <section className="work-crev sub-bg  bord-top-grd bord-bottom-grd">
      <div className="container section-padding position-re">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-20">
              <h3 className="mb-20"> Client Success Stories</h3>
              <p>
                Explore how our Solutions Engineering services have transformed
                industries, driving innovation and improving business outcomes.
              </p>
              <a className="butn butn-sm butn-bord radius-30 mt-20" href="/portfolio-creative">
                <span>More Case Studies</span>
              </a>
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </section>
  );
}


