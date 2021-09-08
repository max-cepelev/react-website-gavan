import './main.scss'
import flag from './flag.svg'

export default function Main() {
    return (
        <section className="main">
            <div className="main__container">
                <div className="main__text">
                    <h1><span>ЖК Гавань</span></h1>
                    <p><span>ул. Подводников, 112</span></p>
                    <h2><span>Комфорт класс<span> от 2,9 млн. ₽</span></span></h2>
                </div>
                <button className="main__button">СКАЧАТЬ ПРАЙС</button>
                <div className="main__video">
                    <button className="main__video-playbutton"></button>
                    <div className="main__video-line"></div>
                    <p className="main__video-text">ВИДЕО О ДОМЕ</p>
                </div>
                <div className="main__label">
                    <div>
                        <img src={flag} alt="flag" />
                        <p>Новый дом на Подводников, 112<br />рядом с ТРК Столица</p>
                    </div>
                    <div>
                        <img src={flag} alt="flag" />
                        <p>Срок сдачи 2 квартал 2022 года</p>
                    </div>
                </div>
            </div>
        </section>
    )
}