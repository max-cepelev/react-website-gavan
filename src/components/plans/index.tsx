import './plans.scss'
import plan from './plan-min.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs, Zoom } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState, useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocaleStorage'
import getData from '../../helpers/getData'
import { IProperty } from '../../interfaces/Data'
import Spinner from '../Spinner'

export default function Plans() {
  const [activeSlide, setActiveSlide] = useLocalStorage('activeSlide', 0)

  const [activeTab, setActiveTab] = useState(0)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  const [data, setData] = useState<IProperty[] | null>(null)
  const [filterData, setFilterData] = useState(data)

  useEffect(() => {
    getData('/data.json').then((res: IProperty[]) => {
      setData(res)
    })
  }, [])

  useEffect(() => {
    data && setFilterData(data)
  }, [data])

  useEffect(() => {
    swiper && swiper.slideTo(activeSlide)
  }, [activeSlide, swiper])

  const setSlide = (id: number) => {
    setFilterData(data)
    setActiveTab(0)
    setActiveSlide(id)
  }

  const onFilter = (tab: number) => {
    setActiveTab(tab)
    setActiveSlide(0)
    data && setFilterData(data.filter((item) => item.rooms === tab))
  }

  return (
    <section className="plans" id="plans">
      <div className="plans__container">
        {filterData ? (
          <>
            <h2 className="plans__title title">Планировки</h2>
            <div className="plans__tabs">
              <button
                onClick={() => onFilter(1)}
                className={`button plans__tab ${activeTab === 1 && 'active'}`}
              >
                1-комнатные
              </button>
              <button
                onClick={() => onFilter(2)}
                className={`button plans__tab ${activeTab === 2 && 'active'}`}
              >
                2-комнатные
              </button>
              <button
                onClick={() => onFilter(3)}
                className={`button plans__tab ${activeTab === 3 && 'active'}`}
              >
                3-комнатные
              </button>
            </div>
            <div className="plans__slider">
              <Swiper
                modules={[Navigation, Thumbs, Zoom]}
                tag="div"
                wrapperTag="ul"
                className="plans__swiper"
                spaceBetween={15}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                onSwiper={setSwiper}
                navigation
                loop={false}
                thumbs={{ swiper: thumbsSwiper }}
              >
                {filterData.map((item) => {
                  const plansID = item.id
                  return (
                    <SwiperSlide tag="li" className="plans-slide" key={plansID}>
                      <div className="plans__swiper-slide">
                        <div className="plans__swiper-img">
                          <img src={item.images[0]} alt="slide" />
                        </div>
                        <div className="plans__swiper-info">
                          <p>
                            <span>
                              Цена от{' '}
                              {(item.price / 1000000).toLocaleString('ru-RU')}{' '}
                              млн.₽
                            </span>
                          </p>
                          <p>Площадь {item.square} м²</p>
                          <Link to={`/layouts/${plansID}`}>
                            <p>УЗНАТЬ ПОДРОБНЕЕ</p>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <Swiper
              modules={[Thumbs]}
              tag="div"
              wrapperTag="ul"
              spaceBetween={15}
              className="plans__thumbs"
              onSwiper={setThumbsSwiper}
              watchSlidesProgress
              slidesPerView={3}
            >
              {filterData.map((item) => {
                const plansID = item.id
                return (
                  <SwiperSlide
                    className="plans__thumbs-slide"
                    tag="li"
                    key={plansID}
                  >
                    <div>
                      <img src={item.images[0]} alt="slide" />
                    </div>
                    <p>Площадь {item.square} м²</p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="plans__map">
              <div className="plans__map-wrapper">
                <svg viewBox="0 0 1920 1558">
                  <path
                    onClick={() => setSlide(5)}
                    className={`plan ${
                      filterData[activeSlide].layout === 1 && 'active'
                    }`}
                    d="m 1894.3076,1219.9828 0.018,-115.1507 18.9109,-0.1953 -0.6467,-86.6897 -18.376,-0.1169 -0.2575,-79.63267 c 0,0 -26.5884,-0.17271 -26.8101,-0.47586 -0.2217,-0.30315 -0.1581,-11.71976 -0.1581,-11.71976 l -100.1397,-0.14511 -0.2222,11.73547 -296.9935,0.58871 -237.6919,-0.40017 0.011,-13.25756 -100.9883,-0.25011 0.061,13.52133 -15.9255,0.10703 0.3535,176.5914 -0.015,1.2214 410.5942,-0.096 -0.015,10.5158 -11.0063,0.1668 0.1606,48.5776 11.6581,0.035 -0.1862,45.9412 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 2 && 'active'
                    }`}
                    d="m 620.1396,768.94631 220.43822,0.14389 0.0308,-32.38846 10.72871,0.0241 0.0346,-85.93785 -11.20732,0.0232 0.166,-35.53117 85.30379,-0.23864 -0.24681,-40.90069 12.0311,-0.0663 3.9e-4,-64.53337 -12.28292,-0.37887 -0.0468,-136.06138 -58.03798,-0.63959 0.68019,-77.45764 10.41717,0.35119 0.21872,-86.22253 -10.67112,-0.0969 0.0327,-6.21469 -242.99817,-0.25727 -0.45055,127.95621 -2.23046,0.0264 0.12769,37.70921 0.0453,3.82365 -2.65657,-0.0748 0.22508,27.98825 -11.63215,-0.0217 -0.0134,48.22739 11.63027,-0.13767 z"
                  />
                  <path
                    onClick={() => setSlide(2)}
                    className={`plan ${
                      filterData[activeSlide].layout === 3 && 'active'
                    }`}
                    d="m 155.70062,26.212984 0.0751,11.566761 h -14.12046 l 0.25456,100.306175 h 13.48994 v 24.85546 l 349.99469,-1.0622 -0.0622,156.73251 H 554.153 v 11.86719 l 47.91944,0.30044 -0.0751,-12.09252 h 11.49165 l 0.0751,-128.43612 254.31852,0.52577 v -12.16764 l 10.74057,0.0751 -0.0781,-94.610841 -11.89663,0.05311 -0.19292,-57.762987 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 4 && 'active'
                    }`}
                    d="m 155.09975,175.00359 0.15022,50.92379 -13.36938,-0.22532 -0.22532,64.81892 13.74491,0.75109 -0.22532,21.33091 -57.232937,0.30044 -0.0071,146.4978 395.079627,0.26486 0.16475,-80.83268 11.1531,0.21244 -0.10622,-47.4272 -11.25932,-0.31866 0.21244,-156.46197 z"
                  />
                  <path
                    onClick={() => setSlide(0)}
                    className={`plan ${
                      filterData[activeSlide].layout === 5 && 'active'
                    }`}
                    d="m 84.294631,521.55811 -0.221552,95.4735 13.967922,0.15933 -0.21244,25.70522 389.778009,-0.56539 -0.45065,-98.39257 17.57546,0.15022 v -47.16835 l -0.0274,-0.92608 -11.73731,0.15933 0.10622,-24.96168 -395.131016,-0.0339 -0.150218,50.24782 z"
                  />
                  <path
                    onClick={() => setSlide(1)}
                    className={`plan ${
                      filterData[activeSlide].layout === 6 && 'active'
                    }`}
                    d="m 97.908226,654.60691 0.0337,130.13022 57.608474,-0.37554 v 19.82873 l -11.041,0.0751 0.0751,72.10448 10.81567,0.0751 -0.22532,66.69665 336.19856,-0.33352 0.15933,-24.11192 h 1.32775 l 0.11635,-127.72507 12.20519,0.0376 -0.26557,-48.50481 -11.68419,0 0.0265,-6.16076 -0.22572,-82.82499 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 7 && 'active'
                    }`}
                    d="m 97.82926,955.3093 -0.112663,44.50199 H 84.347224 l -0.03515,63.37061 13.160419,-0.054 0.225327,22.2886 0.02452,3.205 -71.922455,0.1185 v 132.6047 l 360.109315,-0.3755 0.11267,-24.7484 h 1.76506 l 0.34072,-63.9695 7.09018,0.08 97.87169,-0.4409 -0.11267,-31.1326 11.60432,0.075 -0.0376,-47.7692 -11.26632,-0.1503 -0.0376,-20.1479 -0.0606,-78.11362 z"
                  />
                  <path
                    onClick={() => setSlide(4)}
                    className={`plan ${
                      filterData[activeSlide].layout === 8 && 'active'
                    }`}
                    d="m 25.837999,1232.7089 0.451435,134.0761 71.427163,-0.9308 0.07511,79.8783 -13.294264,-0.038 -0.150218,86.5629 408.725715,-0.3539 0.0531,-314.6234 11.79042,-0.1063 -0.21244,-47.5334 -11.57798,0.1062 -0.10622,-26.7143 -93.42043,-0.3186 0.28006,89.6721 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 9 && 'active'
                    }`}
                    d="m 504.62436,1237.9668 0.18213,251.2537 64.96915,0.038 v 12.6934 l 65.41958,0.3703 v -13.5962 h 20.766 l 0.21243,42.5411 97.9879,0.2124 -0.36926,-298.5674 -37.71059,-0.123 -0.0531,-11.7904 -48.06452,0.1593 -0.0531,10.8344 -49.5516,0.053 0.0531,6.6388 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 10 && 'active'
                    }`}
                    d="m 765.58438,1232.1229 0.30043,256.9098 64.70198,0.012 0.10622,12.109 79.71806,-0.1593 0.10622,-11.8966 17.10141,0.053 3.02727,0.053 0.40317,42.7163 153.88126,0.1966 -0.2837,-164.084 0.1775,-47.3999 -0.027,-88.1716 -93.05982,-0.2253 -0.0751,-11.4917 -48.67053,0.5258 0.0751,11.4916 z"
                  />
                  <path
                    className={`plan ${
                      filterData[activeSlide].layout === 11 && 'active'
                    }`}
                    d="m 1095.8755,1232.0103 0.1018,300.0529 161.1193,-0.2185 0.016,-42.6412 h 20.5005 l 0.1062,13.543 87.5783,-0.053 -0.1062,-13.8617 57.0401,0.2125 -0.046,-257.3344 -122.6527,0.2253 0.2253,37.0287 h -10.9659 -2.6288 l -0.019,-37.3265 -41.138,0.1112 -0.02,-10.628 h -48.8748 l -0.3425,10.7113 z"
                  />
                  <path
                    onClick={() => setSlide(3)}
                    className={`plan ${
                      filterData[activeSlide].layout === 12 && 'active'
                    }`}
                    d="m 1433.6145,1232.1999 -0.035,256.4776 51.1889,0.6642 v 13.0129 l 59.4602,0.058 0.058,-13.5433 15.9584,0.1938 h 2.4963 v 42.7549 l 331.4406,0.3625 0.089,-195.3518 -0.6695,-97.2056 -113.437,1.1761 -0.2,-8.265 -264.6107,-0.4275 -0.1819,-11.2623 -49.081,0.3068 -0.1853,10.8861 z"
                  />
                </svg>
                <img src={plan} alt="plan" />
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  )
}
