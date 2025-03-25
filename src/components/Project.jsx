import React from "react";
import projects from "./data/projects.json";

const Project = () => {
  return (
    <section id="project">
      <div className="container project-container">
        <h5 className="text-center mb-5 mt-5 pt-4" style={{fontSize: "27px"}}>Projects</h5>
        <div className="row">
          {projects.map((data) => {
            return (
              <div key={data.id} className="col-lg-4 col-sm-6 col-12 mb-4">
                <div className="row d-flex justify-content-center">
                    <a href={data.link}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration="2500"
                        src={data.imgSrc}
                        alt={data.projectName}
                        className="img-fluid project-image"
                      />
                    </a>
                  </div>
                  {/* <div className="col-lg-5  col-12 mb-4">
                    <h6
                      data-aos="zoom-in"
                      data-aos-duration="2500"
                      className="text-white"
                    >
                      {data.projectName}
                    </h6>
                    <p data-aos="fade-left" data-aos-duration="2500" className="mb-4">
                      {data.description}
                    </p>
                  </div> */}
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
