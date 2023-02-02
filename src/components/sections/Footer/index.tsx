import React from 'react'
import './Footer.scss'
import logo from './logo.png'
import instagram from './instagram.svg'
import vk from './vk.svg'
import youtube from './youtube.svg'
import facebook from './facebook.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__menu">
            <h3 className="subtitle">ЖК Гавань</h3>
            <ul className="footer__menu-items">
              <li className="footer__menu-item text">
                <a href="#about">О доме</a>
              </li>
              <li className="footer__menu-item text">
                <a href="#contacts">Контакты</a>
              </li>
              <li className="footer__menu-item text">
                <a href="#buy">Как купить</a>
              </li>
              <li className="footer__menu-item text">
                <a href="#plans">Планировки</a>
              </li>
              <li className="footer__menu-item text">
                <a href="#developer">О застройщике</a>
              </li>
              <li className="footer__menu-item text">
                <a href="#progress">Ход строительства</a>
              </li>
            </ul>
          </div>
          <div className="footer__developer">
            <a className="footer__developer-link" href="https://alfa59.ru/">
              <img src={logo} alt="Логотип группы компаний Альфа" />
            </a>
            <div className="footer__developer-social">
              <a href="https://m.facebook.com/alfagrup.perm/">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://vk.com/alfa_development">
                <img src={vk} alt="ВКонтакте" />
              </a>
              <a href="https://www.youtube.com/channel/UCjCIUytZWTn83iWZ0P4uttw/featured">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="https://www.instagram.com/alfagroup.perm/">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer__oferta text">
          Размещенные материалы носят информационный характер и не являются
          публичной офертой. Визуализация архитектурного облика дома, его
          придомовой территории, мест общего пользования являются
          ориентировочными на момент публикации и соответствуют проектной
          документации. Представленные в интерьерных дизайн-проектах финишная
          отделка квартир, предметы интерьера, мебель и бытовая техника не
          входят в стоимость квартир. Застройщик вправе самостоятельно вносить
          изменения в проектную документацию до момента ввода многоквартирного
          дома в эксплуатацию. Проектная декларация и другие необходимые
          документы застройщика размещены на сайтах наш.дом.рф и alfa59.ru. С
          подробной информацией о жилом комплексе, условиях приобретения, акциях
          и др. можно ознакомиться в офисе продаж по адресу ул. Левченко, 31.
          Застройщик ООО «Специализированный застройщик «ОМЕГА-ГРУПП».
        </p>
      </div>
    </footer>
  )
}
