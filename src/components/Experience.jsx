import React from "react";
import Slider from "react-slick"; // Import the react-slick component
import experience from "./data/experience.json"; // Assuming you have a data file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Experience = () => {
  // Slick slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 columns for desktop/tablet view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the auto-play speed as needed
    responsive: [
      {
        breakpoint: 1024, // Tablet view (768px and above)
        settings: {
          slidesToShow: 2, // 2 columns for tablet and desktop
        },
      },
      {
        breakpoint: 768, // Mobile view (below 768px)
        settings: {
          slidesToShow: 1, // 1 column for mobile
        },
      },
    ],
  };

  return (
    <section id="experience">
      <div className="container exp-container">
        <h5 className="exp-title text-center">Experience</h5>
        <Slider {...settings}>
          {experience.map((data) => {
            return (
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
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
