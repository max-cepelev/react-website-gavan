import { useState } from 'react'
import Calc from '../Calc'
import './layoutInfo.scss'
import { useNavigate } from 'react-router-dom'
// import ContactForm from '../ContactForm'
import Slider from '../Slider'
import Modal from '../Modal'
import { IProperty } from '../../interfaces/Data'

export default function LayoutInfo(props: IProperty) {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  const openModal = () => {
    setModal(true)
  }

  const nagate = useNavigate()

  const {
    layoutName,
    images,
    square,
    livingRoom,
    bedroom1,
    bedroom2,
    kitchen,
    hallway,
    bathroom1,
    bathroom2,
    balcony1,
    balcony2,
    price,
  } = props

  return (
    <>
      <section className="layoutInfo">
        <div className="layoutInfo__container">
          <div className="layoutInfo__slider">
            <Slider imageArr={images} modClassName="layoutInfo__" />
          </div>
          <div className="layoutInfo__text">
            <h3 className="layoutInfo__title subtitle">{layoutName}</h3>
            <p>Цена от {(price / 1000000).toLocaleString('ru-RU')} млн.₽</p>
            <h3 className="layoutInfo__title subtitle">
              <span>Общая площадь: {square} м²</span>
            </h3>
            <ul className="layoutInfo__text-items">
              {livingRoom && (
                <li className="layoutInfo__text-item text">
                  Гостиная: {livingRoom} м²
                </li>
              )}
              {bedroom1 && (
                <li className="layoutInfo__text-item text">
                  Спальня: {bedroom1} м²
                </li>
              )}
              {bedroom2 && (
                <li className="layoutInfo__text-item text">
                  Спальня: {bedroom2} м²
                </li>
              )}
              {kitchen && (
                <li className="layoutInfo__text-item text">
                  Кухня: {kitchen} м²
                </li>
              )}
              {hallway && (
                <li className="layoutInfo__text-item text">
                  Прихожая: {hallway} м²
                </li>
              )}
              {bathroom1 && (
                <li className="layoutInfo__text-item text">
                  Санузел: {bathroom1} м²
                </li>
              )}
              {bathroom2 && (
                <li className="layoutInfo__text-item text">
                  Санузел: {bathroom2} м²
                </li>
              )}
              {balcony1 && (
                <li className="layoutInfo__text-item text">
                  Лоджия: {balcony1} м²
                </li>
              )}
              {balcony2 && (
                <li className="layoutInfo__text-item text">
                  Лоджия: {balcony2} м²
                </li>
              )}
            </ul>
            <button
              onClick={() => openModal()}
              className="layoutInfo__button button"
            >
              Узнать подробнее
            </button>
          </div>
          <div className="layoutInfo__calc">
            <Calc price={price} openModal={openModal} />
          </div>
        </div>
        <div onClick={() => nagate(-1)} className="layoutInfo__back">
          &#10006;
        </div>
      </section>
      {/* <Modal isOpened={modal}>
        <ContactForm
          title="Узнать цену"
          text="Оставьте ваши контакты, чтобы получить цены по выбранной планировке"
          onClose={() => closeModal()}
        />
      </Modal> */}
    </>
  )
}
