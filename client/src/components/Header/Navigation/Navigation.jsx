import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
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

          <div className="col_2 w-[60%] z-50">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none ">
                <Link to={"/"} className="link transition text14 font-[500]">
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Home</Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to={"/"} className="link transition text14 font-[500] ">
                <Button className="link transition  !font-medium !text-[rgba(0,0,0,0.8)] !py-4 ">Fashion</Button>
                </Link>

                <div className="submenu absolute top-[100%] left-[0%] min-w-[200px] bg-white shadow-md opacity- transition-all">
                  <ul className="">
                    <li className="list-none w-full relative">
                      <Link to={"/"} className="w-full">
                        <Button className=" !text-gray-600 w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>

                        <div className="submenu absolute min-w-[200px] bg-white top-[0%] left-[100%] shadow-md opacity-0 transition-all">
                          <ul className="">
                            <li className="list-none w-full">
                              <Link to={"/"} className="w-full">
                                <Button className=" !text-gray-600 w-full !text-left !justify-start !rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none  w-full">
                            <Link to={"/"} className="w-full">
                              <Button className=" !text-gray-600  w-full !text-left !justify-start">
                                Jeans
                              </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Footwear
                              </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Watch
                              </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className=" !text-gray-600 w-full !text-left !justify-start">
                                Pens
                              </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                    <Link to={"/"} className="w-full">
                      <Button className=" !text-gray-600  w-full !text-left !justify-start">
                        Women
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/"} className="w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Kids
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/"} className="w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Girls
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/"} className="w-full">
                      <Button className=" !text-gray-600 w-full !text-left !justify-start">
                        Boys
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Electronics</Button>
                  
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Bags</Button>
                  
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Footwear</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Groceries</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Beauty</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Wellness</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="link transition text14 font-[500]">
                  <Button className="link transition !font-medium !text-[rgba(0,0,0,0.8)] !py-4">Jewellery</Button>
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
