import React, {useState, useEffect} from 'react'
import SliderSimple from '../../sliderSimple/SliderSimple'
import './DecorationBlock.scss'
import {getData} from '../../../services/ServiceFunctions'

export default function DecorationBlock() {

    const [images, setImages] = useState(null)

    useEffect(()=> {
        getData('imagesData.json')
        .then(res => {
            setImages(res)
        })
        .catch(e => {
            alert(e)
        })
    },[])

    return (
        <section className="decoration">
            <div className="decoration__container">
                <h2 className="title decoration__title">Отделка</h2>
                <div className='decoration__text'>
                    <p className="text">В этих квартирах все готово к предстоящему ремонту: стены выровнены и оштукатурены, выполнена стяжка пола, система отопления смонтирована, установлены радиаторы, подведены стояки коммуникаций (холодная и горячая вода, канализация), установлены входные металлические двери.</p>
                </div>
                <div className='decoration__slider'>
                    {images && <SliderSimple imageArr={images[4].images} ContainerClassName='decoration-slider' SlideClassName="decoration-slide" spaceBetween={1}/>}
                </div>
            </div>
        </section>
    )
}
