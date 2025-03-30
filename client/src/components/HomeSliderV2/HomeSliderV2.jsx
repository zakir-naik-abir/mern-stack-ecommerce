import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomeSliderV2 = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
            <div className="info absolute top-0 -right-[100%] h-[100%] w-[50%] z-50 p-8 items-center justify-center flex flex-col transition-all opacity-0 duration-700">
              <h4 className="text-xl font-medium w-full mb-3 relative -top-[100%] opacity-0 ">
                Big Saving Days sale
              </h4>
              <h2 className="text-4xl font-bold w-full">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="text-xl font-medium w-full mb-3 mt-3 relative -right-[100%] opacity-0">
                Starting At Only{" "}
                <span className="text-primary text-3xl font-semibold">
                  $59.00
                </span>
              </h3>
              <div className="btn w-full relative -bottom-[100%] opacity-0">
                <Button className="btn-org ">
                  <Link to={"/"}>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
            <div className="info absolute top-0 -right-[100%] h-[100%] w-[50%] z-50 p-8 items-center justify-center flex flex-col transition-all opacity-0 duration-700">
            <h4 className="text-xl font-medium w-full mb-3 relative -top-[100%] opacity-0 ">
                Big Saving Days sale
              </h4>
              <h2 className="text-4xl font-bold w-full">
              Buy Modern Chair In
              Black Color
              </h2>
              <h3 className="text-xl font-medium w-full mb-3 mt-3 relative -right-[100%] opacity-0">
                Starting At Only{" "}
                <span className="text-primary text-3xl font-semibold">
                $99.00
                </span>
              </h3>
              <div className="btn w-full relative -bottom-[100%] opacity-0">
                <Button className="btn-org">
                  <Link to={"/"}>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;
