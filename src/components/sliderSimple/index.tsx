// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs, Zoom } from 'swiper'
import { useState, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './SliderSimple.scss'

interface Props {
  imageArr: string[]
  ContainerClassName: string
  SlideClassName: string
  spaceBetween: number
}

export default function SliderSimple({
  imageArr = [],
  ContainerClassName = '',
  SlideClassName = '',
  spaceBetween = 0,
}: Props) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  const [loading, setLoading] = useState(true)

  const onSlideLoad = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(1)
      setLoading(true)
    }
  }, [imageArr, swiper])

  return (
    <div className="sliderSimple">
      <Swiper
        modules={[Navigation, Thumbs, Zoom]}
        tag="div"
        wrapperTag="ul"
        className={ContainerClassName}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
        navigation
        loop={true}
      >
        {imageArr.map((slide, id) => (
          <SwiperSlide
            className={`${SlideClassName} ${loading ? 'loading' : ''}`}
            tag="li"
            key={id}
          >
            <img onLoad={() => onSlideLoad()} src={slide} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
