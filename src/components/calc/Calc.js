import React, { useEffect, useState } from 'react'
import './calc.scss'

export default function Calc({price = 3000000, openModal}) {

    const [values, setValues] = useState({
        apartmentCost: 0,
        startFeePercent: 20,
        startFee: 0,
        interestRate: 6.5,
        creditTerm: 15
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);
        openModal()
    }

    const [total, setTotal] = useState(0);

    const [initialFee, setInitialFee] = useState(true)

    const costChange = (event) => {
        const {value} = event.target
        // const newValue = value.replace(/[^0-9]+/g, '')

        if (!isNaN(value)) {
            setValues(prevValues => {
                return {
                    ...prevValues,
                    apartmentCost: +value,
                    startFeePercent: prevValues.startFeePercent,
                    startFee: +value * prevValues.startFeePercent / 100,
                }
            })
        }
    }

    const percentChange = (event) => {
        const {value} = event.target
        if (!isNaN(value)) {
            setValues(prevValues => {
                return {
                    ...prevValues,
                    apartmentCost: prevValues.apartmentCost,
                    startFeePercent: +value,
                    startFee: prevValues.apartmentCost * +value / 100,
                }
            })
        }
    }

    const startFeeChange = (event) => {
        const {value} = event.target
        if (!isNaN(value)) {
            setValues(prevValues => {
                return {
                    ...prevValues,
                    apartmentCost: prevValues.apartmentCost,
                    startFeePercent: +((value * 100) / values.apartmentCost).toFixed(2),
                    startFee: +value
                }
            })
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (!isNaN(value)) {
            setValues(prevValues => {
                return {
                ...prevValues,
                [name] : +value
            }
        })
        }
    };

    useEffect(() => {
        setValues(prevValues => {
            return {
            ...prevValues,
            apartmentCost: price,
            startFee: prevValues.startFeePercent * price / 100
            }
        })
    }, [price])

    useEffect(() => {
        const {
            apartmentCost, startFee, interestRate,  creditTerm
        } = values;

        const rate = interestRate/100/12;

        const term = creditTerm * 12;

        const creditSum = apartmentCost - startFee;

        let pay = creditSum * (rate+(rate/(((1+rate)**term)-1)))

        if (!isNaN(pay) && isFinite(pay)) {
            let localPay = pay;
            setTotal(localPay);
        }
    }, [values])


    return (
        <form className="calc" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="calc__title">Ипотечный калькулятор</h3>
            <div className="calc__price field">
                <label htmlFor="apartmentCost">Стоимость квартиры, руб</label>
                <input className='calc__textinput' type="text" name="apartmentCost" value={values.apartmentCost} onChange={costChange}/>
            </div>
            <div className="calc__initialFee field">
                {initialFee ?
                    <>
                    <label htmlFor="startFeePercent">Первоначальный взнос, %</label>
                    <div className="calc__initialFee-input">
                        <input className='calc__textinput' type="text" name="startFeePercent" value={values.startFeePercent} onChange={percentChange}/>
                        <div className='calc__buttons'>
                            <div className={`calc__buttons-item ${initialFee && 'active'}`} onClick={() => setInitialFee(true)}>%</div>
                            <div className={`calc__buttons-item ${initialFee || 'active'}`} onClick={() => setInitialFee(false)}>₽</div>
                        </div>  
                    </div>
                    <input
                        className="calc__slider calc__initialFee-slider"
                        type="range"
                        min='0'
                        max='100'
                        value={values.startFeePercent} 
                        onChange={percentChange}/>
                    </>
                    :
                    <>
                    <label htmlFor="startFee">Первоначальный взнос, руб</label>        
                    <div className="calc__initialFee-input">
                        <input className='calc__textinput' type="text" name="startFee" value={values.startFee} onChange={startFeeChange}/>
                        <div className='calc__buttons'>
                            <div className={`calc__buttons-item ${initialFee && 'active'}`} onClick={() => setInitialFee(true)}>%</div>
                            <div className={`calc__buttons-item ${initialFee || 'active'}`} onClick={() => setInitialFee(false)}>₽</div>
                        </div> 
                    </div> 
                    <input
                        className="calc__slider calc__initialFee-slider"
                        type="range"
                        min='0'
                        max={values.apartmentCost}
                        value={values.startFee}
                        step='5000'
                        onChange={startFeeChange}/>
                    </>
                }

            </div>
            <button className='calc__send'>отправить заявку</button>
            <div className="calc__rate field">
                <label htmlFor="interestRate">Cтавка, %</label>
                <input className='calc__textinput' type="text" name="interestRate" value={values.interestRate} onChange={handleChange}/>
                <input
                    name="interestRate"
                    type="range"
                    min='0'
                    max='50'
                    value={values.interestRate}
                    step='0.1'
                    onChange={handleChange} className="calc__slider"/>
            </div>
            <div className="calc__term field">
                <label htmlFor="creditTerm">Срок кредита, лет</label>
                <input className='calc__textinput' type="text" name="creditTerm" value={values.creditTerm} onChange={handleChange}/>
                <input
                    name="creditTerm"
                    type="range"
                    min='0'
                    max='50'
                    value={values.creditTerm}
                    onChange={handleChange} className="calc__slider"/>
            </div>
            <div className="calc__total">
                <p>Ежемесячный платёж</p>
                <div><p className="text">{total.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB' })}</p></div>
            </div>
        </form>
    )
}
