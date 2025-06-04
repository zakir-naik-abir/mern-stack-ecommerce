import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MyListItems = () => {
  

  return (
    <div className="cartItem w-full  flex items-center gap-4 border-t py-2  ">
      <div className="img w-[20%] rounded-md overflow-hidden">
        <Link to={"/product/3432"} className="group">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp"
            alt=""
            className="w-full group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="info w-[80%] relative ">
        <IoClose className="cursor-pointer absolute right-2 top-2 link transition-all" />
        <span className="">Sangria</span>
        <h3 className="">
          <Link to={"/"}>Men Pure Cotton Striped Casual Shirt</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} readOnly size="small" />

        

        <div className="flex items-center gap-4">
          <span className="line-through onlPrice text-gray-500 font-medium text-base">
            $120.00
          </span>

          <span className="price text-primary font-semibold text-base">
            50% OFF
          </span>

          <span className="price font-semibold text-base">$60.00</span>
        </div>
        
        <Button className="btn-org btn-lg btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems
