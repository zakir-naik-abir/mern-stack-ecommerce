import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end">
          <div className="col_1 w-[20%]">
            <Button
              onClick={openCategoryPanel}
              className="gap-3 !text-black w-full"
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop buy categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold cursor-pointer" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Fashion
                </Link>

                <div className="submenu absolute min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul className="">
                    <li className="list-none w-full relative">
                      <Link to={"/"}>
                        <Button className=" !text-gray-600 w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>

                        <div className="submenu absolute min-w-[200px] bg-white top-[00%] left-[100%] shadow-md opacity-0 transition-all">
                          <ul className="">
                            <li className="list-none w-full">
                              <Link to={"/"}>
                                <Button className=" !text-gray-600 w-full !text-left !justify-start !rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none  w-full">
                              <Button className=" !text-gray-600  w-full !text-left !justify-start">
                                Jeans
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Footwear
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Watch
                              </Button>
                            </li>
                            <li className="list-none w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Pens
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                      <Button className=" !text-gray-600  w-full !text-left !justify-start">
                        Women
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Kids
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Girls
                      </Button>
                    </li>
                    <li className="list-none w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Boys
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Footwear
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text14 font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* category */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
