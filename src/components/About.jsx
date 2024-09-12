import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container abt">
        <div className="row justify-content-center">
          <h5 className="text-center ">About Me</h5>
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="col-lg-4 col-sm-5 col-12 abt-brand"
          >
            <div className="card  brand-name" style={{backgroundColor: "#111111"}}>
              <h4 data-aos="zoom-in" data-aos-duration="2500" className="bg-[#111111] text-white">
                Dominion
              </h4>
              <p data-aos="zoom-in" data-aos-duration="2500" className="bg-[#111111]">
                Web Designer & Developer
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="col-lg-5 col-sm-7 col-12"
          >
            <div className="card abt-card">
              <p data-aos="zoom-in" data-aos-duration="2500" className="px-3">
                I'm a dedicated Frontend Engineer with 2years experience working on several projects, proficient in transforming
                conceptual designs into fully functional websites. with
                expertise in Reactjs, JavaScript, Nextjs, Typescript, Node.js, Redux
                Toolkits, Express.js, Context API, Bootstrap and Tailwind, i craft intuitive
                user interfaces and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
