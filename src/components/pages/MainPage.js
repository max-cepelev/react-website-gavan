import {useState} from 'react'
import CapitalBlock from '../Blocks/capitalBlock/CapitalBlock';
import Header from '../header/Header';
import Main from '../Blocks/main/Main';
import Plans from '../plans/Plans';
import ReliableBlock from '../Blocks/reliableBlock/ReliableBlock';
import SafeBlock from '../Blocks/safeBlock/SafeBlock';
import SecondBlock from '../Blocks/second/SecondBlock';
import ComfortableBlock from '../Blocks/comfortableBlock/ComfortableBlock';
import TabsSliderBlock from '../Blocks/tabsSliderBlock/TabsSliderBlock';
import DecorationBlock from '../Blocks/decorationBlock/DecorationBlock';
import BuyBlock from '../Blocks/buyBlock/BuyBlock';
import ProgressBlock from '../Blocks/progressBlock/ProgressBlock';
import DeveloperBlock from '../Blocks/developerBlock/DeveloperBlock';
import Contacts from '../Blocks/contactsBlock/Contacts';
import { YMaps } from 'react-yandex-maps';
import Footer from '../Blocks/footer/Footer';
import Modal from '../modal/Modal'
import ContactForm from '../contactForm/ContactForm'


export default function MainPage() {

    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <Header/>
            <Main modalOpen={() => openModal()}/>
            <SecondBlock/>
            <CapitalBlock/>
            <ReliableBlock/>
            <SafeBlock/>
            <ComfortableBlock/>
            <TabsSliderBlock/>
            <Plans/>
            <DecorationBlock/>
            <BuyBlock/>
            <ProgressBlock/>
            <DeveloperBlock/>
            <YMaps>
                <Contacts/>
            </YMaps>
            <Footer/>
            <Modal isOpened={modal}>
                <ContactForm title="Узнать цены" text='Чтобы узнать цены и свободные квартиры, заполните форму' onClose={() => closeModal()}/>
            </Modal>
        </>
    )
}