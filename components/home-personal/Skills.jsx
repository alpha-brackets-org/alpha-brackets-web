import React from "react";

function Skills({skills}) {
  return (
    <section className="my-skills section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          {skills.map((skill, index) => (
            <div className="col-lg-2 col-md-4 col-6" key={index}>
            <div className="item mb-30">
              <div className="img">
                <img src={skill.img} alt="" />
              </div>
              <h6 className="fz-18">{skill.title}</h6>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
