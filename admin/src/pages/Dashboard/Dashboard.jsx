import React, { useState } from "react";
import DashboardBoxes from "../../components/DashboardBoxes/DashboardBoxes";
import { MdOutlineFrontHand } from "react-icons/md";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { FaAngleDown, FaAngleUp, FaEye } from "react-icons/fa6";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { GrEdit } from "react-icons/gr";
import { IoTrashBin } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };

  return (
    <>
      <div className="w-full p-5 px-10 border bg-white rounded-md border-gray-300 flex items-center gap-8 mb-5 justify-between">
        <div className="info ">
          <div className="text-3xl font-bold ">
            Good Morning, <br />{" "}
            <div className="flex gap-3">
              Cameron{" "}
              <img src="wave.png" alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <p>
            Here’s What happening on your store today. See the statistics at
            once.
          </p>
          <Button className="btn-blue !mt-2">Add Product</Button>
        </div>

        <div>
          <img src="shop-illustration.webp" alt="" className="w-80" />
        </div>
      </div>
      <DashboardBoxes />

{/*Total products */}
      <div className="card  my-3 bg-white p-2">
        <div className="flex items-center justify-between">
          <h1>Products</h1>
        </div>

        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-600">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
              <tr className="*:whitespace-nowrap">
                <th scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} />
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b border-gray-200">
                <td scope="col" className="px-2 py-3 w-[10%]">
                  <Checkbox {...label} size="small" />
                </td>
                <td className="px-6 py-2 w-[250px]">
                  <div className="flex items-center gap-4">
                    <div className="img  h-[25%] rounded-md overflow-hidden group">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                        alt=""
                        className="w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="info w-[75%] ">
                      <h3><Link to={'/product/3443'}>Lorem ipsum dolor sit</Link></h3>
                      <span>Lorem </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <span class="price text-primary font-semibold text-base">$60.00</span>
                </td>
                <td className="px-6 py-2">234 <span>Sale</span> <ProgressBar value={40} type= 'error'/></td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1">
                   <Tooltip title="Edit Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <GrEdit className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="View Product Details" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full">
                      <FaEye  className=""/>
                    </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top-start">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] hover:!bg-gray-300 !rounded-full ">
                      <IoTrashBin  className=""/>
                    </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              
              
            </tbody>
          </table>
        </div>
       
       {/* pagination */}
       <div className="flex items-center justify-end p-4">
         <Stack spacing={2}>
      <Pagination count={100} showFirstButton showLastButton />
      
    </Stack>
       </div>

      </div>

{/* Recent orders */}
      <div className="card  my-3 bg-white p-2">
        <div className="flex items-center justify-between">
          <h1>Recent Orders</h1>
        </div>

        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-600">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
              <tr className="*:whitespace-nowrap">
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}

              <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => isShowOrderProduct(1)}
                    className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-[#f1f1f1] "
                  >
                    {isOpenOrderProduct === 1 ? <FaAngleUp /> : <FaAngleDown />}
                  </Button>
                </td>
                <td className="px-6 py-4">
                  <span>4783464937296</span>
                </td>
                <td className="px-6 py-4">pay_uyeiyhfs</td>
                <td className="px-6 py-4">Zakir</td>
                <td className="px-6 py-4">018154357334</td>
                <td className="px-6 py-4">178346</td>
                <td className="px-6 py-4">$600</td>
                <td className="px-6 py-4">zakirhasan@gmail.com</td>
                <td className="px-6 py-4">Banani, Dhaka</td>
                <td className="px-6 py-4">oery12</td>
                <td className="px-6 py-4">
                  <Badge status="pending" />
                </td>
                <td className="px-6 py-4">01/01/2025</td>
              </tr>

              {isOpenOrderProduct === 1 && (
                <tr>
                  <td className="bg-primary " colSpan={6}>
                    <div className="relative overflow-x-auto mt-3">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-600">
                        <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
                          <tr className="*:whitespace-nowrap">
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                            <td className="px-6 py-4">
                              <span>4783464937296</span>
                            </td>
                            <td className="px-6 py-4">sari</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4">2</td>

                            <td className="px-6 py-4">$300</td>
                            <td className="px-6 py-4">$600</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                            <td className="px-6 py-4">
                              <span>4783464937296</span>
                            </td>
                            <td className="px-6 py-4">sari</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4">2</td>

                            <td className="px-6 py-4">$300</td>
                            <td className="px-6 py-4">$600</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* 2 */}
              <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => isShowOrderProduct(2)}
                    className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-[#f1f1f1] "
                  >
                    {isOpenOrderProduct === 2 ? <FaAngleUp /> : <FaAngleDown />}
                  </Button>
                </td>
                <td className="px-6 py-4">
                  <span>4783464937296</span>
                </td>
                <td className="px-6 py-4">pay_uyeiyhfs</td>
                <td className="px-6 py-4">abir</td>
                <td className="px-6 py-4">018154357334</td>
                <td className="px-6 py-4">178346</td>
                <td className="px-6 py-4">$600</td>
                <td className="px-6 py-4">zakirhasan@gmail.com</td>
                <td className="px-6 py-4">Banani, Dhaka</td>
                <td className="px-6 py-4">oery12</td>
                <td className="px-6 py-4">
                  <Badge status="pending" />
                </td>
                <td className="px-6 py-4">01/01/2025</td>
              </tr>

              {isOpenOrderProduct === 2 && (
                <tr>
                  <td className="bg-primary " colSpan={6}>
                    <div className="relative overflow-x-auto mt-3">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-600">
                        <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
                          <tr className="*:whitespace-nowrap">
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                            <td className="px-6 py-4">
                              <span>4783464937296</span>
                            </td>
                            <td className="px-6 py-4">Shirt</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4">2</td>

                            <td className="px-6 py-4">$300</td>
                            <td className="px-6 py-4">$600</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                            <td className="px-6 py-4">
                              <span>4783464937296</span>
                            </td>
                            <td className="px-6 py-4">sari</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4">2</td>

                            <td className="px-6 py-4">$300</td>
                            <td className="px-6 py-4">$600</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
