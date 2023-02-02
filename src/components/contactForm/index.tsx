import React from 'react'
import { Formik, Form, useField } from 'formik'
// import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'
import './contactForm.scss'

interface FieldsData {
  phone: string
  name: string
  email: string
  source: string
  medium: string
  content: string
  campaign: string
}

const MyPhoneInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <MaskedInput
        guide={false}
        mask={[
          '+',
          '7',
          ' ',
          '(',
          /[9]/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ]}
        className="contactForm__input text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="contactForm__error">{meta.error}</p>
      ) : null}
    </>
  )
}

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField<string>(props)
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input className="contactForm__input text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className="contactForm__error">{meta.error}</p>
      ) : null}
    </>
  )
}

interface Props {
  title: string
  text: string
  onClose: () => void
}

const ContactForm = ({ title, text, onClose }: Props) => {
  const value = localStorage.getItem('utmData')
  const utmData = value ? JSON.parse(value) : []

  return (
    <div className="contactForm">
      <h2 className="subtitle">{title}</h2>
      <p className="text">{text}</p>
      <Formik
        initialValues={{
          phone: '',
          name: '',
          email: '',
          source: utmData.utm_source || '',
          medium: utmData.utm_medium || '',
          content: utmData.utm_content || '',
          campaign: utmData.utm_campaign || '',
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .min(18, 'Недостаточно цифр')
            .required('Обязательное поле'),
          name: Yup.string().max(20, 'Must be 15 characters or less'),
          email: Yup.string().email('Неверный email'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values);
          fetch('./amo/amocrm.sender.php', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok.')
              }
            })
            .catch((err) => {
              alert(err)
            })
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
            onClose()
          }, 400)
        }}
      >
        <Form>
          <MyPhoneInput
            label="Телефон"
            name="phone"
            type="tel"
            placeholder="+7 (999) 999-99-99"
          />
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Ваше имя"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Ваш email"
          />
          <button className="button" type="submit">
            Отправить
          </button>
        </Form>
      </Formik>
      <div onClick={onClose} className="contactForm__close">
        &#10006;
      </div>
    </div>
  )
}

export default ContactForm
