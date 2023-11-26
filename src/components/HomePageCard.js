import React from 'react'

const HomePageCard = ({ title, img }) => {
  return (
    <div className='h-[290px] bg-white pr-2 pl-2'>
      <div className='w-[180px] h-[180px] relative top-6'>
        <img src={img} alt='' className='w-[100%]  h-[100%] object-cover flex justify-center' />
        <img src={"../images/tag.png"} alt="" className='absolute top-0 left-0 w-[2rem]'/>
      </div>
      <div className='text-lg mt-10 ml-4 w-[180px]'>{title}</div>
    </div>
  )
}

export default HomePageCard
