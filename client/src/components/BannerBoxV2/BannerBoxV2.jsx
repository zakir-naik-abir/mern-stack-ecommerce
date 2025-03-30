import React from 'react'
import '../BannerBoxV2/style.css'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
      <img src={props.img} alt="banner"  className='w-full transition-all duration-150 group-hover:scale-105'/>
      <div className={`info absolute top-0 p-5 w-[50%] h-[100% z-50]  ${props.info==='left' ? 'left-0': 'right-0'} ${props.info==='left' ? 'pr-1': 'pl-1'} flex flex-col justify-center items-center gap-2`}>
        <h2 className='text-base font-semibold'>Samsung Gear VR Camera</h2>
        <span className='text-2xl font-semibold text-primary w-full'>$149.00</span>
        <div className="w-full">
        <Link to={'/'} className='text-base font-semibold link'>SHOP NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2