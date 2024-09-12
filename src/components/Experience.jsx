import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container exp-container">
        <div className="row">
          <h5 className="exp-title text-center">Experience</h5>
          {experience.map((data) => {
            return (
              <>
                <div className="col-lg-6 col-12">
                  <div key={data.id} className="exp-item my-3 text-center">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      className="card exp-card"
                    >
                      <h5 className="py-2 fw-bold">{data.company} </h5>
                      <h6>{data.role} </h6>
                      <h4 className="mb-3">
                        {data.sDate} {data.eDate} {data.location}{" "}
                      </h4>
                      <div data-aos="zoom-in" data-aos-duration="2500">
                        <p>{data.exp[0]} </p>
                        <p>{data.exp[1]} </p>
                        <p>{data.exp[2]} </p>
                        <p>{data.exp[3]} </p>
                        <p>{data.exp[4]} </p>
                      </div>
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

export default Experience;
