import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-slate-200 rounded-[5px] relative p-2 items-center'>
      <input type="text" name="" id="" placeholder='Search for products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] bg-gray-200'/>
      <Button className='!absolute top-[8px] right-[5px] z-50 !min-w-[37px] !w-[37px] h-[35px] !rounded-full !text-black text-[22px]'><CiSearch className='text-[#221e1e]'/></Button>
    </div>
  )
}

export default Search;