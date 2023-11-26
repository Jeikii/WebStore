import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductDetails } from './'
import { VN_CURRENCY } from '../utils/constants'
import { removeFromCart, incrementInCart, decrementInCart } from '../redux/cartSlice'

const Checkout = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const itemsNumber = useSelector((state) => state.cart.productsNumber)
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  )

  return (
    <div className='pt-[150px] h-screen bg-shopeeclone-background'>
      <div className=' w-[1300px] m-auto grid grid-cols-8 gap-10'>
        {/* Products */}
        <div className='col-span-6 bg-white'>
          <div className='uppercase text-shopeeclone-orange text-2xl xl:text-3xl m-4'>
            giỏ hàng
          </div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className='grid grid-cols-12 divide-y divide-gray-400 mr-4'>
                  <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-400'>
                    <div className='col-span-2'>
                      <Link to={`/product/${product.id}`}>
                        <img className='m-auto p-4' src={product.image} alt='' />
                      </Link>
                    </div>
                    <div className='col-span-6 '>
                      <div className='font-medium text-black mt-2'>
                        <Link to={`/product/${product.id}`}>
                          <ProductDetails product={product} />
                        </Link>
                      </div>
                      <div className=''>
                        <button
                          className='text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1'
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          Delete
                        </button>
                      </div>
                      <div className='grid grid-cols-3 w-20 text-center'>
                        <div
                          onClick={() => dispatch(decrementInCart(product.id))}
                          className='text-lg xl:text-xl bg-gray-300 rounded cursor-pointer'
                        >
                          {' '}
                          -{' '}
                        </div>
                        <div className='text-xl xl:text-xl bg-gray-200'>
                          {product.quantity}
                        </div>
                        <div
                          onClick={() => dispatch(incrementInCart(product.id))}
                          className='text-lg xl:text-xl bg-gray-300 rounded cursor-pointer'
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-2 pt-[150px]'>
                    <div className='text-shopeeclone-search_btn text-lg xl:text-2xl font-medium mb-2'>
                      {VN_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='text-base xl:text-lg text-right mb-4 mr-4 mt-8'>
            Tổng ({itemsNumber} sản phẩm):{' '}
            <span className='font-semibold'>{VN_CURRENCY.format(subtotal)}</span>
          </div>
        </div>
        {/* Checkout */}
        <div className='col-span-2 bg-white rounded h-[250px] p-7'>
          <div className='text-sm xl:text-base text-green-700'>
            Đơn hàng của bạn đủ điều kiện để được{' '}
            <span className='font-bold'>GIAO HÀNG MIỄN PHÍ</span>
          </div>
          <div className='text-base xl:text-lg mb-4 mt-2'>
            Tổng ({itemsNumber} sản phẩm):{' '}
            <span className='font-semibold'>{VN_CURRENCY.format(subtotal)}</span>
          </div>
          <button className='bg-shopeeclone-base_orange cursor-pointer text-white border border-shopeeclone-text hover:bg-shopeeclone-orange w-full h-[48px] text-[15px] rounded-sm capitalize flex items-center justify-center px-4'>
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
