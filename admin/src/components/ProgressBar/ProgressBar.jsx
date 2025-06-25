import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className='w-[100px] h-auto overflow-hidden rounded-sm bg-gray-200'>
      <span className={`flex items-center w-[${props.value}%] h-[10px] ${props.type === 'success' && 'bg-green-600'} ${props.type === 'error' && 'bg-blue-500'} ${props.type === 'warning' && 'bg-yellow-500'}`}></span>
    </div>
  )
}

export default ProgressBar