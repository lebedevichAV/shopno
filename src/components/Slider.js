import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/pagination";
import slide from "../img/slide1.png";
import Slide from "./Slide";

function Slider() {
  const slides = [slide, slide, slide, slide];
  const pagintion = {
    clickable: true,
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={pagintion}
      autoplay={true}
      className="slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Slide item={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
