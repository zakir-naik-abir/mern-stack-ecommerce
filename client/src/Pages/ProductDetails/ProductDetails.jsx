import { Breadcrumbs, Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import QtyBox from "../../components/QtyBox/QtyBox";
import { BsCartPlusFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { LuGitCompareArrows } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import ProductDetailsComponent from "../../components/ProductDetails/ProductDetails";

const ProductDetails = () => {
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
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
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[30%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] space-y-1">
            <ProductDetailsComponent/>
          </div>
        </div>
        <div className=" container">
          <div className="flex items-center gap-4 mb-4">
            <span
              onClick={() => setActiveTab(0)}
              className={`link cursor-pointer ${
                activeTab === 0 ? "text-primary" : ""
              }`}
            >
              Description
            </span>
            <span
              onClick={() => setActiveTab(1)}
              className={`link cursor-pointer ${
                activeTab === 1 ? "text-primary" : ""
              }`}
            >
              Product Details
            </span>
            <span
              onClick={() => setActiveTab(2)}
              className={`link cursor-pointer ${
                activeTab === 2 ? "text-primary" : ""
              }`}
            >
              Reviews
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full rounded-md p-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h1>Lightweight Design</h1>
              <p>
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
              <h1>Free Shipping & Return</h1>
              <p>
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>
              <h1>Money Back Guarantee</h1>
              <p>
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
              <h1>Online Support</h1>
              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full rounded-md p-5">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </th>
                      <td class="px-6 py-4">32.5″L x 18.5″W x 16.5″H</td>
                      <td class="px-6 py-4">32.5″L x 24″W x 18.5″H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </th>
                      <td class="px-6 py-4">32.5″L x 18.5″W x 16.5″H</td>
                      <td class="px-6 py-4">32.5″L x 24″W x 18.5″H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </th>
                      <td class="px-6 py-4">32.5″L x 18.5″W x 16.5″H</td>
                      <td class="px-6 py-4">32.5″L x 24″W x 18.5″H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </th>
                      <td class="px-6 py-4">32.5″L x 18.5″W x 16.5″H</td>
                      <td class="px-6 py-4">32.5″L x 24″W x 18.5″H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-full rounded-md p-5">
              {" "}
              <div className="w-full productReviewContainer">
                {" "}
                <h2 className="text-lg">Customer Q & A</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-2 pr-4">
                  <div className="review w-full flex items-center justify-between border-b py-5">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-20 h-20">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1HFFMjp0Hhho-5rpeW6N6VYeIK-YYu7ng&s"
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4>Tinko Verma</h4>
                        <h5>2025-03-30</h5>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ut aspernatur inventore odit, laudantium
                          cupiditate fuga necessitatibus exercitationem facere
                          aperiam est.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-20 h-20">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1HFFMjp0Hhho-5rpeW6N6VYeIK-YYu7ng&s"
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4>Tinko Verma</h4>
                        <h5>2025-03-30</h5>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ut aspernatur inventore odit, laudantium
                          cupiditate fuga necessitatibus exercitationem facere
                          aperiam est.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                  </div>

                  <div className="review w-full flex items-center justify-between border-b py-5">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-20 h-20">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1HFFMjp0Hhho-5rpeW6N6VYeIK-YYu7ng&s"
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4>Tinko Verma</h4>
                        <h5>2025-03-30</h5>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ut aspernatur inventore odit, laudantium
                          cupiditate fuga necessitatibus exercitationem facere
                          aperiam est.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                  </div>
                </div>
                <br />
                <div className="reviewForm bg-gray-100 p-2">
                  <h2>Add a review</h2>
                  <form className="w-full mt-2">
                    <TextField
                      id="outlined-textarea"
                      label="write a review... "
                      placeholder="Write here"
                      multiline
                      rows={5}
                      className="w-full"
                    />
                  </form>
                  <br />
                  <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                    />
                  <div className="flex items-center mt-2">
                    <Button className="btn-org">Submit Review</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container">
        <h3 className="text-[22px] font-semibold">Latest Products</h3>
        <ProductsSlider items={6} />
        </div>

        <div className="container">
        <h3 className="text-[22px] font-semibold">Relative Products</h3>
        <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
