import { Carousel, Banner, HomePageCard, CarouselCategory, CarouselProduct} from './'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ccc', borderRadius: '100%' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ccc', borderRadius: '100%' }}
      onClick={onClick}
    />
  )
}

const HomePage = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className='bg-shopeeclone-background h-full mt-[130px]'>
      <div className='flex justify-center m-auto bg-white gap-1 h-[240px]'>
        <div className='w-[800px] cursor-pointer'>
          <Carousel />
        </div>
        <div className='w-[400px] cursor-pointer'>
          <Banner />
        </div>
      </div>
      <CarouselCategory />
      <div className='uppercase mt-10 bg-white w-[1300px] h-[61px] flex items-center m-auto text-shopeeclone-orange font-normal text-lg pl-4 mb-1'>
        Tìm Kiếm Hàng Đầu
      </div>

      <div className='w-[1300px] m-auto cursor-pointer'>
        <Slider {...settings}>
          <HomePageCard
            title={'Dép Nam Quai Ngang'}
            img={'../images/slidercard_1.jfif'}
          />
          <HomePageCard title={'Ly Giữ Nhiệt'} img={'../images/slidercard_2.jfif'} />
          <HomePageCard
            title={'Kính Cường Lực KingKong'}
            img={'../images/slidercard_3.jfif'}
          />
          <HomePageCard title={'Mũ bảo Hiểm 3/4'} img={'../images/slidercard_4.jfif'} />
          <HomePageCard
            title={'Mũ Bảo Hiểm Nửa Đầu'}
            img={'../images/slidercard_5.jfif'}
          />
          <HomePageCard
            title={'Áo Thun LocalBrand'}
            img={'../images/slidercard_6.jfif'}
          />
          <HomePageCard
            title={'Hộp Vải Đựng Đồ Đa Năng'}
            img={'../images/slidercard_7.jfif'}
          />
          <HomePageCard
            title={'Găng Tay Chơi Game'}
            img={'../images/slidercard_8.jfif'}
          />
          <HomePageCard title={'Áo Sơmi Caro'} img={'../images/slidercard_9.jfif'} />
          <HomePageCard title={'Móc Khóa'} img={'../images/slidercard_10.jfif'} />
          <HomePageCard title={'Son Kem Lì'} img={'../images/slidercard_11.jfif'} />
        </Slider>
      </div>
      <CarouselProduct />
    </div>
  )
}

export default HomePage
