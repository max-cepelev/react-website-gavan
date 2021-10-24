
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Zoom} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './slider.scss'
import { useState } from 'react';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Zoom]);

export default function Slider({imageArr = [], modClassName=''}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
        <Swiper
            tag="div"
            wrapperTag="ul"
            containerModifierClass={modClassName}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            navigation
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
        >
            {imageArr.map((slide, id) => 
                <SwiperSlide tag="li" key={id}><img src={slide} alt="slide"/></SwiperSlide>
            )}
        </Swiper>
        {imageArr.length >= 1 ? 
            <Swiper
                tag="div"
                wrapperTag="ul"
                spaceBetween={15}
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                containerModifierClass={`${modClassName}thumb__`}
                slidesPerView={3}
                >
                {imageArr.map((slide, id) => 
                    <SwiperSlide
                        tag="li"
                        key={id}>
                        <img src={slide} alt="slide" className="thumb-slide"/>
                    </SwiperSlide>
                )}
            </Swiper> : null
        }
        </>
    );
};