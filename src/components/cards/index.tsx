import './cards.scss'
import LayoutCard from '../LayoutCard'
import { IProperty } from '../../interfaces/Data'
import { useEffect, useState } from 'react'
import getData from '../../helpers/getData'

export default function Cards() {
  const [data, setData] = useState<IProperty[] | null>(null)
  useEffect(() => {
    getData('/data.json')
      .then((res: IProperty[]) => {
        setData(res.sort((a, b) => b.id - a.id))
      })
      .catch((e) => {
        alert(e)
      })
  }, [])
  return (
    <section className="cards">
      {data && data.map((item) => <LayoutCard key={item.id} {...item} />)}
    </section>
  )
}
