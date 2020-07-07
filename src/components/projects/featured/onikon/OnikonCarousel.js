import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OnikonCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="Onikon-Carousel-Container">
      <Slider {...settings}>
        <a
          className="Single-Container Evergreen"
          href="https://evergreentownhomes.ca/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Rainmarketing"
          href="https://rainmarketing.ca/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Matt"
          href="https://listbuysell.ca/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Tomlee"
          href="http://tomleecollege.ca/home/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Bill"
          href="http://dritsasrealty.com/home/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Fraserpark"
          href="http://fraserparkrealty.com/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Narinder"
          href="https://new.narinderbains.com/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Khanhvo"
          href="https://new.khanhvo.ca/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Jessi"
          href="https://jessbaxter.com/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Alex"
          href="https://alexmaldeis.com/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
        <a
          className="Single-Container Cory"
          href="https://gregandcory.ca/"
          target="_blank"
        >
          <div className="Single-Inner-Container"></div>
          <span className="Project-Name">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
      </Slider>
    </div>
  );
}

export default OnikonCarousel;
