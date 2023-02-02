import React from 'react'
import './Contacts.scss'
import { Map, Placemark } from 'react-yandex-maps'

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <h2 className="title">Контакты</h2>
        <div className="contacts__wrapper">
          <div className="contacts__text">
            <div>
              <h3 className="subtitle">Офис продаж</h3>
              <p className="contacts__row text">Пермь, ул. Карпинского, 49а</p>
            </div>
            <div className="contacts__text-time">
              <p className="contacts__row text">
                <span>Время работы:</span>
              </p>
              <p className="contacts__row text">пн-чт: с 9.00 до 19.00</p>
              <p className="contacts__row text">пт: с 9.00 до 18.00</p>
              <p className="contacts__row text">сб: с 10.00 до 14.00</p>
            </div>
            <div>
              <p className="contacts__row text">
                <span>Отдел продаж</span>
              </p>
              <a className="contacts__row text" href="tel:+73422338270">
                +7 (342) 233-82-70
              </a>
            </div>
          </div>
          <div className="contacts__map">
            <Map
              style={{ width: '100%', height: '100%' }}
              defaultState={{ center: [57.978524, 56.202296], zoom: 14 }}
            >
              <Placemark
                options={{ iconContent: 'Щелкни по мне правой кнопкой мыши!' }}
                className="contacts__placemark"
                geometry={[57.982394, 56.217783]}
              />
              <Placemark
                options={{ iconContent: 'Щелкни по мне правой кнопкой мыши!' }}
                className="contacts__placemark"
                geometry={[57.974486, 56.187591]}
              />
            </Map>
          </div>
        </div>
      </div>
    </section>
  )
}
