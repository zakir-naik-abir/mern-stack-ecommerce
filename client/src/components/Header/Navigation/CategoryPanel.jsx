import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { MdClose } from "react-icons/md";
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box className="categoryPanel" sx={{ width: 250 }} role="presentation">
      <h3 className="text-[16] p-3 font-[500] flex items-center gap-1 justify-between">
        Shop By Categories{" "}
        <MdClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] "
        />
      </h3>

      
      <CategoryCollapse/>

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
