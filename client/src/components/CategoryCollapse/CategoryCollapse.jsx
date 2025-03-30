import { Button } from "@mui/material";
import React, { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative flex-col">
          <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
            Fashion
          </Button>

          {submenuIndex === 0 ? (
            <CiSquareMinus
              onClick={() => openSubmenu(0)}
              className="absolute top-[5px] right-[15px] cursor-pointer"
            />
          ) : (
            <CiSquarePlus
              onClick={() => openSubmenu(0)}
              className="absolute top-[5px] right-[15px] cursor-pointer"
            />
          )}

          {submenuIndex === 0 && (
            <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
                  Apparel
                </Button>

                {innerSubmenuIndex === 0 ? (
                  <CiSquareMinus
                    onClick={() => openInnerSubmenu(0)}
                    className="absolute top-[5px] right-[15px] cursor-pointer"
                  />
                ) : (
                  <CiSquarePlus
                    onClick={() => openInnerSubmenu(0)}
                    className="absolute top-[5px] right-[15px] cursor-pointer"
                  />
                )}

                {innerSubmenuIndex === 0 && (
                  <ul className="inner_submenu  w-full pl-3 *:py-1">
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className="list-none flex items-center relative flex-col">
          <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
            Fashion
          </Button>

          {submenuIndex === 0 ? (
            <CiSquareMinus
              onClick={() => openSubmenu(0)}
              className="absolute top-[5px] right-[15px] cursor-pointer"
            />
          ) : (
            <CiSquarePlus
              onClick={() => openSubmenu(0)}
              className="absolute top-[5px] right-[15px] cursor-pointer"
            />
          )}

          {submenuIndex === 0 && (
            <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
                  Apparel
                </Button>

                {innerSubmenuIndex === 0 ? (
                  <CiSquareMinus
                    onClick={() => openInnerSubmenu(0)}
                    className="absolute top-[5px] right-[15px] cursor-pointer"
                  />
                ) : (
                  <CiSquarePlus
                    onClick={() => openInnerSubmenu(0)}
                    className="absolute top-[5px] right-[15px] cursor-pointer"
                  />
                )}

                {innerSubmenuIndex === 0 && (
                  <ul className="inner_submenu  w-full pl-3 *:py-1">
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link
                        to={"/"}
                        className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CategoryCollapse;
