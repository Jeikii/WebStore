import React from 'react'

const CarouselCategory = () => {
  return (
    <section className='bg-white flex items-center justify-center m-auto pt-6 '>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-[1px] cursor-pointer'>
        <img
          src={'../images/category_1.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>Khung Giờ Săn Sale</span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_2.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Miễn Phí Ship - Có Shopee
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_3.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Voucher Giảm Đến 500.000Đ
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_4.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Hàng Hiệu Outlet Giảm 50%
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_5.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>Mã Giảm Giá</span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_6.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Gì Cũng Rẻ - Deal Sốc 9.000Đ
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_7.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Nạp Thẻ, Dịch Vụ & Data
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_8.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>
          Trúng Voucher 1.000.000Đ
        </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_9.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>Hàng Quốc Tế </span>
      </div>
      <div className='w-[100px] h-[108px] flex flex-col items-center mr-3 ml-3 tracking-tight hover:relative hover:-top-1 cursor-pointer'>
        <img
          src={'../images/category_10.png'}
          alt=''
          className='w-[45px] h-[45px] object-contain'
        />
        <span className='text-sm mt-1 text-center leading-1'>Bắt Trend - Giá Sốc</span>
      </div>
    </section>
  )
}

export default CarouselCategory
