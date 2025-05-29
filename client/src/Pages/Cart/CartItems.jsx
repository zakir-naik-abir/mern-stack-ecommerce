import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if(value!==null){
      setSelectedSize(value)
    }
  };

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if(value!==null){
      setSelectedQty(value)
    }
  };

  return (
    <div className="cartItem w-full  flex items-center gap-4 border-b  ">
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
          <div className="relative">
            <Button
              className="flex justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer"
              id="basic-button"
              aria-controls={openSize ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openSize ? "true" : undefined}
              onClick={handleClickSize}
            >
              <span className="flex ">
                Size {selectedSize} <FaSortDown />
              </span>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize('S')}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize('M')}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize('L')}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize('XL')}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize('XXL')}>XXL</MenuItem>
              
            </Menu>
          </div>

          <div className="relative">
            
            <Button
              className="flex justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer"
              id="basic-button"
              aria-controls={openQty ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openQty ? "true" : undefined}
              onClick={handleClickQty}
            >
              <span className="flex ">
                Qty {selectedQty} <FaSortDown />
              </span>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
              
              
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="line-through onlPrice text-gray-500 font-medium text-base">
            $120.00
          </span>

          <span className="price text-primary font-semibold text-base">
            50% OFF
          </span>

          <span className="price font-semibold text-base">$60.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
