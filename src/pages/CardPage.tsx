import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import LayoutInfo from '../components/LayoutInfo'
import getData from '../helpers/getData'
import { IProperty } from '../interfaces/Data'

export default function CardPage() {
  const { id: paramId } = useParams()
  const id = paramId ? parseInt(paramId) - 1 : 1
  const [data, setData] = useState<IProperty[] | null>(null)

  useEffect(() => {
    getData('/data.json').then((data: IProperty[]) => {
      setData(data)
    })
  }, [id])

  return data && <LayoutInfo {...data[id]} />
}
