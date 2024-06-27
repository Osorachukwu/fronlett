import React from 'react'
import imageOne from '../assets/Property 1=Frame 1000002745.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'

function Hero() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={imageOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imageOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imageOne} alt="" />
      </SwiperSlide>
      
      ...
    </Swiper>
  );
}

export default Hero