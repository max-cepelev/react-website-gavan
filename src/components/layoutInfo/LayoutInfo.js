import { useState } from 'react';
import ModalWindow from '../modalWindow/ModalWindow';
import ContactForm from '../contactForm/ContactForm';
import Slider from '../slider/Slider';
import './layoutInfo.scss';

export default function LayoutInfo(props) {

    const {layoutName,
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
            balcony2} = props;

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <section className="layout-info">
            <ModalWindow open={modal} onClose={closeModal} component={<ContactForm/>}/>
            <h2 className="layout-info__title">{layoutName}</h2>
            <Slider imageArr={images} onClickSlide={() => console.log('clicked')}/>
            <div className="layout-info__text">
                <p className="text"><span>Общая площадь: {square} м²</span></p>
                {livingRoom && <p className="text">Гостиная: {livingRoom} м²</p>}
                {bedroom1 && <p className="text">Спальня: {bedroom1} м²</p>}
                {bedroom2 && <p className="text">Спальня: {bedroom2} м²</p>}
                {kitchen && <p className="text">Кухня: {kitchen} м²</p>}
                {hallway && <p className="text">Прихожая: {hallway} м²</p>}
                {bathroom1 && <p className="text">Санузел: {bathroom1} м²</p>}
                {bathroom2 && <p className="text">Санузел: {bathroom2} м²</p>}
                {balcony1 && <p className="text">Лоджия: {balcony1} м²</p>}
                {balcony2 && <p className="text">Лоджия: {balcony2} м²</p>}
                <button onClick={openModal}>Узнать цену</button>
            </div>
        </section>
    )
}