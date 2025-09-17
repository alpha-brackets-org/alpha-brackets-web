"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
export default function ServiceHeader({
  title,
  description,
  videoLink,
  bgImage,
  overlayDark,
}) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
    style={{paddingBottom: '210px'}}
      className={`header crev-header  ${bgImage ? "bg-img overlay-center" : ""}`}
      data-background={bgImage ?? ""}
      data-overlay-dark={overlayDark ?? "0"}
    >
      <div className="container ontop">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="caption">
              <div className="row">
                <div className="col-lg-9 d-flex flex-column justify-content-center">
                  <h2 className="">{title}</h2>
                  <div className="row">
                    <div className="col-lg-10 mt-20">
                      <p className="fz-16">{description}</p>
                      <a
                        href="/page-about"
                        className="butn butn-sm butn-bg main-colorbg radius-5 mt-20"
                      >
                        Discuss Your Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <div className="circle-button md-hide">
                    <a href={videoLink} className="vid">
                      <div className="rotate-circle fz-30 text-u">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              Explore More - Explore More -
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className="icon">
                        <i className="fas fa-play"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!bgImage && (
            <div className="col-lg-12">
              <div
                className="full-img"
                style={{ maxHeight: "0px" }}
                // data-background="/assets/imgs/header/2.jpg"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
