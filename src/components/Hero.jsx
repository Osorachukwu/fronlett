import React, { useEffect, useState } from "react";
import imageOne from "../assets/Property 1=Frame 1000002745.svg";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Hero() {
  const totalSlides = 4;
  const intervalTime = 3000;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <div>
              <img src={imageOne} alt="" />
            </div>
          </Slide>
          <Slide index={1}>
            <div>
              <img src={imageOne} alt="" />
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <img src={imageOne} alt="" />
            </div>
          </Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </div>
  );
}

export default Hero;
