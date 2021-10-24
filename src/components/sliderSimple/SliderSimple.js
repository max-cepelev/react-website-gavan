
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Zoom} from 'swiper';
import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './SliderSimple.scss'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Zoom]);

export default function SliderSimple({imageArr = [], ContainerClassName = '', SlideClassName = '', spaceBetween=0}) {

    const  [swiper, setSwiper]  =  useState(undefined);

    const [loading, setLoading] = useState(true)

    const onSlideLoad = () => {
        setTimeout(()=> {
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
        <>
            <div className="sliderSimple">
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    className={ContainerClassName}
                    spaceBetween={spaceBetween}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={setSwiper}
                    navigation
                    loop={true}>
                    {imageArr.map((slide, id) => 
                        <SwiperSlide className={`${SlideClassName} ${loading ? 'loading' : ''}`} tag="li" key={id}><img onLoad={() => onSlideLoad()} src={slide} alt="slide"/></SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    );
};