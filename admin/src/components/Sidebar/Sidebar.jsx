import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import Divider from "@mui/material/Divider";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-white  w-[18%] h-full border-r-[1px] border-gray-200 p-2 px-4">
        <div className="py-2 w-full">
          <Link>
            <img
              src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              alt=""
              className="w-[120px]"
            />
          </Link>
        </div>

        <ul>
          <li>
          <Link to={'/'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <RxDashboard /> Dashboard
            </Button>
            </Link>
          </li>
          <li><Link to={'/users'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <HiOutlineUsers /> Users
            </Button>
            </Link>
          </li>
          <li><Link to={'/'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <RiProductHuntLine /> Products
            </Button>
            </Link>
          </li>
          <li><Link to={'/'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <MdOutlineCategory  /> Category
            </Button></Link>
          </li><li><Link to={'/'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <RxDashboard /> Orders
            </Button></Link>
          </li>
          <Divider/>
          <li><Link to={'/'}>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <IoHomeOutline /> Home
            </Button>
            </Link>
          </li>
          <li>
            <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
              <MdLogout /> Logout
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
