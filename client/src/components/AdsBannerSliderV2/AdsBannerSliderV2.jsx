import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import BannerBox from '../BannerBox/BannerBox';
import BannerBoxV2 from '../BannerBoxV2/BannerBoxV2';


const AdsBannerSliderV2 = (props) => {
  return (
    <div className='py-5'>
      <Swiper
          slidesPerView={props.items}
          spaceBetween={15}
          navigation= {true}
          
          modules={[Navigation]}
          className="smlBtn"
        >
          
          <SwiperSlide>
            <BannerBoxV2  img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'} link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg'} link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'} link={'/'}/>
          </SwiperSlide>
          
        </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2