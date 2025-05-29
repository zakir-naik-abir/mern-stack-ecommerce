
import { Button } from "@mui/material";
import { BsBagCheckFill } from "react-icons/bs";
import CartItems from "./CartItems";

const Cart = () => {
  
 
  return (
    <section className="section py-5">
      <div className="container w-[80%] max-w-[80%] flex gap-2">
        <div className="leftPart w-[75%]">
          <div className="shadow-md rounded-md p-2 bg-white flex flex-col gap-1">
            <div className="py-2 px-3">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2</span>{" "}
                products in your cart
              </p>
            </div>

            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>

            
          </div>
        </div>

        <div className="rightPart w-[25%] ">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3 border-b-2">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between ">
              <span className="text-base font-medium">Subtotal</span>
              <span className="font-bold">$120.00</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-base font-medium">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-base font-medium">Estimate for</span>
              <span className="font-bold">Bangladesh</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-base font-medium">Total</span>
              <span className="font-bold">$150.00</span>
            </p>
            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsBagCheckFill className="" /> Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
