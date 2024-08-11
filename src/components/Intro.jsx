import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Typed from "typed.js";

const Intro = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Web Designer",
        "Solution Provider",
        "Web Developer",
        "Content Creator",
      ],
      typeSpeed: 110,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section fluid className="intro ">
      <div className="container">
        <div className="row ">
          <div className="col">
            <img data-aos="zoom-in"
                data-aos-duration="2500" src="Image/domi.jpg" alt="" className="img-fluid imgs" />
            <h3 data-aos="fade-left"
                data-aos-duration="2500" className="mt-1">Dominion Olufunke Olonilebi</h3>
            <h5 className="text-white" ref={typedRef}></h5>
            <div>
              <button
                className="btn-hire"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Hire me
              </button>{" "}
              <span>
                <button
                  className="btn-resume mx-1"
                  data-aos="fade-down"
                  data-aos-duration="2500"
                >
                  Resume
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e7008a"
          fill-opacity="0.7"
          d="M0,192L60,165.3C120,139,240,85,360,106.7C480,128,600,224,720,272C840,320,960,320,1080,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

<div className="container skills">
  <div className="row">
    <div className="col-12">
      <div className="row text-white">
    <div className="col-2 " >Reactjs</div >
        <div className="col-2 " >Nextjs</div >
        <div className="col-2 " >JavaScript</div >
        <div className="col-2 " >Redux</div >
        <div className="col-2 " >Context</div >
        <div className="col-2 " >TypeScript</div >
    </div>
    </div>
  </div>
</div>
        
        
      
    </section>
  );
};

export default Intro;
