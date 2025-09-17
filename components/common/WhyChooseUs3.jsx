'use client';
import React from 'react';

export default function WhyChooseUs3({title, diffrentials}) {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="page-faqs section-padding pb-0 position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                <h3>
                  {title}
                </h3>
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
      <div className="img1">
        <img src="/assets/imgs/intro/03.jpg" alt="" />
      </div>
      <div className="img2">
        <img src="/assets/imgs/arw0.png" alt="" />
      </div>
      <div className="img3">
        <img src="/assets/imgs/intro/04.jpg" alt="" />
      </div>
    </section>
  );
}

