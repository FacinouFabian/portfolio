'use client'

import * as React from 'react'
import { Form, FormikProvider } from 'formik'

const ContactView = ({ formik }: { formik: any }): JSX.Element => {
  const { errors, touched, handleSubmit, getFieldProps } = formik

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 flex items-center justify-center">
        <FormikProvider value={formik}>
          <Form autoComplete="off" className="w-full max-w-2xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    style={{ fontFamily: 'eurostile' }}
                    htmlFor="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    {...getFieldProps('email')}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs italic">Veuillez renseigner un e-mail valide.</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    style={{ fontFamily: 'eurostile' }}
                    htmlFor="grid-password"
                  >
                    Sujet
                  </label>
                  <input
                    {...getFieldProps('subject')}
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                  style={{ fontFamily: 'eurostile' }}
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  {...getFieldProps('message')}
                  className="resize-y appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-56 h-14 py-3 px-6 bg-white hover:bg-blue-500 border-2 border-blue-500 rounded-full font-semibold text-blue-500 hover:text-white transition duration-500 ease-in-out"
              >
                Envoyer
              </button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  )
}

export default ContactView
