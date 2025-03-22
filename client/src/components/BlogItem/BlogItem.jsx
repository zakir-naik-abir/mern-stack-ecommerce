import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className=" rounded-md w-full overflow-hidden imgWrapper cursor-pointer relative">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
          alt="Block image"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />

        <span className="flex items-center justify-center text-white z-50 bg-primary rounded-md p-1 text-xs font-medium absolute bottom-4 right-4">
          <IoMdTime className="text-base" /> 22 March, 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-lg font-semibold text-black"><Link to={'/'} className="link">Nullam ullamcorper ornare molestie</Link></h2>
        <p className="text-sm font-normal text-[rgba(0,0,0,0.8)]">
          Nullam ullamcorper ornare molestie Nullam ullamcorper ornare molestie
          
        </p>
        <Link to={'/'} className="link font-medium text-sm flex items-center gap-1"><u>Read More</u> <FaRegArrowAltCircleRight /></Link>
      </div>
    </div>
  );
};

export default BlogItem;
