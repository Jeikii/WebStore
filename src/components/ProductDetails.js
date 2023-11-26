// import { VN_CURRENCY } from '../utils/constants'

const ProductDetails = ({ product }) => {
  return (
    <div className='mb-1 pr-[24px] w-[660px]'>
      {product.badge ? (
        <div className='mb-5'>
          <div className='relative mr-2 rounded-[3px] bg-shopeeclone-search_btn text-white inline-block align-middle text-sm font-normal px-0.5 '>
            Yêu Thích
          </div>
          <span className='text-lg xl:text-xl mb-1 align-sub'>{product.title}</span>
        </div>
      ) : (
        <div className='text-lg xl:text-xl mb-1'>{product.title}</div>
      )}
      <section className='flex mb-5'>
        {/* <div className='text-[15px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-5 shrink-0'>
          tên shop
        </div> */}
        <div className='text-sm xl:text-base px-2 bg-[#FFEEE8] text-shopeeclone-search_btn rounded-sm cursor-pointer'>
          {product.brand}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
