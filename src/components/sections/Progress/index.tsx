import React, { useState, useEffect } from 'react'
import './ProgressBlock.scss'
import { Link } from 'react-router-dom'
import flag from './flag.svg'
import getData from '../../../helpers/getData'
import Spinner from '../../Spinner'
import { IProgressData } from '../../../interfaces/Data'

export default function ProgressBlock() {
  const [data, setData] = useState<IProgressData[] | null>(null)

  useEffect(() => {
    getData('/progress.json')
      .then((res: IProgressData[]) => {
        setData(res.sort((a, b) => b.id - a.id))
      })
      .catch((e) => {
        alert(e)
      })
  }, [])

  const percent = 12

  return (
    <section className="progress" id="progress">
      <div className="progress__container">
        <h2 className="progress__title title">Ход строительства</h2>
        <div className="progress__dates">
          <p className="text">
            2 квартал
            <br />
            <span>2021 года</span>
          </p>
          <p className="text">
            2 квартал
            <br />
            <span>2022 года</span>
          </p>
        </div>
        <div className="progress__bar">
          <span style={{ width: `${percent}%` }}>
            <p className="text">{percent} %</p>
            <img src={flag} alt="flag" />
          </span>
        </div>
        <div className="progress__wrapper">
          {data ? (
            data.map((item) => (
              <Link
                key={item.id}
                className="progress__link"
                to={`/progress/${item.id}`}
              >
                <div className="progress__link-img">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                <p className="progress__link-text text">{item.name}</p>
              </Link>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  )
}
