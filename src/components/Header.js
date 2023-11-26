import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Search } from './'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cart = useSelector(state => state.cart.productsNumber)

  return (
    <header className='w-full bg-gradient-to-r from-shopeeclone-base_orange to-shopeeclone-light_orange mb-8 fixed top-0 left-0 z-30 '>
      <div className='w-[1300px] m-auto flex text-white h-[100px] items-center justify-between'>
        {/* logo */}
        <Link to={`/`}>
          <div className='flex cursor-pointer items-center -ml-2'>
            <img src='../images/logo.png' alt='' className='w-[60px] h-[60px]' />
            <span className='text-[29px] mt-4'>ShopWeb</span>
          </div>
        </Link>
        {/* search */}
        <div className='flex cursor-pointer mt-[6px] '>
          <Search />
        </div>
        {/* cart */}
        <Link to={`/checkout`}>
          <div className=' cursor-pointer '>
            <BsCart2 size={30} className='relative right-12 top-1' />
            <div className='relative'>
              <div className='absolute -top-[29px] bg-white text-shopeeclone-light_orange w-8 h-[21px] text-[15px] flex items-center justify-center -left-7 rounded-2xl border-2 border-shopeeclone-orange'>
                {cart}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
