import React from 'react'
import './SafeBlock.scss'
import image from './safe.jpg'

export default function SafeBlock() {
    return (
        <section className="safe">
            <div className="safe__container container">
                <div className='safe__text'>
                    <h2 className="subtitle">Безопасная Гавань</h2>
                    <p className="text">Собственный закрытый двор дома Гавань занимает пространство внутри квартала.</p>
                    <p className="text">Здесь есть место для активных занятий, например, вы можете поиграть в бадминтон или позаниматься на тренажерах. А можете спокойно посидеть в удобном шезлонге или уединиться в беседке.</p>
                    <p className="text">Во дворе есть занятия для малышей и для детей постарше: игровой комплекс, качели, балансиры, площадки с разными покрытиями – песок, галька и обычная травка.</p>
                </div>
                <div className='safe__img'>
                    <img src={image} alt="house" />
                </div>
            </div>
        </section>
    )
}
