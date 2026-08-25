"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { useEffect } from "react";
import { ArrowUpRight } from "@/declarations/icons";
import Link from "next/link";
import Image from "next/image";
import services from "@/data/services";

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const featuredServices = services.slice(0, 3);

  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Trusted Services</h6>
              <h3 className="mb-30">
                The service we offer is specifically designed to meet your
                needs.
              </h3>
              <p>
                Driven professional dedicated to making a lasting impact through
                innovative solutions and unwavering excellence.
              </p>
              <Link
                href="/services"
                className="butn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </span>
                <span className="text">Explore Services</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            {featuredServices.map((service, index) => (
              <div
                key={service._id}
                className={`item ${index !== featuredServices.length - 1 ? "mb-30" : ""}`}
              >
                <div className="row">
                  <div
                    className="col-md-4 bg-img"
                    data-background={service.bg_image}
                  ></div>
                  <div className="col-md-8">
                    <div className="info">
                      <h5 className="mb-15">{service.title}</h5>
                      <p className="line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="/images/patterns/blur1.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

export default Feat;
