import React , {  useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Login = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  // const [formFields, setFormFields] = useState({
  //   email:'',
  //   password: ''
  // });

  const history = useNavigate();
  const context = useContext(MyContext);
  
  const forgotPassword = () =>{
    context.openAlertBox('success','OTP Send');
    history("/verify");
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <h3 className="text-center">Login to your account</h3>

          <form className="w-full *:mb-5">
            <div className="w-full form-group">
              <TextField
              
                id="email"
                label="User Email *"
                variant="standard"
                className="w-full"
                name="name"
              />
            </div>
            <div className="w-full form-group relative">
              <TextField
              type={isShowPassword===true ? 'text' : 'password'}
                id="password"
                label="User Password *"
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
            <div>
              <a onClick={forgotPassword} href="#" className="link cursor-pointer  text-sm font-semibold ">Forgot Password?</a>
              <Link to={'/login/change-password'}>Change Password</Link>
            </div>
            <div className="flex items-center mt-3">
              <Button className="btn-org w-full !btn-lg">
                Login
              </Button>
            </div>
            <p className="text-center">Not Registered? <Link to='/register' className="link text-sm font-semibold !text-primary">Sign UP</Link></p>
            <p className="text-center">Or continue with social account</p>

            <Button className="flex gap-3 w-full !bg-[#c5c0c0] btn-lg !text-gray-700"><FcGoogle className="text-xl"/> Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
