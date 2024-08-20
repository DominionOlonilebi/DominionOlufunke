import React from "react";
import projects from "./data/projects.json";

const Project = () => {
  return (
    <section id="project">
      <div className="container project-container">
        <h5 className="text-center my-4">Projects</h5>
        <div className="row">
          {projects.map((data) => {
            return (
              <>
                <div className="col-lg-6 col-sm-6 col-12 ">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 col-sm-6 col-12 mb-3">
                      <a href={data.link}>
                        <img
                          data-aos="flip-left"
                          data-aos-duration="2500"
                          src={data.imgSrc}
                          alt=""
                          className="img-fluid"
                        />{" "}
                      </a>
                    </div>
                    <div className="col-lg-5 col-sm-6 col-12">
                      <h6
                        data-aos="zoom-in"
                        data-aos-duration="2500"
                        className="text-white"
                      >
                        {data.projectName}{" "}
                      </h6>
                      <p data-aos="fade-left" data-aos-duration="2500">
                        {data.description}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
