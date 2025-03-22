import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import BannerBox from '../BannerBox/BannerBox';


const AdsBannerSlider = (props) => {
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
            <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp'} link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp'} link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp'} link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp'} link={'/'}/>
          </SwiperSlide>
          
        </Swiper>
    </div>
  )
}

export default AdsBannerSlider