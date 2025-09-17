"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

export default function ProcessSegments({ title, subTitle, diffrentials, link }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-4">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Why Choose Us</h6>
              <h3 className="mb-30">{title} </h3>
              <p>{subTitle}</p>
              <a className="butn butn-sm butn-bg main-colorbg radius-5 mt-40" href={link.href}>
                {link.text}
              </a>
           
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {diffrentials.map((item, index) => (
              <div className="item mb-30" key={index}>
                <div className="row">
                  <div
                  style={{width: "197.59px"}}
                    className="bg-img"
                    data-background={item.img}
                  ></div>
                  <div className="col-md-8">
                    <div className="info">
                      <h5 className="mb-15">{item.title}</h5>
                      <p>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
