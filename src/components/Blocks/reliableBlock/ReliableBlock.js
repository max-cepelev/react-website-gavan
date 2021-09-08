import React from 'react'
import './ReliableBlock.scss'
import image from './baby.png'

export default function ReliableBlock() {
    return (
        <section className="reliable">
            <div className="reliable__container">
                <div className='reliable__img'>
                    <img src={image} alt="reliable" />
                </div>
                <div className='reliable__text'>
                    <h2>Надежная Гавань</h2>
                    <ul>
                        <li>Более 10 муниципальных и частных детских садов</li>
                        <li>Лицей №4</li>
                        <li>Петролеум +, средняя общеобразовательная школа</li>
                        <li>Средняя общеобразовательная школа №3</li>
                        <li>Городские поликлиники и краевые больницы</li>
                        <li>Средняя  школа №132с  иучением предметов естественно-экологического профиля</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
