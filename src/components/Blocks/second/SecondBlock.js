import React from 'react'
import './secondBlock.scss'
import image from './second.jpg'

export default function SecondBlock() {
    return (
        <section className="second">
            <div className="second__container container">
                <div className='second__img'>
                    <img src={image} alt="house" />
                </div>
                <div className='second__text'>
                    <h2 className="subtitle">Уютная Гавань</h2>
                    <p className="text">Дом Гавань уникален своей камерностью. Всего 1 подъезд и 6 этажей.</p>
                    <p className="text">Это дом для немногих. Для тех, кто ценит свое личное пространство и делает свою жизнь максимально комфортной, отдавая приоритет своим собственным, личным интересам.</p>
                    <a href="#plans"><button className="button">ПОДОБРАТЬ КВАРТИРУ</button></a>
                </div>
            </div>
        </section>
    )
}
