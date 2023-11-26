import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import { callAPI } from '../utils/callApis'

const CarouselProduct = () => {
  const [product, setProduct] = useState([])

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      // console.log(productResults)
      setProduct(productResults.data)
    })
    callAPI(`data/products.json`).catch((err) => console.log('Loading product'))
  }

  useEffect(() => {
    getProduct()
  }, [])

  // if (!product?.title) return <h1>Loading product ...</h1>

  return (
    product && (
      <section className=''>
        <div className='mt-10 bg-white w-[1300px] h-[60px] m-auto pl-4 mb-1 relative'>
          <span className='text-lg uppercase flex items-center h-full justify-center text-shopeeclone-orange font-normal '>
            Gợi ý hôm nay
          </span>
          <div className='absolute left-0 bottom-0 w-[100%] h-1 bg-shopeeclone-orange'></div>
        </div>
        <div className=' w-[1190px] m-auto mb-[100px]'>
          <CardProduct allCards={product}/>
        </div>
      </section>
    )
  )
}

export default CarouselProduct
