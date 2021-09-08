import React from 'react';
import { Formik, Form, useField } from 'formik';
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup';
import './contactForm.scss'


const MyPhoneInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field)
    return (
        <>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <MaskedInput
                guide={false}
                mask={['(', /[9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


const ContactForm = () => {
    return (
        <div className="contactForm">
            <h1>Узнать цены</h1>
            <p>Чтобы узнать цены и свободные квартиры, заполните форму</p>
            <Formik
                initialValues={{
                    phone: '',
                    firstName: '',
                    email: '',
                }}
                validationSchema={Yup.object({
                phone: Yup.string()
                    .min(15, 'Неверный номер')
                    .required('Обязательное поле'),
                firstName: Yup.string()
                    .max(20, 'Must be 15 characters or less'),
                email: Yup.string()
                    .email('Неверный email'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
            >
            <Form>
                <MyPhoneInput
                    label="Телефон"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"/>
                <MyTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Ваше имя"
                />
                <MyTextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Ваш email"
                />
                <button type="submit">Отправить</button>
            </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
