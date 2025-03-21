import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

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

            <div className="rightSec w-[75%]">
            <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons="auto"
  aria-label="scrollable auto tabs example"
>
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
  <Tab label="Item Four" />
  <Tab label="Item Five" />
  <Tab label="Item Six" />
  <Tab label="Item Seven" />
</Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white mt-5">
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
    </div>
  );
};

export default Home;
