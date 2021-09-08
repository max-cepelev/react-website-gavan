import React from 'react';
import { Formik, Form, useField } from 'formik';
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup';
import './contactForm.scss'


const MyPhoneInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    console.log(field)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
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
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </div>
    );
};

// And now we can use these
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
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                }}
                validationSchema={Yup.object({

                phone: Yup.string()
                    .min(15, 'Неверный номер')
                    .required('Обязательное поле'),
                firstName: Yup.string()
                    .max(20, 'Must be 15 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Неверный email')
                    .required('Required'),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
                jobType: Yup.string()
                    .oneOf(
                    ['designer', 'development', 'product', 'other'],
                    'Invalid Job Type'
                    )
                    .required('Required'),
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
                    placeholder="+7 (XXX) XXX-XX-XX"/>

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
                    placeholder="email@email.com"
                />

                <MySelect label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </MySelect>

                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>

                <button type="submit">Submit</button>
            </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
