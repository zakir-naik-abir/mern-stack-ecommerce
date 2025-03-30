import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { LuGitCompareArrows } from "react-icons/lu";
import QtyBox from "../QtyBox/QtyBox";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className=" head">
        Siril Georgette Brown Color Saree with Blouse piece
      </h1>

      <div className="flex items-center gap-3">
        <span>
          Brands: <span>SIRIL</span>
        </span>
        <Rating name="size-small" defaultValue={4} readOnly size="small" />
        <span>Review (6)</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="line-through onlPrice text-gray-500 font-medium text-base">
          $60.00
        </span>
        <span className="price text-primary font-semibold text-base">
          $60.00
        </span>
        <span>
          Available In Stock:{" "}
          <span className="text-green-500 font-bold">150 Items</span>
        </span>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex items-center gap-3">
        <span>Size:</span>
        <div className="actions flex gap-2">
          <Button
            onClick={() => setProductActionIndex(0)}
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }`}
          >
            S
          </Button>
          <Button
            onClick={() => setProductActionIndex(1)}
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }`}
          >
            M
          </Button>
          <Button
            onClick={() => setProductActionIndex(2)}
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }`}
          >
            L
          </Button>
          <Button
            onClick={() => setProductActionIndex(3)}
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }`}
          >
            XL
          </Button>
        </div>
      </div>

      <p>Free Shipping (Est. Delivery Time 2-3 Days)</p>

      <div className="flex items-center gap-4">
        <div className="qtyBoxWrapper w-16">
          <QtyBox />
        </div>
        <Button className="btn-org !flex !gap-2">
          <BsCartPlusFill />
          Add to Cart
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 link">
          <CiHeart /> Add to Wishlist
        </span>
        <span className="flex items-center gap-1 link">
          <LuGitCompareArrows /> Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
