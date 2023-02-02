import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProgressInfo from '../components/ProgressInfo'
import getData from '../helpers/getData'
import { IProgressData } from '../interfaces/Data'

export default function ProgressPage() {
  const [data, setData] = useState<IProgressData[] | null>(null)

  const { id: paramId } = useParams()

  const id = paramId ? +paramId - 1 : 1

  useEffect(() => {
    getData('/progress.json')
      .then((res: IProgressData[]) => {
        setData(res)
      })
      .catch((e) => {
        alert(e)
      })
  }, [])

  return <>{data && <ProgressInfo {...data[id]} />}</>
}
