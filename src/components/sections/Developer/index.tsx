import React, { useState } from 'react'
import './DeveloperBlock.scss'
import logo from './logo.png'
import objects from './objects.json'

interface IObjects {
  id: number
  name: string
  street: string
  image: string
}

export default function Developer() {
  const width = document.body.offsetWidth

  const [viewObjects, setViewObjects] = useState(4)

  const splicedObjects: IObjects[] =
    width < 767 ? objects : objects.slice(0, viewObjects)

  return (
    <section className="developer" id="developer">
      <div className="developer__container">
        <h2 className="title">Застройщик</h2>
        <div className="developer__about">
          <img src={logo} alt="logo" />
          <div className="developer__about-text">
            <p className="text">
              <span>Застройщик</span> — ООО «Специализированный застройщик
              «Омега-групп», входит в Группу компаний <span>«Альфа»</span>
            </p>
            <p className="text">
              ГК «Альфа» — современный пермский застройщик, более 12 лет
              возводит жилые дома в Перми. Среди наиболее известных — Большой на
              Малой, 2, Этто на Карпинского, 49а, Балатовский на Мира, 100,
              Академика на пр. Парковый, 50а, Клен на Левченко, 29, Янтарный на
              Гастелло, 10, комплекс жилых домов за ТРК «Столица»,а также дома
              на Левченко 11, 13, 31 и др.
            </p>
          </div>
        </div>
        <div className="developer__objects">
          <h3 className="developer__objects-title subtitle">Наши объекты</h3>
          <div className="developer__objects-wrapper">
            {splicedObjects.map((item) => (
              <div key={item.id} className="developer__objects-item">
                <div className="developer__objects-img">
                  <img src={item.image} alt={`фото для ${item.name}`} />
                </div>
                <p className="developer__objects-text text">
                  <span>{item.name}</span>
                </p>
                <p className="developer__objects-text text">{item.street}</p>
              </div>
            ))}
          </div>
          {splicedObjects.length < objects.length && width > 767 ? (
            <button
              onClick={() => setViewObjects(viewObjects + 4)}
              className="developer__button button"
            >
              Загрузить ещё
            </button>
          ) : null}
        </div>
        <div className="developer__documents">
          <h3 className="developer__documents-title subtitle">Документы</h3>
          <ul className="developer__documents-list">
            <li className="developer__documents-item text">
              <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/files/df4d21d7-cb14-415d-8612-cf0fbd1ef672?inline=1">
                Проектная декларация
              </a>
            </li>
            <li className="developer__documents-item text">
              <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/files/b0046b58-3810-497e-9a0e-122d0f435e8f?inline=1">
                Разрешение на строительство
              </a>
            </li>
            <li className="developer__documents-item text">
              <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/files/4dd8ceaa-63b4-4192-8533-6d49a5c37f80?inline=1">
                Положительное заключение экспертизы
              </a>
            </li>
            <li className="developer__documents-item text">
              <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/files/eb5def75-8428-4ff8-b599-3b4ea5f68e6a?inline=1">
                Заключение о соответствии застройщика и проектной декларации
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
