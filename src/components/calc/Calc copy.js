import React from 'react'
import './calc.scss'

export default function Calc() {
    return (
        <div className="calc_content">
                <div className="service-form-row">
                    <label className="service-form-label">Тип платежей <a href="#" title="Что это такое?" onclick="show_pay_type_help();return false"><span className="glyphicon glyphicon-info-sign"></span></a></label>
                    <div className="input valign-top grouped-checkbox grouped-checkbox-grey">
                        <label><input type="radio" name="pay_type" value="0" checked="checked" /><span>Аннуитетные</span></label>
                        <label><input type="radio" name="pay_type" value="1" /><span>Дифференцированные</span></label>
                    </div>
                </div>

                <div className="service-form-row" style={{marginBottom: 6}}>
                    <label className="payment service-form-label">Стоимость квартиры</label>
                    <div className="flex flex-wrap width-full">
                        <label className="sum service-form-label" style={{display: "none"}}>Ежемесячный платеж</label>

                        <div className="service-form-row-inputs">
                            <input type="text" tabindex="1" id="full_price" data-currency="full_price_currency" name="full_price" className="payment input-middle" value="17100000" />
                            <input type="text" tabindex="1" id="month_payment" data-currency="full_price_currency" name="month_payment" className="sum input-middle" value="60000" style={{display: 'none'}} />

                            <div className="input valign-top grouped-checkbox grouped-checkbox-grey space-micro-left currency-selector" data-field="full_price" id="full_price_currency">
                                <label><input type="radio" name="price_currency" value="0" checked="checked" /><span> руб.</span></label>
                                <label><input type="radio" name="price_currency" value="1" /><span>$</span></label>
                                <label><input type="radio" name="price_currency" value="2" /><span>€</span></label>
                            </div>
                        </div>
                        <div className="slider-cont" style={{flex: 1}}>
                            <div className="payment input-slider noUi-target noUi-ltr noUi-horizontal" data-field="full_price" id="slider-full_price"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.513, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'transform: translate(-48.7%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50000000.0" aria-valuenow="17100000.0" aria-valuetext="17 100 000"><div className="noUi-touch-area"></div></div></div></div></div>
                            <div className="sum input-slider noUi-target noUi-ltr noUi-horizontal" data-field="month_payment" id="slider-month_payment" style={{display: 'none'}}><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.3, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'translate(-70%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="500000.0" aria-valuenow="60000.0" aria-valuetext="60 000"><div className="noUi-touch-area"></div></div></div></div></div>
                        </div>
                    </div>
                </div>

                <div className="service-form-row">
                    <label className="service-form-label">Первоначальный взнос</label>
                    <div className="flex flex-wrap width-full">
                        <div className="service-form-row-inputs">
                            <input type="text" tabindex="2" id="first_payment" data-currency="first_payment_currency" name="first_payment" className="input-middle" value="300000" />

                            <div className="input valign-top grouped-checkbox grouped-checkbox-grey space-micro-left currency-selector" data-field="first_payment" id="first_payment_currency">
                                <label><input type="radio" name="first_payment_currency" value="0" checked="checked" /><span> руб.</span></label>
                                <label><input type="radio" name="first_payment_currency" value="1" /><span>$</span></label>
                                <label><input type="radio" name="first_payment_currency" value="2" /><span>€</span></label>
                            </div>
                        </div>
                        <div className="slider-cont flex-1"><div className="input-slider noUi-target noUi-ltr noUi-horizontal" data-field="first_payment" id="slider-first_payment"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.0175439, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'translate(-98.2456%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="17100000.0" aria-valuenow="300000.0" aria-valuetext="300 000"><div className="noUi-touch-area"></div></div></div></div></div></div>
                    </div>
                </div>

                <div className="payment service-form-row">
                    <label className="service-form-label"></label>
                    <div className="flex flex-wrap width-full">
                        <div className="service-form-row-inputs">
                            <input type="text" tabindex="3" className="input-short" id="first_payment_pr" name="first_payment_pr" value="" /> %
                        </div>
                        <div className="slider-cont flex-1"><div className="input-slider slider-percent noUi-target noUi-ltr noUi-horizontal" data-field="first_payment_pr" data-max="50" data-step="0.1" id="slider-first_payment_pr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.036, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'transform: translate(-96.4%, 0px)', zIndex:4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50.0" aria-valuenow="1.8" aria-valuetext="2"><div className="noUi-touch-area"></div></div></div></div></div></div>
                    </div>
                </div>

                <div className="payment service-form-row" style={{marginBottom: 6}}>
                    <label className="service-form-label">Процентная ставка</label>
                    <div className="flex flex-wrap width-full">
                        <div className="service-form-row-inputs">
                            <input type="text" tabindex="4" className="input-short" name="wage" value="8" /> %

                            <div className="input valign-top grouped-checkbox grouped-checkbox-grey space-micro-left currency-selector" data-field="wage" id="wage_currency">
                                <label><input type="radio" name="wage_currency" value="0" checked="checked" /><span> руб.</span></label>
                                <label><input type="radio" name="wage_currency" value="1" /><span>$</span></label>
                                <label><input type="radio" name="wage_currency" value="2" /><span>€</span></label>
                            </div>
                        </div>
                        <div className="slider-cont flex-1"><div className="input-slider slider-percent noUi-target noUi-ltr noUi-horizontal" data-field="wage" data-max="30" data-step="0.1" id="slider-wage"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.266667, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'transform: translate(-73.3333%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="30.0" aria-valuenow="8.0" aria-valuetext="8"><div className="noUi-touch-area"></div></div></div></div></div></div>
                    </div>
                </div>

                <div className="service-form-row">
                    <label className="payment service-form-label"></label>
                    <div className="color-grey font-small">Расчёт калькулятора выводится в валюте ипотечной ставки</div>
                </div>

                <div className="service-form-row">
                    <label className="service-form-label">Срок кредита</label>
                    <div className="flex flex-wrap width-full">
                        <div className="service-form-row-inputs"><input type="text" tabindex="5" className="input-short" name="years" value="20" /> лет</div>
                        <div className="slider-cont flex-1"><div className="input-slider noUi-target noUi-ltr noUi-horizontal" data-field="years" data-max="50" data-step="1" id="slider-years"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.4, 1)'}}></div></div><div className="noUi-origin" style={{transform: 'translate(-60%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50.0" aria-valuenow="20.0" aria-valuetext="20"><div className="noUi-touch-area"></div></div></div></div></div></div>
                    </div>
                </div>

                <div className="service-form-row">
                    <label className="service-form-label"></label>
                    <input type="submit" className="space-medium-top button button-primary" name="submit" value="Рассчитать" />
                </div>
            </div>
    )
}
