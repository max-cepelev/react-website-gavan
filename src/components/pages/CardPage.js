
import data from '../../data.json'
import LayoutInfo from '../layoutInfo/LayoutInfo'


export default function CardPage({id}) {
    return (
        <>
            <LayoutInfo {...data[id]}/>
        </>
    )
}