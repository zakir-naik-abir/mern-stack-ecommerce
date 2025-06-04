import React from 'react'

const Badge = (props) => {
  return (
    <span className={` items-center justify-center p-1 px-2 inline-block capitalize text-sm rounded-full ${props.status === "pending" && 'bg-primary text-white'} ${props.status === "confirm" && 'bg-green-500 text-white'} ${props.status === "delivered" && 'bg-green-700 text-white'}`}>
      {props.status}
    </span>
  )
}

export default Badge