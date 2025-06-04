import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TbGitCompare } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500] link">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none ">
                  <Link
                    to="help_center"
                    className="text-[12px] font-[500] transition link"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order_tracking"
                    className="text-[12px] font-[500]  transition link"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-gray-200 border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center gap-3 justify-end w-full">
              {context.isLogin === false ? (
                <li className="list-none flex">
                  <Link to={"/login"} className="link transition text-[13px]">
                    Login
                  </Link>{" "}
                  |
                  <Link
                    to={"/register"}
                    className="link transition text-[13px]"
                  >
                    {" "}
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <div
                    onClick={handleClick}
                    className="myAccountWrap flex items-center gap-2"
                  >
                    <Button className="!w[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white  ">
                      <FaRegUserCircle className="text-xl text-gray-800" />
                    </Button>

                    <div className="info flex flex-col items-start">
                      <h4 className="text-sm mb-0 capitalize">Zakir</h4>
                      <span className="text-[13px] lowercase">z@gmail.com</span>
                    </div>
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to={'/my-account'}>
                      <MenuItem onClick={handleClose} className="flex gap-2">
                      <FaRegUserCircle /> My account
                    </MenuItem>
                    </Link>

                    <Link to={'/my-orders'}>
                      <MenuItem onClick={handleClose} className="flex gap-2">
                      <IoBagCheckOutline /> Orders
                    </MenuItem>
                    </Link>
                    
                    <Link to={'my-list'}>
                      <MenuItem onClick={handleClose} className="flex gap-2">
                      <FaRegHeart /> My List
                    </MenuItem>
                    </Link>
                    
                    <Link>
                      <MenuItem onClick={handleClose} className="flex gap-2">
                      <FiLogOut />
                      Logout
                    </MenuItem>
                    </Link>

                    <Divider />
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Compare" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <TbGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart" placement="top">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
