import { Button } from '@mui/material'
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className='py-2'>
      <div className="container flex items-center justify-end">
        <div className="col_1 w-[20%]">
          <Button className='gap-3 !text-black w-full'><RiMenu2Fill className='text-[18px]'/> 
          Shop buy categories<LiaAngleDownSolid className='text-[13px] ml-auto font-bold'/></Button>
        </div>
        <div className="col_1 w-[80%]">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Home</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Fashion</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Electronics</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Bags</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Footwear</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Groceries</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Beauty</Link>
            </li><li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Wellness</Link>
            </li>
            <li className="list-none">
              <Link to={'/'} className='link transform text14 font-[500]'>Jewellery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation