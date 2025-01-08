import React from 'react';
import latests from "./data/latests.json";

const Latest = () => {
  return (
    <section id="project">
      <div className="container project-container">
        <h5 className="pt-5 mt-5 mb-4">Latest Projects</h5>
        <div className="row">
          {latests.map((data) => {
            return (
              <div key={data.id} className="col-lg-4 col-sm-4 col-12 mb-4">
                <div className="card-container">
                  <a href={data.link}>
                    <img
                      data-aos="flip-left"
                      data-aos-duration="2500"
                      src={data.imgSrc}
                      alt={data.projectName}
                      className="img-fluid project-image"
                    />
                  </a>
                  <div className="card-content">
                    <h6
                      data-aos="zoom-in"
                      data-aos-duration="2500"
                      className="text-white mt-3"
                    >
                      {data.projectName}
                    </h6>
                    <p data-aos="fade-left" data-aos-duration="2500" className="mb-4">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
