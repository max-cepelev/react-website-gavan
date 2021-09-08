import './cards.scss'
import data from '../../data.json'
import LayoutCard from '../layoutCard/LayoutCard'

export default function Cards() {
    return(
        <section className="cards">
            {data.map(item => <LayoutCard key={item.id} {...item}/>)}
        </section>
    )
}