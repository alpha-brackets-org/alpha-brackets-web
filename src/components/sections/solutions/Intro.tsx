"use client";
import isInView from "@/common/isInView";
import React, { useEffect } from "react";
import Image from "next/image";

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element: Element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.width = htmlElement.getAttribute("data-value") || "0";
      },
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleShowProgressValues);
    return () => window.removeEventListener("scroll", handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">About Us</h6>
              <h2 className="mb-15">Best creative & modern digital agency.</h2>
              <p>
                Driven professional dedicated to making a lasting impact through
                innovative solutions and unwavering excellence.
              </p>
              <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Development 80%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs relative h-[500px]">
              <div className="img1 absolute top-0 left-0 w-3/4 aspect-[4/5] z-10 rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/imgs/intro/2.jpg"
                  alt="Creative Digital Agency Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="img2 absolute bottom-0 right-0 w-3/5 aspect-square z-20 rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/imgs/intro/03.jpg"
                  alt="Modern Design Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="img3 absolute top-1/4 -right-10 w-1/3 aspect-square z-30 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 hidden lg:block">
                <Image
                  src="/assets/imgs/intro/04.jpg"
                  alt="Innovative Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
