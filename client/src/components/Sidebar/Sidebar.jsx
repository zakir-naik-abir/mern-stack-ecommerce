import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import '../Sidebar/style.css'
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from "@mui/material/Rating";

const Sidebar = () => {

  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailableFilter, setIsOpenAvailableFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  

  return (
    <aside className="sidebar py-4 space-y-3">

      {/* Shop by categories */}
      <div className="box">
        <h3 className="w-full text-lg font-semibold flex items-center ">Shop By Categories <Button onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)} className="!w-8 !h-8 !min-w-8 !rounded-full !ml-auto  !text-black">
          {
            isOpenCategoryFilter === true ? <FaAngleUp/> : <FaAngleDown/>
          }
        </Button></h3>
        <Collapse isOpened={isOpenCategoryFilter}>
        <div className="scroll px-2 relative -left-2">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Fashion"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Electronic"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Bags"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Footwear"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Groceries"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Beauty"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Wellness"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Jewellery"
            className="w-full"
          />
        </div>
        </Collapse>
      </div>
      
      {/* availability */}
      <div className="box">
        <h3 className="w-full text-lg font-semibold flex items-center ">Availability<Button onClick={() => setIsOpenAvailableFilter(!isOpenAvailableFilter)} className="!w-8 !h-8 !min-w-8 !rounded-full !ml-auto  !text-black">
          {
            isOpenAvailableFilter === true ? <FaAngleUp/> : <FaAngleDown/>
          }
        </Button></h3>
        <Collapse isOpened={isOpenAvailableFilter}>
        <div className="scroll px-2 relative -left-2">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Available (17)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="In stock (10)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Not available (5)"
            className="w-full"
            size="small"
          />
          
          
        </div>
        </Collapse>
      </div>

      {/* Size */}
      <div className="box">
        <h3 className="w-full text-lg font-semibold flex items-center ">Size<Button onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)} className="!w-8 !h-8 !min-w-8 !rounded-full !ml-auto  !text-black">
          {
            isOpenSizeFilter === true ? <FaAngleUp/> : <FaAngleDown/>
          }
        </Button></h3>
        <Collapse isOpened={isOpenSizeFilter}>
        <div className="scroll px-2 relative -left-2">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Small (17)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Medium (10)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Large (5)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="XL (5)"
            className="w-full"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="XXl (5)"
            className="w-full"
            size="small"
          />
          
          
        </div>
        </Collapse>
      </div>
      
      {/* Size */}
      <div className="box pt-3">
        <h3 className="w-full mb-4 text-lg font-semibold flex items-center ">Filter By Price</h3>
        <RangeSlider />
        <div className="flex py-4 priceRange">
          <span className="text-sm ">
            From: <strong className="text-black">Tk: {100}</strong>
          </span>
          <span className="text-sm ml-auto">
            From: <strong className="text-black">Tk: {2000}</strong>
          </span>
        </div>
      </div>
      
      {/* Rating */}
      <div className="box pt-3">
        <h3 className="w-full mb-4 text-lg font-semibold flex items-center ">Filter By Rating</h3>
        
        <div className="w-full">
        <Rating name="size-small" defaultValue={5} readOnly size="small" />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={4} readOnly size="small" />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={3} readOnly size="small" />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={2} readOnly size="small" />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={1} readOnly size="small" />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={0} readOnly size="small" />
        </div>
        

      </div>
      
      
    </aside>
  );
};

export default Sidebar;
