import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container abt">
        <div className="row justify-content-center">
          <h5 className="text-center ">About Me</h5>
          <div data-aos="fade-right"
                data-aos-duration="2500" className="col-md-5 col-sm-6 col-12 abt-brand">
            <div  className="card bg-black brand-name">
              <h4 data-aos="zoom-in"
                data-aos-duration="2500">Dm Tech</h4>
              <p data-aos="zoom-in"
                data-aos-duration="2500">Web Designer & Developer</p>
            </div>
          </div>
          <div data-aos="fade-left"
          data-aos-duration="2500" className="col-md-4 col-sm-6 col-12">
            <div className="card abt-card">
              <p className="px-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos minus minima corporis eos odit iste ex sunt labore!
                Rerum dolorum laudantium ipsa eveniet a. Qui odit accusamus unde
                voluptates odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
