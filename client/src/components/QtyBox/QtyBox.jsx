import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {

  const [qtyVal, setQtyVal] = useState(1);
  
  const plusQty = () =>{
    setQtyVal(qtyVal + 1)
  }
  const minusQty = () =>{
    if(qtyVal === 1){
      setQtyVal(1)
    }else{
      setQtyVal(qtyVal - 1)
    }
  }

  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-11 text-sm border border-black p-2 focus:outline-none rounded-md pl-3"
        value={qtyVal}
      />
      <div className="flex items-center justify-between h-10 border-black flex-col absolute top-0 right-0 z-50 border-l">
        <Button onClick={plusQty} className="!min-w-8 !w-8 !min-h-5 !text-black !rounded-none">
          <FaAngleUp />
        </Button>
        <Button onClick={minusQty} className="!min-w-8 !w-8 !min-h-5 !text-black !rounded-none">
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
