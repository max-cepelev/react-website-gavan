import { useState } from 'react'
// import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Plans from '../components/Plans'
import Buy from '../components/sections/Buy'
import Capital from '../components/sections/Capital'
import Comfortable from '../components/sections/Comfortable'
import Contacts from '../components/sections/Contacts'
import Decoration from '../components/sections/Decoration'
import Developer from '../components/sections/Developer'
import Footer from '../components/sections/Footer'
import Main from '../components/sections/Main'
import Progress from '../components/sections/Progress'
import Reliable from '../components/sections/Reliable'
import Safe from '../components/sections/Safe'
import Second from '../components/sections/Second'
import TabsSlider from '../components/sections/TabsSlider'

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
      <Header />
      <Main modalOpen={() => openModal()} />
      <Second />
      <Capital />
      <Reliable />
      <Safe />
      <Comfortable />
      <TabsSlider />
      <Plans />
      <Decoration />
      <Buy />
      <Progress />
      <Developer />
      {/* <YMaps>
                <Contacts/>
            </YMaps> */}
      <Footer />
      {/* <Modal isOpened={modal}>
        <ContactForm
          title="Узнать цены"
          text="Чтобы узнать цены и свободные квартиры, заполните форму"
          onClose={() => closeModal()}
        />
      </Modal> */}
    </>
  )
}
