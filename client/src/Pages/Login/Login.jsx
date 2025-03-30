import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";

const Login = () => {

  const [isShowPassword, setIsShowPassword] = useState();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <h3 className="text-center">Login to your account</h3>
          <form className="w-full *:mb-5">
            <div className="w-full form-group">
              <TextField
                id="email"
                label="User Email"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="w-full form-group relative">
              <TextField
                id="password"
                label="User Password"
                variant="standard"
                className="w-full"
              />
              <Button onClick={() =>setIsShowPassword(!isShowPassword)} className='!absolute !top-5 !right-0 !rounded-full !h-9 !w-9 !min-w-9'><IoMdEye/></Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
