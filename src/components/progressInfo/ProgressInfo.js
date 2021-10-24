import './ProgressInfo.scss';
import Slider from '../slider/Slider';
import {useHistory} from 'react-router-dom'

export default function ProgressInfo(props) {

    const history = useHistory()

    const {name, description, images} = props;

    return (
        <section className="progressInfo">
            <div className="progressInfo__container">
                <div className="progressInfo__slider"><Slider imageArr={images} modClassName="progressInfo__swiper__"/></div>
                <div className="progressInfo__wrapper">
                    <h2 className="subtitle progressInfo__title">{name}</h2>
                    <p className="text progressInfo__text">{description}</p>
                </div>
            </div>
            <div onClick={() => history.goBack()} className="progressInfo__back">&#10006;</div>
        </section>
    )
}