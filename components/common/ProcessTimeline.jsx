'use client';

import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProcessTimeline({bTitle, sTitle, desc, items, bgImage, overlayDark}) {
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
      nextEl: '.services .swiper-button-next',
      prevEl: '.services .swiper-button-prev',
    },
  };
  return (
    <section className="services bg-img overlay-center"
      data-background={bgImage ?? "/assets/imgs/background/b2.jpg"}
      data-overlay-dark={overlayDark ?? "9"}
    >
      <div className="container section-padding">
        <div className="sec-head mb-80 relative">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Process</span>
              <h3 className="fw-600 fz-50  d-rotate wow">
                <span className="rotate-text">
                  {bTitle} <span className="fw-200">{sTitle}.</span>
                </span>
              </h3>
              <p className="mt-10 mb-40 w-75" >
                {desc}
              </p>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="full-bleed-wrapper">
          <div className="full-bleed-line"></div>
        </div>

        <div
        style={{ marginTop: "-40px" }}
            className="serv-swiper" 
            data-carousel="swiper"
            data-loop="true"
            data-space="40"
          >
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-serv"
              className="swiper-container"
              data-swiper="container"
            >
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                 <div className="item-box radius-15 md-mb50 p-0 border-0">
                      <div className="step-badge">{(i + 1).toString().padStart(2, '0')}.</div>
                      <h6 className="mb-20 mt-40">{item.title}</h6>
                      <p>
                        {item.desc}
                      </p>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </section>
  );
}
