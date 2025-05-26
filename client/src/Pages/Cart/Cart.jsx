import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaSortDown } from "react-icons/fa";
import { Rating } from "@mui/material";

const Cart = () => {
  return (
    <section className="section py-5">
      <div className="container w-[80%] max-w-[80%] flex">
        <div className="leftPart w-[75%]">
          <h2>Your Cart</h2>
          <p className="mt-0">
            There are <span className="font-bold text-primary">2</span> products
            in your cart
          </p>

          <div className="shadow-md rounded-md p-2 bg-white *:py-1">

            <div className="cartItem w-full  flex items-center gap-4 border-b ">
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
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Size S <FaSortDown /> </span>
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Qty <FaSortDown /> 1 </span>
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

            <div className="cartItem w-full  flex items-center gap-4 border-b">
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
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Size S <FaSortDown /> </span>
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Qty <FaSortDown /> 1 </span>
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

            <div className="cartItem w-full  flex items-center gap-4 border-b">
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
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Size S <FaSortDown /> </span>
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Qty <FaSortDown /> 1 </span>
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

            <div className="cartItem w-full  flex items-center gap-4 border-b">
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
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Size S <FaSortDown /> </span>
                  <span className="flex items-center justify-center bg-gray-50 font-semibold p-1 py-2 rounded-md cursor-pointer">Qty <FaSortDown /> 1 </span>
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
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
