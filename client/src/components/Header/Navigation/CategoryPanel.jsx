import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MdClose } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import "../Navigation/style.css";
import { Link } from "react-router-dom";
import { CiSquareMinus } from "react-icons/ci";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) =>{
    if(submenuIndex===index){
      setSubmenuIndex(null)
    }else{
      setSubmenuIndex(index)
    }
    
  }

  const openInnerSubmenu = (index) =>{
    if(innerSubmenuIndex===index){
      setInnerSubmenuIndex(null)
    }else{
      setInnerSubmenuIndex(index)
    }
    
  }

  const DrawerList = (
    <Box className="categoryPanel" sx={{ width: 250 }} role="presentation">
      <h3 className="text-[16] p-3 font-[500] flex items-center gap-1 justify-between">
        Shop By Categories{" "}
        <MdClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] "
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
              Fashion
            </Button>
           

            {
              submenuIndex === 0 ? <CiSquareMinus  onClick={()=>openSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" /> :  <CiSquarePlus onClick={()=>openSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" />
            }
            
            

            {
              submenuIndex === 0 && 
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
                    Apparel
                  </Button>

                  {
                    innerSubmenuIndex === 0 ? <CiSquareMinus onClick={()=>openInnerSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" /> : <CiSquarePlus onClick={()=>openInnerSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" />
                  }
                  

                  {
                    innerSubmenuIndex === 0 && <ul className="inner_submenu  w-full pl-3 *:py-1">
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                  }
                  
                </li>
              </ul>
            }

            
          </li><li className="list-none flex items-center relative flex-col">
            <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
              Fashion
            </Button>
           

            {
              submenuIndex === 0 ? <CiSquareMinus  onClick={()=>openSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" /> :  <CiSquarePlus onClick={()=>openSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" />
            }
            
            

            {
              submenuIndex === 0 && 
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Button className="w-full !text-left !justify-start !px-3 !text-slate-600 ">
                    Apparel
                  </Button>

                  {
                    innerSubmenuIndex === 0 ? <CiSquareMinus onClick={()=>openInnerSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" /> : <CiSquarePlus onClick={()=>openInnerSubmenu(0)} className="absolute top-[5px] right-[15px] cursor-pointer" />
                  }
                  

                  {
                    innerSubmenuIndex === 0 && <ul className="inner_submenu  w-full pl-3 *:py-1">
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative">
                      <Link to={'/'} className="w-full !text-left !justify-start !px-3 !text-slate-600 hover:!text-primary transition">
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                  }
                  
                </li>
              </ul>
            }

            
          </li>
        </ul>
      </div>

      {/* <List>
        {[
          "Fashion",
          "Electronics",
          "Bags",
          "Footwear",
          "Groceries",
          "Beauty",
          "Jewllery",
          "",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
