import React, { useEffect, useState } from 'react'
import './calc.scss'

export default function Calc({price = 3000000}) {

    const [values, setValues] = useState({
        apartmentCost: '',
        startFeePercent: 20,
        startFee: '',
        interestRate: 6.5,
        creditTerm: 15
    })

    const [total, setTotal] = useState('0');

    const costChange = (event) => {
        const {value} = event.target
        if (!isNaN(value)) {
            setValues(prevValues => {
                return {
                    ...prevValues,
                    apartmentCost: value,
                    startFeePercent: prevValues.startFeePercent,
                    startFee: value * prevValues.startFeePercent / 100,
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
                    startFeePercent: value,
                    startFee: prevValues.apartmentCost * value / 100,
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
                    startFeePercent: ((value * 100) / values.apartmentCost).toFixed(2),
                    startFee: value
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
                [name] : value
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

        let pay = Math.round(creditSum * (rate+(rate/(((1+rate)**term)-1))))

        if (!isNaN(pay) && isFinite(pay)) {
            let localPay = pay;
            setTotal(localPay);
        }
    }, [values])


    return (
        <form className="calc">
            <div className="calc__field">
                <label htmlFor="apartmentCost">Стоимость квартиры</label>
                <input className='calc__textinput' type="text" name="apartmentCost" value={values.apartmentCost} onChange={costChange}/>
            </div>
            <div className="calc__field">
                <label htmlFor="apartmentCost">Первоначальный взнос</label>
                <input className='calc__textinput' type="text" name="startFeePercent" value={values.startFeePercent} onChange={percentChange}/>
                <input
                    type="range"
                    min='0'
                    max='100'
                    value={values.startFeePercent} 
                    onChange={percentChange} className="calc__slider"/>
                <input className='calc__textinput' type="text" name="startFee" value={values.startFee} onChange={startFeeChange}/>
                <input
                    type="range"
                    min='0'
                    max={values.apartmentCost}
                    value={values.startFee}
                    step='5000'
                    onChange={startFeeChange} className="calc__slider"/>
            </div>
            <div className="calc__field">
                <label htmlFor="interestRate">Процентная ставка</label>
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
            <div className="calc__field">
                <label htmlFor="creditTerm">Срок кредита</label>
                <input className='calc__textinput' type="text" name="creditTerm" value={values.creditTerm} onChange={handleChange}/>
                <input
                    name="creditTerm"
                    type="range"
                    min='0'
                    max='50'
                    value={values.creditTerm}
                    onChange={handleChange} className="calc__slider"/>
            </div>
            <div className="calc__field">
                <h2>{total}</h2>
            </div>
        </form>
    )
}
