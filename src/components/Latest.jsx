import React from 'react';
import latests from "./data/latests.json";
import Slider from "react-slick"; // Import the react-slick component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Latest = () => {

// Slick slider settings with responsive breakpoints
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // 2 columns for desktop/tablet view
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
    <section id="project" className='mt-5'>
      <div className="container project-container">
        <h5 className="pt-5 mt-5 mb-4" style={{fontSize: "27px"}}>Latest Live Projects</h5>
        <div className="row">
        <Slider {...settings}>
          {latests.map((data) => {
            return (
              <div key={data.id} className="col-lg-3 col-sm-6 col-12 mb-4 gap-3 mx-lg-4">
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
                    <p data-aos="fade-left" data-aos-duration="2500" className="mb-4" style={{lineHeight: "30px", fontSize: "17px"}}>
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Latest;
