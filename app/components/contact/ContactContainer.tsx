'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ContactView from './ContactView'

export interface ContactFormData {
  email: string
  subject: string
  message: string
}

const ContactContainer = (): JSX.Element => {
  const [success, setSuccess] = React.useState(false)

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().required('Email requis'),
    subject: Yup.string(),
    message: Yup.string(),
  })

  const validEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const send = async ({ email, subject, message }: ContactFormData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, subject, type: 'contact', content: message }),
    }
    await fetch(`${process.env.apiBaseURL}/sendMail`, requestOptions)
      .then((response) => {
        console.log(response.json())
        setSuccess(!success)
      })
      .catch((e) => console.log(e))
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: '',
    } as ContactFormData,
    validationSchema: RegisterSchema,
    onSubmit: send,
  })

  return <ContactView formik={formik} />
}

export default ContactContainer
