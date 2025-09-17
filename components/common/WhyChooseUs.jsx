"use client";
import React from "react";

function WhyCooseUs({ title, diffrentials }) {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="intro-accord section-padding o-hidden">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-5">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                <h3>{title}</h3>
              </div>
              <div className="accordion bord">
                {diffrentials.map((item, i) => (
                  <div className="item wow" key={i}>
                    <div onClick={openAccordion} className="title">
                      <h6>{item.title}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img
          src="/assets/imgs/patterns/blur1.png"
          alt=""
          style={{ marginTop: "50px" }}
        />
      </div>
    </section>
  );
}

export default WhyCooseUs;
