import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { PiGift } from "react-icons/pi";
import { PiKeyReturn } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TbBrandWechat } from "react-icons/tb";


const Footer = () => {
  return (
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
        <hr />

        <div className="footer flex items-center py-8">
          <div className="part1 w-[30%]">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="pb-4">Classyshop - Mega Super Store <br />
            507-Union Trade Centre France</p>
            <Link to={'mailto:someone@example.com'} className="link">zakirhasanabir@gmail.com</Link>
            <br />
            <span className="text-2xl font-semibold w-full block text-primary pt-3">(+88) 01815-435734</span>

            <div className="flex items-center gap-2 py-8">
            <TbBrandWechat  className="text-5xl text-primary"/>
            <span className="text-xl font-semibold">Online Chat <br />Get Expert Help</span>
            </div>
          </div>

          <div className="part1 w-[40%] flex items-center">
            <div className="par2_col1">
            <h2 className="text-2xl font-semibold">Products</h2>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
