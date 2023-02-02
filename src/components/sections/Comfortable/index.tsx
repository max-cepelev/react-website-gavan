import React from 'react'
import './ComfortableBlock.scss'
import image from './comfortable.jpg'

export default function Comfortable() {
  return (
    <section className="comfortable">
      <div className="comfortable__container container">
        <div className="comfortable__img">
          <img src={image} alt="house" />
        </div>
        <div className="comfortable__text">
          <h2 className="subtitle">Удобная Гавань</h2>
          <p className="text">
            Не волнуйтесь, что придется искать свободное место для машины. В
            Гавани есть подземный паркинг на 21 автомобиль, а также открытая
            парковка со стороны улицы 2-я Теплогорская.
          </p>
          <a href="#plans">
            <button className="button">ПОДОБРАТЬ КВАРТИРУ</button>
          </a>
        </div>
      </div>
    </section>
  )
}
