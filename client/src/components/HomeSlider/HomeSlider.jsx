import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="sliderHome"
      >
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
          <img
            src="https://service.spicezgold.com/download/1741660862304_NewProject(8).jpg"
            alt="Banner slide"
            className="w-full"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">

          <img
            src="https://service.spicezgold.com/download/1741660777364_NewProject(12).jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">

          <img
            src="https://service.spicezgold.com/download/1741660942872_NewProject(6).jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">

          <img
            src="https://service.spicezgold.com/download/1741660907985_NewProject.jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">

          <img
            src="https://service.spicezgold.com/download/1741660881858_NewProject(11).jpg"
            alt="Banner slide"
            className="w-full"
          />
        </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
