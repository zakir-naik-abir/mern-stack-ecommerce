import { Button } from "@mui/material";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
        <div className="cartItem w-full flex items-center gap-4 border-b p-2">
          <div className="img w-[25%] overflow-hidden  rounded-md h-[80px]">
            <Link to={"/product/45454"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-base font-medium">
              A-Line Kurti with Sharara & Dupatta
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span className="text-primary font-bold">
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-bold">Price :$25</span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-3 right-2 cursor-pointer text-xl link transition-all" />
          </div>
        </div>
        
        <div className="cartItem w-full flex items-center gap-4 border-b p-2">
          <div className="img w-[25%] overflow-hidden  rounded-md h-[80px]">
            <Link to={"/product/4545"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-base font-medium">
              A-Line Kurti with Sharara & Dupatta
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span className="text-primary font-bold">
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-bold">Price :$25</span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-3 right-2 cursor-pointer text-xl link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b p-2">
          <div className="img w-[25%] overflow-hidden  rounded-md h-[80px]">
            <Link to={"/product/4554"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-base font-medium">
              A-Line Kurti with Sharara & Dupatta
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span className="text-primary font-bold">
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-bold">Price :$25</span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-3 right-2 cursor-pointer text-xl link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b p-2">
          <div className="img w-[25%] overflow-hidden  rounded-md h-[80px]">
            <Link to={"/product/4554"} className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-base font-medium">
              A-Line Kurti with Sharara & Dupatta
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span className="text-primary font-bold">
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-bold">Price :$25</span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-3 right-2 cursor-pointer text-xl link transition-all" />
          </div>
        </div>
      </div>

      <div className="bottomSec absolute bottom-2 w-full">
        <div className="bottomInfo w-full border-t p-4 flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full ">
            <span className="text-base">1 item</span>
            <span className="text-primary font-bold">$88</span>
          </div>
          <div className="flex items-center justify-between w-full py-1 mb-1">
            <span>Shipping</span>
            <span className="text-primary font-bold">$8</span>
          </div>

          <div className="flex items-center justify-between w-full border-t py-1">
            <span className="text-base">Total (tax excl.)</span>
            <span className="text-primary font-bold">$888</span>
          </div>

          <div className="flex items-center justify-between w-full gap-3 mt-3">
            <Link to={"/cart"} className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full">View Cart</Button>
            </Link>
            <Link to={"/checkout"} className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full">CheckOut</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
