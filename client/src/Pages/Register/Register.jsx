import React , { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {

  const [isShowPassword, setIsShowPassword] = useState();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <h3 className="text-center">Create your account</h3>
          <form className="w-full *:mb-5">
            <div className="w-full form-group">
              <TextField
                id="name"
                label="Your Name *"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="w-full form-group">
              <TextField
                id="email"
                label="Your Email *"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="w-full form-group relative">
              <TextField
              type={isShowPassword===true ? 'text' : 'password'}
                id="password"
                label="Your Password *"
                variant="standard"
                className="w-full"
              />
              <Button onClick={() =>setIsShowPassword(!isShowPassword)} className='!absolute !top-5 !right-0 !rounded-full !h-9 !w-9 !min-w-9 z-50 !text-black'>
              {
                isShowPassword === true ? <IoMdEye className="opacity-75"></IoMdEye> : <IoMdEyeOff className="opacity-75"/>
              }
              </Button>
            </div>
            <div className="flex items-center mt-3">
              <Button className="btn-org w-full !btn-lg">
                Sign Up
              </Button>
            </div>
            <p className="text-center cursor-pointer">Have an account? <Link to='/login' className="link text-sm font-semibold !text-primary">Login</Link></p>
            <p className="text-center">Or continue with social account</p>

            <Button className="flex gap-3 w-full !bg-[#c5c0c0] btn-lg !text-gray-700"><FcGoogle className="text-xl"/>Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
