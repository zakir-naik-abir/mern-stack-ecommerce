import React, { useState } from 'react'
import OtpBox from '../../components/OtpBox/OtpBox'
import Button from '@mui/material/Button';


const Verify = () => {

  const [otp, setOtp] = useState('');
  const handleOtpChange = (value) =>{
    setOtp(value);
  }

  const verifyOTP = (e) =>{
    e.preventDefault();
    alert(otp)
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <div className="text-center items-center flex justify-center">
            <img src="verify.png" alt="" className='' width={80} />
          </div>
          <h3 className="text-center">Verify OTP</h3>

          <p className='text-center p-2'>OTP sent to <span className='text-primary font-bold'>z@gmail.com</span></p>

          <form onSubmit={verifyOTP}>
          
            <OtpBox length={6} onChange={handleOtpChange}/>

          <div className="flex items-center justify-center mt-5 px-4">
            <Button type='submit' className='w-full btn-org btn-lg'>Verify OTP</Button>
          </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Verify