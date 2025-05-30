import React, { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onchange(newOtp.join(""));

    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) =>{
    if(event.key === 'Backspace' && !otp[index] && index > 0){
      document.getElementById(`otp-input-
        ${index - 1}`).focus();
    }
  };

  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "center" }}
      className="otpBox"
    >
      {otp.map((data, index) => (
        <input className="w-11 h-11 text-center text-base"
          key={index}
          id={`otp-input${index}`}
          type="text"
          maxLength={"1"}
          value={otp[index]}
          onchange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          
        />
      ))}
    </div>
  );
};

export default OtpBox;
