import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = (props) => {
  const { allCards } = props
  // const array = []
  // console.log(allCards)
  return (
    <section className='grid grid-cols-6 gap-4 mt-3 '>
      {Object.values(allCards).map((card) => {
        // console.log(card)

        return (
          <section
            key={card.id}
            className='border bg-white hover:-translate-y-[2px] hover:shadow-xl cursor-pointer'
          >
            <Link to={`/product/${card.id}`}>
              <img src={card.image} alt='' className='bg-contain bg-center h-[183px]' />
            </Link>
            <div className='h-[90px] m-2 leading-5'>
              <div className='font-normal text-[15px] h-[50px]'>{`${card.title.slice(
                0,
                40
              )}...`}</div>
              <div className='text-shopeeclone-orange mt-8 text-[17px]'>
                {`${new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(card.price)}`}
              </div>
            </div>
            {card.badge ? (
              <img
                src={card.badge}
                alt=''
                className='w-[46px] h-[18px] z-30 relative -top-[282px] -left-[3px]'
              />
            ) : (
              ''
            )}
          </section>
        )
      })}
    </section>
  )
}

export default CardProduct
