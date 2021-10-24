import React from 'react'
import { useState, useEffect } from 'react'
import './TabsSliderBlock.scss'
import {getData} from '../../../services/ServiceFunctions'
import descriptions from './descriptions'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Zoom} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Zoom]);

export default function TabsSliderBlock() {

    const [activeSlide, setActiveSlide] = useState(0)

    const [activeTab, setActiveTab] = useState(0)

    const [images, setImages] = useState(null)

    const  [swiper, setSwiper]  =  useState(undefined);

    const [loading, setLoading] = useState(true)

    const [width, setWidth] = useState(document.body.offsetWidth)


    const imagesArr = width > 767 ? images && images[activeTab].images : images && images[5].images

    const onSlideLoad = () => {
        setTimeout(()=> {
            setLoading(false)
        }, 500)
    }

    const hadleClick = (button) => {
        setTimeout(() => {
            setActiveTab(button)
        }, 200)  
    }

    const mobileSlideChange = (index) => {
        setLoading(true)
        setTimeout(() => {
            setActiveTab(index)
            setLoading(false)
        }, 300)
    }

    useEffect(()=> {
        getData('imagesData.json')
        .then(res => {
            setImages(res)
        })
        .catch(e => {
            alert(e)
        })
    },[])

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(1)
            setLoading(true)
        }
    }, [imagesArr, swiper])

    useEffect(() => {
        setWidth(document.body.offsetWidth)
    }, [width])

    const aboutHome = (props) => {
        return (
            <div className='tabsSlider__info'>
                <div className='tabsSlider__info-wrapper'></div>
                <div className="tabsSlider__info-content container">
                    <h2 className="title">{props.title}</h2>
                    <ul className='tabsSlider__info-list'>
                        {props.list.map(item => (
                            <li key={item.id} className='tabsSlider__info-item'>
                                <img className='tabsSlider__info-img' src={item.icon} alt={item.alt} />
                                <p className='text'>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <section className='tabsSlider' id="about">
            <div className='tabsSlider__header'>
                <div className='tabsSlider__border'></div>
                <button onClick={() => hadleClick(0)} className={`tabsSlider__button ${activeTab === 0 && 'active'}`}>О доме</button>
                <button onClick={() => hadleClick(1)} className={`tabsSlider__button ${activeTab === 1 && 'active'}`}>Во дворе</button>
                <button onClick={() => hadleClick(2)} className={`tabsSlider__button ${activeTab === 2 && 'active'}`}>В подъезде</button>
                <button onClick={() => hadleClick(3)} className={`tabsSlider__button ${activeTab === 3 && 'active'}`}>В квартире</button>
                <div className='tabsSlider__border'></div>
            </div>
            {images &&
                <>
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    containerModifierClass="tabsSlider__"
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(swiper) => width > 767 ? setActiveSlide(swiper.activeIndex) : mobileSlideChange(swiper.activeIndex)}
                    onSwiper={setSwiper}
                    navigation
                    loop={width > 767 ? true : false}>
                    {imagesArr.map((slide, id) => 
                        <SwiperSlide className={`tabsSlider__slide ${loading ? 'loading' : ''}`} tag="li" key={id}>
                            {activeSlide === 1 || width < 768 ? aboutHome(descriptions[activeTab]) : null}
                            <img className='tabsSlider__slide-img' onLoad={() => onSlideLoad()} src={slide} alt="slide"/>
                        </SwiperSlide>
                    )}
                </Swiper>
                </>
            }
        </section>
    )
}
