import './ProgressInfo.scss'
import Slider from '../Slider'
import { useNavigate } from 'react-router-dom'
import { IProgressData } from '../../interfaces/Data'

export default function ProgressInfo({
  name,
  description,
  images,
}: IProgressData) {
  const navigate = useNavigate()

  return (
    <section className="progressInfo">
      <div className="progressInfo__container">
        <div className="progressInfo__slider">
          <Slider imageArr={images} modClassName="progressInfo__swiper__" />
        </div>
        <div className="progressInfo__wrapper">
          <h2 className="subtitle progressInfo__title">{name}</h2>
          <p className="text progressInfo__text">{description}</p>
        </div>
      </div>
      <div onClick={() => navigate(-1)} className="progressInfo__back">
        &#10006;
      </div>
    </section>
  )
}
