import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-5">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={15}
          navigation= {true}
          
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item py-3 px-7 bg-white rounded-sm text-center items-center justify-center  flex flex-col">
                <img
                  src="https://service.spicezgold.com/download/1741660962379_fash.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex flex-col">
                <img
                  src="https://service.spicezgold.com/download/1741660988059_ele.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item  py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col  flex">
                <img
                  src="https://service.spicezgold.com/download/1741661045887_bag.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item  py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col flex">
                <img
                  src="https://service.spicezgold.com/download/1741661061379_foot.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item  py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col flex">
                <img
                  src="https://service.spicezgold.com/download/1741661077633_gro.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item  py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col flex">
                <img
                  src="https://service.spicezgold.com/download/1741661092792_beauty.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item  py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col  flex">
                <img
                  src="https://service.spicezgold.com/download/1741661105893_well.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3 flex">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="item py-3 px-7 bg-white rounded-sm text-center items-center justify-center flex-col flex">
                <img
                  src="https://service.spicezgold.com/download/1741661120743_jw.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[18px] font-medium mt-3">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
