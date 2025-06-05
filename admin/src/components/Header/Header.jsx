import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiLogoutBoxFill, RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaBlog, FaRegBell, FaRegUser, FaUser, FaUserCheck, FaUserDoctor, FaUserSecret } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { MdLogout } from "react-icons/md";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const open = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  return (
    <header className="w-full h-auto p-1 pl-64 bg-[#f1f1f1] flex items-center border-[1px] border-gray-300 justify-between pr-2 shadow-md">
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full">
          <RiMenu2Fill className="text-[22px] text-gray-700" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-3">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          <div
            onClick={handleClickMyAcc}
            className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
          >
            <img
              src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-1/497649798_698649949235798_362028547541429541_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEDUkF7pvwpdHr84BskimQs57B5fBY6PkDnsHl8Fjo-QKMIhgqbvtG84FNl59A7jF4Fr1sx_gslv0moClUOVegV&_nc_ohc=ZQL3amY0Y7oQ7kNvwG-myDw&_nc_oc=AdmKHVWZJjT-DktUI2_iq7YAbu3-V9Xeg44dWGJgk25rzYMj2dR8gb9PtzYJted_j68&_nc_zt=24&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=AGhumVE7Zk78cHQb-ENa-A&oh=00_AfPY0UwArVsaGR7BwgpQxYewte53u792mg1UoZQAtOhAiA&oe=68471717"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <Menu
            anchorEl={anchorMyAcc}
            id="account-menu"
            open={open}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
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
            <MenuItem onClick={handleCloseMyAcc}>
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
                >
                  <img
                    src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-1/497649798_698649949235798_362028547541429541_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEDUkF7pvwpdHr84BskimQs57B5fBY6PkDnsHl8Fjo-QKMIhgqbvtG84FNl59A7jF4Fr1sx_gslv0moClUOVegV&_nc_ohc=ZQL3amY0Y7oQ7kNvwG-myDw&_nc_oc=AdmKHVWZJjT-DktUI2_iq7YAbu3-V9Xeg44dWGJgk25rzYMj2dR8gb9PtzYJted_j68&_nc_zt=24&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=AGhumVE7Zk78cHQb-ENa-A&oh=00_AfPY0UwArVsaGR7BwgpQxYewte53u792mg1UoZQAtOhAiA&oe=68471717"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="info">
                  <h6 className="text-sm leading-5">Zakir</h6>
                  <span className="text-[12px]">admin@gmail.com</span>
                </div>
              </div>
            </MenuItem>
            <Divider/>

            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
              <FaRegUser/> <span className="text-base">Profile</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
              <FaRegUser/> <span className="text-base">Profile</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
              <FaRegUser/> <span className="text-base">Profile</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
              <MdLogout/> <span className="text-base">Logout</span>
            </MenuItem>
            
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
