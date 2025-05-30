import React, { useState } from 'react'
import OtpBox from '../../components/OtpBox/OtpBox'

const Verify = () => {

  const [otp, setOtp] = useState('');
  const handleOtpChange = (value) =>{
    setOtp(value);
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md m-auto rounded-md bg-white p-4 w-[500px] px-10">
          <div className="text-center items-center flex justify-center">
            <img src="verify.png" alt="" className='' width={80} />
          </div>
          <h3 className="text-center">Verify OTP</h3>

          <OtpBox length={6} onChange={handleOtpChange} />

        </div>
      </div>
    </section>
  )
}

export default Verify