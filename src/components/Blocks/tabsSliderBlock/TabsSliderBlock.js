import React from 'react'
import SliderSimple from '../../sliderSimple/SliderSimple'
import { useState } from 'react'
import './TabsSliderBlock.scss'

import imagesData from '../../../imagesData.json'

export default function TabsSliderBlock() {

    const [activeTab, setActiveTabe] = useState(0)

    return (
        <section className='tabsSlider'>
            <div className='tabsSlider__header'>
                <div className='tabsSlider__border'></div>
                <button onClick={() => setActiveTabe(0)} className={`tabsSlider__button ${activeTab === 0 && 'active'}`}>О доме</button>
                <button onClick={() => setActiveTabe(1)} className={`tabsSlider__button ${activeTab === 1 && 'active'}`}>Во дворе</button>
                <button onClick={() => setActiveTabe(2)} className={`tabsSlider__button ${activeTab === 2 && 'active'}`}>В подъезде</button>
                <button onClick={() => setActiveTabe(3)} className={`tabsSlider__button ${activeTab === 3 && 'active'}`}>В квартире</button>
                <div className='tabsSlider__border'></div>
            </div>
            <SliderSimple imageArr={imagesData[activeTab].images} />
        </section>
    )
}
