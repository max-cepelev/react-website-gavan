
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Zoom} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './SliderSimple.scss'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Zoom]);

export default function SliderSimple({imageArr = [], onClickSlide}) {

    return (
        <>
        <div className="sliderSimple">
            <Swiper
                tag="div"
                wrapperTag="ul"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                loop={true}
                onClick={onClickSlide}>
                {imageArr.map((slide, id) => 
                    <SwiperSlide tag="li" key={id}><img src={slide} alt="slide"/></SwiperSlide>
                )}
            </Swiper>
        </div>
        </>
    );
};