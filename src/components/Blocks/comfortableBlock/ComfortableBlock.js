import React from 'react'
import './ComfortableBlock.scss'
import image from './comfortable.png'

export default function ComfortableBlock() {
    return (
        <section className="comfortable">
            <div className="comfortable__container">
                <div className='comfortable__img'>
                    <img src={image} alt="house" />
                </div>
                <div className='comfortable__text'>
                    <h2>Удобная Гавань</h2>
                    <p>Не волнуйтесь, что придется искать свободное место для машины. В Гавани есть подземный паркинг на 21 автомобиль, а также открытая парковка со стороны улицы 2-я Теплогорская.</p>
                    <button>ПОДОБРАТЬ КВАРТИРУ</button>
                </div>
            </div>
        </section>
    )
}
