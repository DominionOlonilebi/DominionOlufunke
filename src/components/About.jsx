import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container abt">
        <div className="row justify-content-center">
          <h5 className="text-center ">About Me</h5>
          <div className="col-md-5">
            <div className="card bg-black brand-name">
              <h4>Dm Tech</h4>
              <p>Web Designer & Developer</p>
            </div>
          </div>
          <div className="col-md-4">
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
