import React from 'react'
import './SafeBlock.scss'
import image from './safe.png'

export default function SafeBlock() {
    return (
        <section className="safe">
            <div className="safe__container">
                <div className='safe__text'>
                    <h2>Безопасная Гавань</h2>
                    <p>Собственный закрытый двор дома Гавань занимает пространство внутри квартала.</p>
                    <p>Здесь есть место для активных занятий, например, вы можете поиграть в бадминтон или позаниматься на тренажерах. А можете спокойно посидеть в удобном шезлонге или уединиться в беседке.</p>
                    <p>Во дворе есть занятия для малышей и для детей постарше: игровой комплекс, качели, балансиры, площадки с разными покрытиями – песок, галька и обычная травка.</p>
                </div>
                <div className='safe__img'>
                    <img src={image} alt="house" />
                </div>
            </div>
        </section>
    )
}
