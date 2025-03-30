import React, { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { CiHeart, CiZoomIn } from "react-icons/ci";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { MyContext } from "../../App";

const ProductItemListView = () => {

  const context = useContext(MyContext)

  return (
    <div className="productItem  rounded-md overflow-hidden  border-[1px] border-[rgba(0,0,0,0.1)] shadow-md flex items-center">
      <div className="group imgWrapper w-[25%]   overflow-hidden relative">
        <Link to={"/"}>
          <div className="img h-[260px] overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1742462729829_zoom_1-1673275594.webp"
              alt=""
              className="w-full"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp"
              alt=""
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] bg-primary text-white rounded-sm z-50 px-1 text-xs font-medium">
          8%
        </span>

        <div className="actions absolute top-[-200px] right-[-10px] z-50 flex flex-col w-[80px] items-center transition-all duration-300 gap-4 group-hover:top-[10px] group-hover:opacity-100">
          <Button onClick={() => context.setOpenProductDetailsModal(true)} className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black  hover:!bg-primary hover:text-white group">
            <MdOutlineZoomOutMap className="text-lg !text-black group-hover:text-white" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black  hover:!bg-primary hover:text-white group">
            <CiHeart className="text-lg !text-black group-hover:text-white" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black  hover:!bg-primary hover:text-white group">
            <LuGitCompareArrows className="text-lg !text-black group-hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="info pl-5 py-2 w-[75%] flex flex-col gap-1">
        <h6 className="text-sm">
          <Link to={"/"} className="link transition-all text-base font-semibold">
            Koskii
          </Link>
        </h6>
        <h3 className="text-2xl title mt-2 font-bold text-gray-700 mb-1 ">
          <Link to={"/"} className="link transition-all">
            Polka Dots Printed Embroidered Saree{" "}
          </Link>
        </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Rating name="size-small" defaultValue={4} readOnly size="medium" />

        <div className="flex items-center gap-4">
          <span className="line-through onlPrice text-gray-500 font-medium text-lg">
            $60.00
          </span>
          <span className="price text-primary font-semibold text-lg">
            $60.00
          </span>
        </div>
        <div className="mt-2">
        <Button className="btn-org "><h1 className="flex items-center justify-center gap-2"><BsCartPlusFill className="text-lg"/> Add to Cart</h1></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemListView;
