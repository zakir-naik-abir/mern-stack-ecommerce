import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import Divider from "@mui/material/Divider";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

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
            <Link to={"/"}>
              <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
                <RxDashboard /> Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/users"}>
              <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
                <HiOutlineUsers /> Users
              </Button>
            </Link>
          </li>
          <li>
            
              <Button
                onClick={() => isOpenSubMenu(1)}
                className="!w-full !capitalize !justify-start !gap-3 !text-gray-500"
              >
                <RiProductHuntLine /> Products{" "}
                <span className="flex items-center justify-center ml-auto">
                  <FaAngleDown />
                </span>
              </Button>
              <Collapse isOpened={submenuIndex === 1 ? true : false}>
                <ul className="w-full pl-12">
                  <li className="w-full">
                  <Link to={"/product-list"}>
                    <Button className="!justify-start !w-full">
                      Product List
                    </Button>
                    </Link>
                  </li><li className="w-full">
                  <Link to={"/add-product"}>
                    <Button className="!justify-start !w-full">
                     Add Product
                    </Button>
                    </Link>
                  </li>
                </ul>
              </Collapse>
          </li>
          <li>
            
              <Button
                onClick={() => isOpenSubMenu(2)}
                className="!w-full !capitalize !justify-start !gap-3 !text-gray-500"
              >
                <MdOutlineCategory /> Category{" "}
                <span className="flex items-center justify-center ml-auto">
                  <FaAngleDown />
                </span>
              </Button>
              <Collapse isOpened={submenuIndex === 2 ? true : false}>
                <ul className="w-full pl-12">
                  <li className="w-full">
                  <Link to={"/category-list"}>
                    <Button className="!justify-start !w-full">
                      Category List
                    </Button></Link>
                  </li>
                  <li className="w-full">
                  <Link to={"/add-category"}>
                    <Button className="!justify-start !w-full">
                      Add a Category
                    </Button></Link>
                  </li>
                  <li className="w-full">
                  <Link to={"/subcategory-list"}>
                    <Button className="!justify-start !w-full">
                      Sub Category List
                    </Button></Link>
                  </li>
                  <li className="w-full">
                  <Link to={"/add-subcategory"}>
                    <Button className="!justify-start !w-full">
                      Add a sub subcategory
                    </Button>
                     </Link>
                  </li>
                </ul>
              </Collapse>
           
          </li>
          <li>
            <Link to={"/orders"}>
              <Button className="!w-full !capitalize !justify-start !gap-3 !text-gray-500">
                <IoBagCheckOutline /> Orders
              </Button>
            </Link>
          </li>
          <Divider />
          <li>
            
              <Button
                onClick={() => isOpenSubMenu(4)}
                className="!w-full !capitalize !justify-start !gap-3 !text-gray-500"
              >
                <IoHomeOutline /> <span>Home Slides</span>{" "}
                <span className="flex items-center justify-center ml-auto">
                  <FaAngleDown />
                </span>
              </Button>

              <Collapse isOpened={submenuIndex === 4 ? true : false}>
                <ul className="w-full pl-12">
                  <li className="w-full">
                  <Link to={"/banner-list"}>
                    <Button className="!justify-start !w-full">
                      Home Banner Slide List
                    </Button>
                    </Link>
                  </li>
                  <li className="w-full">
                  <Link to={"/add-banner"}>
                    <Button className="!justify-start !w-full">
                      Add Home Banner Slide
                    </Button>
                    </Link>
                  </li>
                </ul>
              </Collapse>
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
