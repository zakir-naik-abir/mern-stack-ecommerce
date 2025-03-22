import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[22px] font-semibold">Popular Products</h3>
              <p>Do not miss the current offers until the end of march.</p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4 py-2 border border-[#ff5252] flex items-center justify-between mb-5">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-xl font-semibold uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-medium capitalize">
                Free Delivery Now On Your First Order and Over $ 200{" "}
              </p>
            </div>
            <p className="font-bold text-2xl">-Only $200</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-semibold">Latest Products</h3>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-semibold">Featured Products</h3>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 pb-8 bg-white blogSection">
        <div className="container">
        <h3 className="text-[22px] font-semibold mb-4">From The Blog</h3>
          <Swiper
                  slidesPerView={4}
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
                  className="blogSlider"
                >
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogItem/>
                  </SwiperSlide>
                  
                  
                </Swiper>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

export default Home;
