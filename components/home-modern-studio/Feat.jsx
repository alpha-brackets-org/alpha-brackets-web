import React from 'react';
const data = [
  {
    img: '/assets/imgs/serv-icons/1.png',
    title: 'Discovery Workshop',
    desc: 'Validate your product idea in less than four weeks. Align your team and take an iterative approach to ideate, build, launch, and test your product idea.',
  },
  {
    img: '/assets/imgs/serv-icons/2.png',
    title: 'Custom Application Development',
    desc: 'Deliver tailored software solutions that are built from the ground up to meet your unique business needs. From design to deployment, our development process ensures high performance and seamless scalability.',
  },


  {
    img: '/assets/imgs/serv-icons/3.png',
    title: 'Data-Driven Solutions',
    desc: 'Transform your data into actionable insights with our data-driven solutions. We help you collect, analyze, and visualize your data to make informed decisions and drive business growth.',
  },
  {
    img: '/assets/imgs/serv-icons/3.png',
    title: 'Cloud-Native Development',
    desc: 'Build secure, scalable cloud environments to improve reliability, performance, and cost efficiency.',
  },
  {
    img: '/assets/imgs/serv-icons/3.png',
    title: 'DevOps & Continuous Integration',
    desc: 'Automate your development and deployment processes to improve efficiency and reduce downtime.',
  },
  {
    img: '/assets/imgs/serv-icons/3.png',
    title: 'QA Automation & Testing',
    desc: 'Ensure your software is reliable and secure with our comprehensive testing services. We use the latest tools and techniques to test your software and ensure it meets your business needs.',

  }
  
];
function Feat() {
  return (
    <section className="feat section-padding sub-bg bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">End-to-end Solutions.</span>
              <h3 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                 Custom Development <span className="fw-200">Expertise</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="item-box radius-15 md-mb50">
                <div className="icon-img-70 mb-20 opacity-3">
                  <img src={item.img} alt="" />
                </div>
                <h6 className="mb-10">{item.title}</h6>
                <p>{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feat;
