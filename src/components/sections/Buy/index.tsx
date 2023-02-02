import React, { useState } from 'react'
import './BuyBlock.scss'
import sber from './sber-logo.svg'
import otkr from './otkr-logo.svg'
import vtb from './vtb-logo.svg'
import domrf from './domrf-logo.svg'
import alfa from './alfa-logo.svg'
import absolut from './absolut-logo.svg'
import Modal from '../../Modal'
// import ContactForm from '../../ContactForm'
import Calc from '../../Calc'

const initState = {
  1: false,
  2: false,
  3: false,
  4: false,
}

export default function Buy() {
  const [modal, setModal] = useState(initState)

  const closeModal = () => {
    setModal(initState)
  }

  const openModal = (id: number) => {
    setModal({ ...modal, [id]: true })
  }

  const [activeTab, setActiveTab] = useState(1)

  const TabOne = () => {
    return (
      <div className="buy__content">
        <h2 className="subtitle buy__subtitle">Выгодные условия ипотеки!</h2>
        <p className="buy__text text">
          Наши менеджеры являются квалифицированными кредитными брокерами, они
          помогут выбрать наилучшие условия кредитования и подадут ипотечную
          заявку прямо на консультации. Ответ по заявке можно получить уже через
          час.
        </p>
        <div className="buy__calculator">
          <Calc price={3000000} openModal={() => openModal(1)} />
          <div className="buy__logos">
            <div>
              <img src={sber} alt="sber" />
            </div>
            <div>
              <img src={otkr} alt="otkr" />
            </div>
            <div>
              <img src={vtb} alt="vtb" />
            </div>
            <div>
              <img src={domrf} alt="domrf" />
            </div>
            <div>
              <img src={alfa} alt="alfa" />
            </div>
            <div>
              <img src={absolut} alt="absolut" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const TabTwo = () => {
    return (
      <div className="buy__content">
        <h2 className="subtitle buy__subtitle">Рассрочка</h2>
        <p className="buy__text text">
          Рассрочка – удобный вариант оплаты без привлечения банковских средств.
          Первоначальный взнос не менее 50% от стоимости приобретаемой квартиры.
          Оставшаяся сумма разбивается на равные платежи – поквартально или
          помесячно, с начислением 10% годовых на остаток. Рассрочка
          предоставляется до декабря 2021 г.
        </p>
        <button onClick={() => openModal(2)} className="buy__button">
          Рассчитать рассрочку
        </button>
      </div>
    )
  }

  const TabThree = () => {
    return (
      <div className="buy__content">
        <h2 className="subtitle buy__subtitle">Trade-In</h2>
        <p className="buy__text text">
          Наши специалисты продадут Вашу квартиру или другую недвижимость в
          течении 1 месяца по согласованной с Вами цене. В это время выбранная
          Вами квартира в Большом доме останется на брони с сохранением цены.
        </p>
        <p className="buy__text text">
          Юридическое сопровождение продажи и услуга оценки имеющейся
          недвижимости - бесплатные.
        </p>
        <button onClick={() => openModal(3)} className="buy__button">
          оценить квартиру
        </button>
      </div>
    )
  }

  const TabFour = () => {
    return (
      <div className="buy__content">
        <h2 className="subtitle buy__subtitle">Сертификаты</h2>
        <p className="buy__text text">
          Принимаем в оплату разные виды жилищных сертификатов, материнский
          капитал. Возможно использование материнского капитала как
          первоначального взноса по ипотеке.
        </p>
        <button onClick={() => openModal(4)} className="buy__button">
          проконсультироваться{' '}
        </button>
      </div>
    )
  }

  return (
    <>
      <section className="buy" id="buy">
        <div className="buy__container">
          <h2 className="buy__title title">Способы покупки</h2>
          <div className="buy__wrapper">
            <div className="buy__tabs">
              <button
                onClick={() => setActiveTab(1)}
                className={`text buy__tab ${activeTab === 1 && 'active'}`}
              >
                Ипотека
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`text buy__tab ${activeTab === 2 && 'active'}`}
              >
                Рассрочка
              </button>
              <button
                onClick={() => setActiveTab(3)}
                className={`text buy__tab ${activeTab === 3 && 'active'}`}
              >
                Trade-in
              </button>
              <button
                onClick={() => setActiveTab(4)}
                className={`text buy__tab ${activeTab === 4 && 'active'}`}
              >
                Сертификаты
              </button>
            </div>
            {activeTab === 1 ? <TabOne /> : null}
            {activeTab === 2 ? <TabTwo /> : null}
            {activeTab === 3 ? <TabThree /> : null}
            {activeTab === 4 ? <TabFour /> : null}
          </div>
        </div>
      </section>
      {/* <Modal isOpened={modal[1]}>
        <ContactForm
          title="Заявка на кредит"
          text="Оставьте ваши контакты, мы подберм для Вас выгодные условия кредита"
          onClose={() => closeModal()}
        />
      </Modal>
      <Modal isOpened={modal[2]}>
        <ContactForm
          title="Рассчитать рассрочку"
          text="Чтобы узнать цены и свободные квартиры, заполните форму"
          onClose={() => closeModal()}
        />
      </Modal>
      <Modal isOpened={modal[3]}>
        <ContactForm
          title="Оценить квартиру"
          text="Чтобы узнать цены и свободные квартиры, заполните форму"
          onClose={() => closeModal()}
        />
      </Modal>
      <Modal isOpened={modal[4]}>
        <ContactForm
          title="Получить консультацию"
          text="Чтобы узнать цены и свободные квартиры, заполните форму"
          onClose={() => closeModal()}
        />
      </Modal> */}
    </>
  )
}
