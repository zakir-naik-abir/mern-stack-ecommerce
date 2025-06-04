import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import Badge from "../../components/Badge/Badge";
import { FaAngleUp } from "react-icons/fa";

const MyOrders = () => {

  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null)

  const isShowOrderProduct = (index) =>{
    if(isOpenOrderProduct === index){
      setIsOpenOrderProduct(null)
    }else{
      setIsOpenOrderProduct(index)
    }
  }
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%] ">
          <AccountSidebar />
        </div>

        <div className="col2 w-[75%] ">
          <div className="shadow-md rounded-md p-2 bg-white flex flex-col gap-1">
            <div className="py-2 px-3">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2</span>{" "}
                products order
              </p>
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
                      <Button onClick={() =>isShowOrderProduct(1)} className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-[#f1f1f1] ">
                        {
                          isOpenOrderProduct === 1 ?  <FaAngleUp /> : <FaAngleDown/>
                        }
                        </Button></td>
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

                    {
                      isOpenOrderProduct === 1 && (<tr>
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
                              </tr><tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
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
                    </tr>)
                    }

                    {/* 2 */}
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
                      <td className="px-6 py-4">
                      <Button onClick={() =>isShowOrderProduct(2)} className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-[#f1f1f1] ">
                        {
                          isOpenOrderProduct === 2 ?  <FaAngleUp /> : <FaAngleDown/>
                        }
                        </Button></td>
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

                    {
                      isOpenOrderProduct === 2 && (<tr>
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
                              </tr><tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-600 border-gray-800 *:whitespace-nowrap">
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
                    </tr>)
                    }


                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
