import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Carousel = () => {
  return (
    <div className=' '>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className=''
      >
        <SwiperSlide>
          <img src={'../images/slider_1.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_2.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_3.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_4.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_5.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_6.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_7.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/slider_8.png'} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
