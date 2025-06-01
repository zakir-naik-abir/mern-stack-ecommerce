import React , { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";


const ForgotPassword = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);


  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <h3 className="text-center">Forgot Password</h3>

          <form className="w-full *:mb-5">

            <div className="w-full form-group relative">
              <TextField
              type={isShowPassword === true ? 'text' : 'password'}
                id="password"
                label="New Password"
                variant="standard"
                className="w-full"
                name="password"
              />
              <Button onClick={() =>setIsShowPassword(!isShowPassword)} className='!absolute !top-5 !right-0 !rounded-full !h-9 !w-9 !min-w-9 z-50 !text-black'>
              {
                isShowPassword === true ? <IoMdEye className="opacity-75"></IoMdEye> : <IoMdEyeOff className="opacity-75"/>
              }
              </Button>

              

            </div>

            <div className="w-full form-group relative">
              <TextField
              type={isShowPassword2 === true ? 'text' : 'password'}
                id="confirm_password"
                label="Confirm Password"
                variant="standard"
                className="w-full"
                name="password"
              />

              <Button onClick={() =>setIsShowPassword2(!isShowPassword2)} className='!absolute !top-5 !right-0 !rounded-full !h-9 !w-9 !min-w-9 z-50 !text-black'>
              {
                isShowPassword2 === true ? <IoMdEye className="opacity-75"></IoMdEye> : <IoMdEyeOff className="opacity-75"/>
              }
              </Button>

              

            </div>

            
            <div className="flex items-center mt-3">
              <Button className="btn-org w-full !btn-lg">
                Change Password
              </Button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
