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
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-20">{item.title}</h5>
                <p>{item.desc}</p>
                {item.link && (
                  <a href={item.pragma_link} className="rmore mt-30">
                    <span className="sub-title">Read More</span>
                    <img
                      src="/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20 ml-5"
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
