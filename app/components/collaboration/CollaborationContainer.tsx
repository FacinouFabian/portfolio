'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CollaborationView from './CollaborationView'

export interface CollaborationFormData {
  name: string
  email: string
  type: string
  details: string
}

const CollaborationContainer = (): JSX.Element => {
  const [success, setSuccess] = React.useState(false)

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Trop court!').max(50, 'Trop long!').required('Nom requis!'),
    email: Yup.string().required('Email requis'),
    type: Yup.string(),
    details: Yup.string(),
  })

  const validEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const send = async ({ email, name, type, details }: CollaborationFormData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, type, content: details }),
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
      name: '',
      email: '',
      type: '',
      details: '',
    } as CollaborationFormData,
    validationSchema: RegisterSchema,
    onSubmit: send,
  })

  return <CollaborationView formik={formik} />
}

export default CollaborationContainer
