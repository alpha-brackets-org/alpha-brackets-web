"use client";
import React, { useState } from "react";

export default function WhyRAD() {
  const [isRapidMode, setIsRapidMode] = useState(false);
  const timeline = {
    traditional: [
      {
        time: "2 Weeks",
        title: "Scope",
        value: "99%",
        cols: 2,
      },
      {
        time: "4 Weeks",
        title: "Design",
        value: "99%",
        cols: 2,
      },
      {
        time: "10 Weeks",
        title: "Development",
        value: "99%",
        cols: 4,
      },
      {
        time: "8 Weeks",
        title: "Quality Check",
        value: "99%",
        cols: 2,
      },
      {
        time: "4 Weeks",
        title: "Deployment",
        value: "99%",
        cols: 2,
      },
    ],
    rapid: [
      {
        time: "2 Weeks",
        title: "Discovery Workshop",
        value: "99%",
        cols: 2,
      },
      {
        time: "6 Weeks",
        title: "Build MVP",
        value: "99%",
        cols: 4,
      },
      {
        time: "2 Weeks",
        title: "Live",
        value: "99%",
        cols: 2,
      },
    ],
  };
  return (
    <>
      <style jsx>{`
        .switch-label {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .switch-label.active {
          color: #fd5b38;
          font-weight: 600;
        }
        .switch-container {
          position: relative;
        }

        .switch-toggle:hover {
          transform: scale(1.05);
        }
        .switch-toggle:active {
          transform: scale(0.95);
        }
      `}</style>
      <section className="intro-skill sub-bg  bord-top-grd bord-bottom-grd section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
               <div className="sec-head text-center mb-20">
                 <h3 className="mb-20">A faster approach to Product Validation and MVP Development.</h3>
                 <p>
                   Toggle between traditional and rapid development to see the difference in timelines, 
                   processes, and time-to-market. Discover how RAD can accelerate your project delivery 
                   while maintaining quality standards.
                 </p>
               </div>
            </div>
          </div>

          <div className="row md-marg">
            <div className="col-12">
               {/* Interactive Comparison Tool */}
               <div className="comparison-tool mt-50 mb-50">
                 
                 
                 <div className="switch-container d-flex align-items-center justify-content-center">
                   <div className="switch-wrapper d-flex align-items-center">
                     <div className="approach-label">
                       <span className={`switch-label ${!isRapidMode ? "active" : ""}`}>
                         Traditional Development
                       </span>
                       <small className="d-block mt-5 p-color">
                         {!isRapidMode ? "26 weeks total" : "Full-code approach"}
                       </small>
                     </div>
                     
                     <div
                       className="switch-toggle"
                       onClick={() => setIsRapidMode(!isRapidMode)}
                       style={{
                         position: "relative",
                         width: "70px",
                         height: "35px",
                         backgroundColor: isRapidMode
                           ? "#fd5b38"
                           : "rgba(255, 255, 255, 0.1)",
                         borderRadius: "18px",
                         cursor: "pointer",
                         transition: "all 0.3s ease",
                         margin: "0 25px",
                         border: "1px solid rgba(255, 255, 255, 0.2)",
                       }}
                     >
                       <div
                         className="switch-thumb"
                         style={{
                           position: "absolute",
                           top: "3px",
                           left: isRapidMode ? "37px" : "3px",
                           width: "27px",
                           height: "27px",
                           backgroundColor: "#fff",
                           borderRadius: "50%",
                           transition: "all 0.3s ease",
                           boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                         }}
                       />
                     </div>
                     
                     <div className="approach-label">
                       <span className={`switch-label ${isRapidMode ? "active" : ""}`}>
                         Rapid Development
                       </span>
                       <small className="d-block mt-5 p-color">
                         {isRapidMode ? "10 weeks total" : "Visual tools approach"}
                       </small>
                     </div>
                   </div>
                 </div>
                 
                 
               </div>

              <div className="full-bleed-wrapper  mt-80">
                <div className="full-bleed-line"></div>
              </div>
              <div className="skills-box row gap-0 mt-20">
                {isRapidMode && <div className="col-2"></div>}
                {(isRapidMode ? timeline.rapid : timeline.traditional).map(
                  (item, index) => (
                    <div className={`col-${item.cols} p-0`} key={index}>
                      <div className="skill-item sm-mb30">
                        <h6 className="sub-title mb-15 d-flex align-items-center justify-content-between">
                          <div
                            className="p-1 main-colorbg rounded-circle"
                            style={{ marginTop: "-58px", zIndex: 100 }}
                          ></div>
                          <span>{item.time}</span>
                          <div
                            className={
                              index ===
                              (isRapidMode
                                ? timeline.rapid
                                : timeline.traditional
                              ).length -
                                1
                                ? "p-1 main-colorbg rounded-circle"
                                : ""
                            }
                            style={{ marginTop: "-58px", zIndex: 100 }}
                          ></div>
                        </h6>
                        <div className="skill-progress border-0">
                          <div
                            className="progres py-3 d-flex align-items-center justify-content-center"
                            style={{ width: item.value }}
                          >
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
