import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Slides extends Component {
  render() { 
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    
    return (
      <div className="slider-container text-white mt-3">
        <Slider {...settings}>
          <div key="slide1">
            <h5>Reactjs</h5>
          </div>
          <div key="slide2">
            <h5>Nextjs</h5>
          </div>
          <div key="slide3">
            <h5>Typescript</h5>
          </div>
          <div key="slide4">
            <h5>Node.js</h5>
          </div>
          <div key="slide5">
            <h5>JavaScript</h5>
          </div>
          <div key="slide6">
            <h5>Express.js</h5>
          </div>
          <div key="slide7">
            <h5>Redux</h5>
          </div>
          <div key="slide8">
            <h5>Context</h5>
          </div>
          <div key="slide9">
            <h5>Bootstrap</h5>
          </div>
          <div key="slide10">
            <h5>Tailwind</h5>
          </div>
          <div key="slide11">
            <h5>Shadcn</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slides;
