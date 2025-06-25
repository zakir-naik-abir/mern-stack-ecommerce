import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TbChartInfographic } from "react-icons/tb";

// import required modules
import { Navigation } from "swiper/modules";

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        // navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box p-4 rounded-md border hover:bg-gray-100 border-gray-300 flex items-center gap-4">
            <div class="flex items-center justify-center rounded-lg lg:h-12 lg:w-12 w-auto h-auto p-0 bg-transparent -mx-1.5 [&amp;&gt;svg]:w-9 [&amp;&gt;svg]:h-7 lg:[&amp;&gt;svg]:w-[42px] lg:[&amp;&gt;svg]:h-[34px] text-[#3872FA]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                class="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z"
                  opacity="0.2"
                ></path>
                <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
              </svg>
            </div>
            <div className="info w-[70%] ">
              <h3>New Orders</h3>
              <b>1,390</b>
            </div>
            <TbChartInfographic className="text-3xl text-[#3872fa]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-4 rounded-md border hover:bg-gray-100 border-gray-300 flex items-center gap-4">
            <div class="flex items-center justify-center rounded-lg lg:h-12 lg:w-12 [&amp;&gt;svg]:w-10 [&amp;&gt;svg]:h-8 lg:[&amp;&gt;svg]:w-11 lg:[&amp;&gt;svg]:h-9 w-auto h-auto p-0 bg-transparent -mx-1.5 text-[#10b981]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z" opacity="0.2"></path><path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM128,24a8,8,0,0,0-8,8v91.82L41.19,169.73a8,8,0,0,0-2.87,11A104,104,0,1,0,128,24Zm0,192a88.47,88.47,0,0,1-71.49-36.68l75.52-44a8,8,0,0,0,4-6.92V40.36A88,88,0,0,1,128,216Z"></path></svg></div>
            <div className="info w-[70%] ">
              <h3>Sales</h3>
              <b>$11,390</b>
            </div>
            <TbChartInfographic className="text-3xl text-[#38fa42]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-4 rounded-md border hover:bg-gray-100 border-gray-300 flex items-center gap-4">
            <div class="flex items-center justify-center rounded-lg lg:h-12 lg:w-12 [&amp;&gt;svg]:w-10 [&amp;&gt;svg]:h-8 lg:[&amp;&gt;svg]:w-11 lg:[&amp;&gt;svg]:h-9 w-auto h-auto p-0 bg-transparent -mx-1.5 text-[#7928ca]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,96H24L128,32Z" opacity="0.2"></path><path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path></svg></div>
            <div className="info w-[70%] ">
              <h3>Revenue</h3>
              <b>$2,390</b>
            </div>
            <TbChartInfographic className="text-3xl text-[#8238fa]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-4 rounded-md border hover:bg-gray-100 border-gray-300 flex items-center gap-4">
            <div class="flex items-center justify-center rounded-lg lg:h-12 lg:w-12 w-auto h-auto p-0 bg-transparent -mx-1.5 [&amp;&gt;svg]:w-9 [&amp;&gt;svg]:h-7 lg:[&amp;&gt;svg]:w-[42px] lg:[&amp;&gt;svg]:h-[34px] text-[#3872FA]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                class="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z"
                  opacity="0.2"
                ></path>
                <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
              </svg>
            </div>
            <div className="info w-[70%] ">
              <h3>Total Products</h3>
              <b>1,390</b>
            </div>
            <TbChartInfographic className="text-3xl text-[#3872fa]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
