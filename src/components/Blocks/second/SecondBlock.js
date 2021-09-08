import React from 'react'
import './secondBlock.scss'
import image from './second.png'

export default function SecondBlock() {
    return (
        <section className="second">
            <div className="second__container">
                <div className='second__img'>
                    <img src={image} alt="house" />
                </div>
                <div className='second__text'>
                    <h2>Уютная Гавань</h2>
                    <p>Дом Гавань уникален своей камерностью. Всего 1 подъезд и 6 этажей.</p>
                    <p>Это дом для немногих. Для тех, кто ценит свое личное пространство и делает свою жизнь максимально комфортной, отдавая приоритет своим собственным, личным интересам.</p>
                    <button>ПОДОБРАТЬ КВАРТИРУ</button>
                </div>
            </div>
        </section>
    )
}
