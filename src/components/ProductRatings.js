import React from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs'

const ProductRatings = (props) => {
  const starNumber = props.avgRating
  const ratingNumber = props.ratings
  // console.log(props.avgRating)
  return (
    <div className='flex'>
      {Array.from( {length: starNumber}, (_, i) => <BsStarFill key={i} className=' fill-[#EE4D2D] h-[20px]'/> )}
      {Array.from( {length: 5 - starNumber}, (_, i) => <BsStar key={i} className=' fill-[#EE4D2D] h-[20px]'/> )}
      <span className='text-base text-[#222] mr-[5px] ml-[10px] pb-[1px]'>{ratingNumber} <span className='px-1 mr-[5px] text-[#767676] text-sm mt-2'> Đánh giá</span> </span>
    </div>
  )
}

export default ProductRatings