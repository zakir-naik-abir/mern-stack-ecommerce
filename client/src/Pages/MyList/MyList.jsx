import { Button } from "@mui/material";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import MyListItems from "./MyListItems";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";

const MyList = () => {
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
                products in your cart
              </p>
            </div>

            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
