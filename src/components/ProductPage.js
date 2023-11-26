import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { callAPI } from '../utils/callApis'
import { ProductRatings } from './'
import { VN_CURRENCY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { BsCartPlus } from 'react-icons/bs'
import { addToCart } from '../redux/cartSlice'

const ProductPage = () => {
  let ratings = true
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState('1')
  const dispatch = useDispatch()

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      // console.log(productResults.data[id])
      setProduct(productResults.data[id])
    })
    callAPI(`data/products.json`).catch((err) => console.log('Loading product'))
  }

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity))
    return product
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <section className='bg-shopeeclone-background h-screen pt-[150px]'>
      <section className='w-[1300px] h-[580px] m-auto bg-white rounded-[5px] shadow-sm flex'>
        <img
          src={product.image}
          alt=''
          className='h-[450px] w-[450px] p-[20px] cursor-pointer'
        />
        <div className='mb-1 py-[15px] pl-[20px] pr-[24px] w-[720px]'>
          {product.badge ? (
            <div className='mb-2'>
              <div className='relative mr-2 rounded-[3px] bg-shopeeclone-search_btn text-white inline-block align-middle text-sm font-normal px-0.5 '>
                Yêu Thích
              </div>
              <span className='text-xl xl:text-2xl mb-1 align-sub'>{product.title}</span>
            </div>
          ) : (
            <div className='text-xl xl:text-2xl mb-1'>{product.title}</div>
          )}
          {ratings && (
            <div className='text-sm xl:text-base mb-3 mt-3'>
              <ProductRatings avgRating={product.avgRating} ratings={product.ratings} />
            </div>
          )}
          <div className='bg-[#FAFAFA] h-[66px] flex items-center py-[15px] px-5 mb-4'>
            <span className='text-[#929292] mr-[10px] line-through'>
              {VN_CURRENCY.format(product.oldPrice)}
            </span>
            <span className='text-shopeeclone-search_btn text-[32px] font-normal '>
              {VN_CURRENCY.format(product.price)}
            </span>
          </div>
          <section className='flex mb-5'>
            <div className='text-[15px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-5 shrink-0'>
              tên shop
            </div>
            <div className='text-sm xl:text-base px-2 ml-4 bg-[#FFEEE8] text-shopeeclone-search_btn rounded-sm cursor-pointer'>
              {product.brand}
            </div>
          </section>
          <section className='flex mb-4'>
            <div className='text-[15px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-5 shrink-0'>
              vận chuyển
            </div>
            <div className='text-sm xl:text-base capitalize px-4 pb-[2px] text-black'>
              miễn phí vận chuyển
            </div>
          </section>
          <section className='flex mb-4 '>
            <div className='text-[15px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-9 mt-2 shrink-0'>
              số lượng
            </div>
            <div className='flex items-center cursor-pointer'>
              <select
                onChange={(e) => setQuantity(e.target.value)}
                className='bg-white p-2 border rounded-md focus:border-indigo-700'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </section>
          <section className='flex mb-7 '>
            <div className='text-[15px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-9 mt-[1px] shrink-0'>
              mô tả
            </div>
            <div className=''>{product.description}</div>
          </section>
          <Link to={'/checkout'}>
            <button
              onClick={() => dispatch(addToCart(addQuantityToProduct()))}
              className='bg-[#ffeee8] cursor-pointer text-shopeeclone-text border border-shopeeclone-text hover:bg-[#FFF5F1] w-[200px] h-[48px] text-[15px] rounded-sm capitalize flex items-center justify-center px-4 ml-4'
            >
              <BsCartPlus size={20} className='mr-2' />
              <span>thêm vào giỏ hàng</span>
            </button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default ProductPage
