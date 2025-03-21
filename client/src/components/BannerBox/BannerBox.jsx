import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
    <Link to={"/"}>
        <img
          src={props.img}
          alt="Banner"
          className="w-full transition-all group-hover:scale-105 r"
          link
        />
    </Link>
      </div>
  );
};

export default BannerBox;
