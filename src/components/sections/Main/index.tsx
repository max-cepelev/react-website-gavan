import './main.scss'
import flag from './flag.svg'
import { useState } from 'react'
import Modal from '../../Modal'
import Video from '../../Video'

export default function Main({ modalOpen }: { modalOpen: () => void }) {
  const [modal, setModal] = useState(false)

  return (
    <section className="main">
      <Modal isOpened={modal}>
        <Video modalClose={() => setModal(false)} />
      </Modal>
      <div className="main__container">
        <div className="main__text">
          <h1>ЖК Гавань</h1>
          <p>ул. Подводников, 112</p>
          <h2>Комфорт класс от 2,9 млн. ₽</h2>
        </div>
        <button onClick={modalOpen} className="main__button button">
          Скачать прайс
        </button>
        <div className="main__video">
          <button
            className="main__video-playbutton"
            onClick={() => setModal(true)}
          ></button>
          <div className="main__video-line"></div>
          <p className="main__video-text">ВИДЕО О ДОМЕ</p>
        </div>
      </div>
      <div className="main__label">
        <div>
          <img src={flag} alt="flag" />
          <p>
            Новый дом на Подводников, 112
            <br />
            рядом с ТРК Столица
          </p>
        </div>
        <div>
          <img src={flag} alt="flag" />
          <p>Срок сдачи 2 квартал 2022 года</p>
        </div>
      </div>
    </section>
  )
}
