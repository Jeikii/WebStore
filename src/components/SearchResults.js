import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { callAPI } from '../utils/callApis'
import { ProductRatings } from './'
import { VN_CURRENCY } from '../utils/constants'

const SearchResults = () => {
  let ratings = true
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState(null)
  // console.log(products)

  const getSearchResults = () => {
    const searchTerm = searchParams.get('searchTerm')
    const category = searchParams.get('category')
    // console.log(searchTerm)
    // console.log(category)
    callAPI(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults.data[category]
      // console.log(categoryResults)
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setProducts(results)
      } else {
        setProducts(categoryResults)
      }
    })
  }

  useEffect(() => {
    getSearchResults()
  }, [searchParams])

  return (
    <div className='w-[1300px] h-[580px] m-auto pt-4'>
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className='h-[600px] grid grid-cols-12 text-black text-base pt-[150px] mt-1 mb-10 '>
                <div className='col-span-3 p-4 bg-gray-200'>
                  <img src={product.image} alt='' className='m-auto' />
                </div>
                <div className='col-span-9 bg-gray-50 border border-gray-100 hover:bg-gray-100'>
                  <div className='font-medium text-black p-2'>
                    <div className='mb-1 py-[15px] pl-[20px] pr-[24px] w-[830px]'>
                      {product.badge ? (
                        <div className='mb-2'>
                          <div className='relative mr-2 rounded-[3px] bg-shopeeclone-search_btn text-white inline-block align-middle text-sm font-normal px-0.5 '>
                            Yêu Thích
                          </div>
                          <span className='text-xl xl:text-2xl mb-1 align-sub'>
                            {product.title}
                          </span>
                        </div>
                      ) : (
                        <div className='text-xl xl:text-2xl mb-1'>{product.title}</div>
                      )}
                      {ratings && (
                        <div className='text-sm xl:text-base mb-6 mt-3'>
                          <ProductRatings
                            avgRating={product.avgRating}
                            ratings={product.ratings}
                          />
                        </div>
                      )}
                      <section className='flex mb-5'>
                        <div className='text-[17px] capitalize w-[110px] text-[#75758B] ml-4 font-normal mr-5 shrink-0'>
                          tên shop
                        </div>
                        <div className='text-[15px] xl:text-[17px] px-2 ml-4 bg-[#FFEEE8] text-shopeeclone-search_btn rounded-sm cursor-pointer'>
                          {product.brand}
                        </div>
                      </section>
                      <div className='bg-[#FAFAFA] h-[66px] flex items-center py-[15px] px-5 mb-4'>
                        <span className='text-[#929292] mr-[10px] line-through'>
                          {VN_CURRENCY.format(product.oldPrice)}
                        </span>
                        <span className='text-shopeeclone-search_btn text-[32px] font-normal '>
                          {VN_CURRENCY.format(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default SearchResults
