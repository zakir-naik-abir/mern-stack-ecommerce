/* eslint-disable no-unused-vars */

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ProductListing from "./Pages/ProductListing/ProductListing.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import { createContext, use, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "./components/ProductZoom/ProductZoom.jsx";

import { IoMdClose } from "react-icons/io";
import ProductDetailsComponent from "./components/ProductDetails/ProductDetails.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Verify from "./Pages/Verify/Verify.jsx";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import MyList from "./Pages/MyList/MyList.jsx";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";
import MyAccount from "./Pages/MyAccount/MyAccount.jsx";

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [isLogin, setIsLogin] = useState(true)

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox =(status, msg)=>{
    if(status==='success'){
      toast.success(msg);
    }
    if(status==='error'){
      toast.error(msg)
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
  };

  return (
    <>
      <BrowserRouter>

        <MyContext.Provider value={values}>

          <Header />

          <Routes>

            <Route path="/" exact={true} element={<Home />} />

            <Route
              path="/productListing"
              exact={true}
              element={<ProductListing />}
            />

            <Route
              path="/product/:id"
              exact={true}
              element={<ProductDetails />}
            />

            <Route path="/login" exact={true} element={<Login />} />

            <Route path="/register" exact={true} element={<Register />} />

            <Route path="/cart" exact={true} element={<Cart />} />

            <Route path="/verify" exact={true} element={<Verify />} />

            <Route path="/login/change-password" exact={true} element={<ForgotPassword />} />

            <Route path="/checkout" exact={true} element={<Checkout />} />
            
            <Route path="/my-account" exact={true} element={<MyAccount />} />
            
            <Route path="/my-orders" exact={true} element={<MyOrders />} />

            <Route path="/my-list" exact={true} element={<MyList />} />



          </Routes>

          <Footer />

        </MyContext.Provider>

      </BrowserRouter>

      <Toaster/>
      
      <Dialog
        open={openProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="productDetailsModel"
      >
        <DialogContent>
          <div className="flex items-center w-full Container relative p-3">
            <Button
              onClick={handleCloseProductDetailsModal}
              className="!w-10 !h-10 !min-w-10 !rounded-full !text-black !absolute !top-3 !right-3 !bg-white"
            >
              <IoMdClose />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] p-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default App;

export { MyContext };
