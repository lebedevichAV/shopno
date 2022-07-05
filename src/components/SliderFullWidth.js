import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import SlideFullWidth from "./SlideFullWidth";

function SliderFullWidth({ cards }) {
  const pagintion = {
    clickable: true,
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={pagintion}
      // autoplay={true}
      className="slider-full-width"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <SlideFullWidth card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderFullWidth;
