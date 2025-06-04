import { Button } from "@mui/material";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsBagCheck, BsHeart } from "react-icons/bs";
import { GrCloudUpload } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-3">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
            <GrCloudUpload className="text-xl text-white" />
            <input
              type="file"
              className="absolute top-0
                   left-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3>Zakir Naik</h3>
        <span>zakir@gmail.com</span>
      </div>

      <ul className="list-none bg-gray-100 myAccountTabes">
        <li className="w-full ">
          <NavLink to={"/my-account"} exact={true} activeClassName={"isActive"}>
            <Button className="flex !text-left !rounded-none !items-center !justify-start !px-4 gap-2 !w-full !capitalize">
              <BiUser className="text-xl" /> My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full ">
          <NavLink to={"/my-list"} exact={true} activeClassName={"isActive"}>
            <Button className="flex !text-left !rounded-none !items-center !justify-start !px-4 gap-2 !w-full !capitalize">
              <BsBagCheck className="text-xl" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full ">
          <NavLink to={"/my-orders"} exact={true} activeClassName={"isActive"}>
            <Button className="flex !text-left !rounded-none !items-center !justify-start !px-4 gap-2 !w-full !capitalize">
              <BsHeart className="text-xl" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full border-t-2 border-t-gray-300">
          <Button className="flex !text-left !rounded-none !items-center !justify-start !px-4 gap-2 !w-full !capitalize">
            <LuLogOut className="text-xl" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
