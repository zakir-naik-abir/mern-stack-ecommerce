import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";

const Checkout = () => {
  return (
    <section className="py-10 ">
      <div className="container flex gap-5">
        <div className="leftCol w-[75%] ">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>

            <form className="w-full mt-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="name"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h1 className="text-sm font-normal">
                Street Address <span className="text-red-500">*</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House No. and Street Name"
                    variant="outlined"
                    size="small"
                    required
                  />
                </div>
              </div>
              <h1 className="text-sm font-normal">Apartment</h1>
              <div className="flex items-center gap-3">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h1 className="text-sm font-normal">
                Town / City <span className="text-red-500">*</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                    required
                  />
                </div>
              </div>

              <h1 className="text-sm font-normal">
                Postcode / ZIP <span className="text-red-500">*</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Postcode / ZIP"
                    variant="outlined"
                    size="small"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Number"
                    variant="outlined"
                    size="small"
                    required
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email address"
                    variant="outlined"
                    size="small"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%] ">
          <div className="card shadow-md bg-white p-3 rounded-md">
            <h2>Your Order</h2>
            <div className="flex items-center justify-between border-t  p-2 border-b">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden ">
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h3>A-line kurti..</h3>
                    <p>Qty: 1</p>
                  </div>
                  <span>$50</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h3>A-line kurti..</h3>
                    <p>Qty: 1</p>
                  </div>
                  <span>$50</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h3>A-line kurti..</h3>
                    <p>Qty: 1</p>
                  </div>
                  <span>$50</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h3>A-line kurti..</h3>
                    <p>Qty: 1</p>
                  </div>
                  <span>$50</span>
                </div>
              </div>
            </div>

            <Button className="btn-org btn-lg w-full !mt-3 flex gap-2 items-center">
              <IoBagCheckSharp /> Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
