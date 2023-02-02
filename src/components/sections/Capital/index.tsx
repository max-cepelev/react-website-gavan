import React from 'react'
import './capitalBlock.scss'
import image from './capital.jpg'

export default function Capital() {
  return (
    <section className="capital">
      <div className="capital__container container">
        <div className="capital__text">
          <h2 className="subtitle">Столичная Гавань</h2>
          <ul className="text">
            <li>Отдых и спорт в Бассейне Олимпия</li>
            <li>Приятный шоппинг в ТРК Столица</li>
            <li>Кино в любое время в кинотеатре Киномакс</li>
            <li>Занятия по интересам во Дворце культуры им. Гагарина</li>
            <li>Вкусные завтраки в кафе и ресторанах</li>
            <li>Прогулки в сквере имени Миндовского и Балатовском парке</li>
            <li>
              Бизнес-встречи в конференц-залах Four Elements или Артик-холле
            </li>
          </ul>
        </div>
        <div className="capital__img">
          <img src={image} alt="house" />
        </div>
        <div className="capital__block">
          <div>
            <p>
              Одним словом, Вы в центре Балатово, а значит, на расстоянии
              вытянутой руки все, за что мы любим город.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
