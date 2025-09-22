import Image from "next/image";
import React from "react";
function SubServices({ subServices, noBottomPadding }) {
  return (
    <section
      style={{ marginTop: "-70px" }}
      className={`services-crev ${noBottomPadding ? "pb-0" : "pb-140"}`}
    >
      <div className="container">
        <div className="row sm-marg">
          {subServices.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6" style={{ zIndex: 100 }}>
              <div className="item-box bg-sub radius-15 mb-10 md-mb30">
                <div
                  className="icon mb-40 opacity-5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#212121",
                    borderRadius: "100%",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.card.icon,
                    }}
                  />
                </div>
                <h5 className="mb-20">{item.title}</h5>
                <p>{item.card.intro}</p>
                {item.pragma_link && (
                  <a
                    href={`/services/${item.pragma_link}`}
                    className="rmore mt-30"
                  >
                    <span className="sub-title">Read More</span>
                    <Image
                      src="/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20 ml-5"
                      width={20}
                      height={20}
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubServices;
