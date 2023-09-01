import { useState } from "react"

const RatingNum = ({ num, rating }) => {


  return (
    <>
        <div className=" h-12 w-12 rounded-full flex justify-center items-center text-white font-bold hover:bg-orange-500  hover:text-white ">
          <div className=" ">{num}</div>
        </div>

    </>
  )
}
export default RatingNum
