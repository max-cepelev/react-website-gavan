import './layoutCard.scss'
import {Link} from 'react-router-dom'

export default function LayoutCard(props) {
    const {images, layoutName, price, id, square} = props;
    return (
        <Link to={`/layouts/${id}`} className="card">
            <div className="card__img">
                <img src={images[0]} alt={layoutName}/>
            </div>
            <div className="card__text">
                <h3 className="card__title">{layoutName}</h3>
                <p className="text card__price"><span>{price}</span></p>
                <p className="text card__price">{`Общая площадь: ${square} м²`}</p>
            </div>
        </Link>
    )
}