import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from './logo.svg'
export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
                <nav className={`header__menu  ${open ? 'open' : ''}`}>
                    <ul className='header__menu-items'>
                        <li onClick={() => setOpen(!open)}><a href="#">О доме</a></li>
                        <li onClick={() => setOpen(!open)}><Link to="/plans">Планировки</Link></li>
                        <li onClick={() => setOpen(!open)}><a href="#">Как купить</a></li>
                        <li onClick={() => setOpen(!open)}><a href="#">О застройщике</a></li>
                        <li onClick={() => setOpen(!open)}><a href="#">Ход строительства</a></li>
                        <li onClick={() => setOpen(!open)}><a href="#">Контакты</a></li>
                    </ul>
                </nav>
                <a className="header__phone" href="tel:+73422338290">+7 (342) 233-82-90</a>
                <div className={`header__humburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                        <div className="header__humburger-lines"></div>
                </div>
            </div>
        </header>
    )
}