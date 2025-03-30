import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Button } from "@mui/material";
import { IoGridSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItemListView from "../../components/ProductItemListView/ProductItemListView";
import TablePagination from "@mui/material/TablePagination";

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isItemView, setIsItemView] = useState("list");

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-8">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-3 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white ">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-2 itemViewAction">
                <Button
                  onClick={() => setIsItemView("list")}
                  className={`!w-10 !h-10 !min-w-10 !rounded-full !text-black  !bg-white `}
                >
                  <TfiMenuAlt
                    className={` ${isItemView === "list" && "!text-primary"}`}
                  />
                </Button>
                <Button
                  onClick={() => setIsItemView("grid")}
                  className={`!w-10 !h-10 !min-w-10 !rounded-full !text-black !bg-white`}
                >
                  <IoGridSharp
                    className={`${isItemView === "grid" && "!text-primary"}`}
                  />
                </Button>
                <span className="text-sm font-medium text-[rgba(0,0,0,0.7)]">
                  There are 27 products.
                </span>
              </div>
              <div>
              <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-2">
                <span className="text-sm font-medium text-[rgba(0,0,0,0.7)]">
                  Sort By:
                </span>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-xs !text-black capitalize !border-2 !border-black"
                  >
                    Sales, highest to lowest
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Sales, highest to lowest
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Relevance</MenuItem>
                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                    <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Price, low to high
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>

            <div
              className={`grid ${
                isItemView === "list"
                  ? "grid-cols-1 gap-3"
                  : "grid-cols-4 md:grid-cols-4 gap-3"
              } `}
            >
              {isItemView === "list" ? (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              ) : (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              )}
            </div>

          </div>
        </div>
      </div>
            
    </section>
  );
};

export default ProductListing;
