import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { PiGift } from "react-icons/pi";
import { PiKeyReturn } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TbBrandWechat } from "react-icons/tb";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-center gap-5 pb-5 py-8">
            <div className="col1 flex items-center flex-col justify-center group w-[20%]">
              <LiaShippingFastSolid className="text-5xl group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3">Free Shipping</h3>
              <p>For all orders over $200</p>
            </div>

            <div className="col2 flex items-center flex-col justify-center group w-[20%]">
              <PiKeyReturn className="text-5xl group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3">30 Days Returns</h3>
              <p>For an Exchange Product</p>
            </div>

            <div className="col3 flex items-center flex-col justify-center group w-[20%]">
              <IoWalletOutline className="text-5xl group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3">Secured Payment</h3>
              <p>Payment Cards Accepted</p>
            </div>
            <div className="col4 flex items-center flex-col justify-center group w-[20%]">
              <PiGift className="text-5xl group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3">Special Gifts</h3>
              <p>Our First Product Order</p>
            </div>
            <div className="col5 flex items-center flex-col justify-center group w-[20%]">
              <BiSupport className="text-5xl group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3">Support 24/7</h3>
              <p>Contact us Anytime</p>
            </div>
          </div>
          <br />

          <hr />

          <div className="footer flex  py-8">
            <div className="part1 w-[30%]">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="pb-4">
                Classyshop - Mega Super Store <br />
                507-Union Trade Centre France
              </p>
              <Link to={"mailto:someone@example.com"} className="link">
                zakirhasanabir@gmail.com
              </Link>
              <br />
              <span className="text-2xl font-semibold w-full block text-primary pt-3">
                (+88) 01815-435734
              </span>

              <div className="flex items-center gap-2 py-8">
                <TbBrandWechat className="text-5xl text-primary" />
                <span className="text-xl font-semibold">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex">
              <div className="par2_col1 w-[50%]">
                <h2 className="text-2xl font-semibold">Products</h2>
                <ul className="list capitalize">
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Prices Drop</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">New products</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Best sales</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Contact us</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Sitemap</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Stores</Link>
                  </li>
                </ul>
              </div>
              <div className="par2_col2 w-[50%]">
                <h2 className="text-2xl font-semibold">Our company</h2>
                <ul className="list capitalize">
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Delivery</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Legal Notice</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Terms and conditions of use</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">About us</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Secure payment</Link>
                  </li>
                  <li className="list-none text-sm w-full mb-1">
                    <Link className="link">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[30%] flex flex-col">
              <h2 className="text-2xl font-semibold capitalize">
                Subscribe to <br /> newsletter
              </h2>
              <p>
                Subscribe to our latest <br /> newsletter to get news about{" "}
                <br /> special discounts.
              </p>
              <form className="mt-5 flex flex-col">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none px-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                  className="mb-4"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] bg-white py-3">
        <div className="container flex items-center justify-between">
          <ul className="flex gap-4">
            <li className="list-none group">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center  group-hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-base group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none group">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center  group-hover:bg-primary transition-all"
              >
                <FaInstagram className="text-base group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none group">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center  group-hover:bg-primary transition-all"
              >
                <FaLinkedinIn className="text-base group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none group">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center  group-hover:bg-primary transition-all"
              >
                <FaXTwitter className="text-base group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none group">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center  group-hover:bg-primary transition-all"
              >
                <CiYoutube className="text-base group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p>@ 2025 - Ecommerce Website by Royal Family Club</p>

          <div className="flex items-center gap-2">
            <img src="/master_card.png" alt="image" />
            <img src="/paypal.png" alt="image" />
            <img src="/american_express.png" alt="image" />
            <img src="/visa.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
