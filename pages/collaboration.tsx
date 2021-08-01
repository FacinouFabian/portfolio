import * as React from 'react'
import Layouts from '../core/layouts'
import Select from '@/components/Select'

const Collaboration = (): JSX.Element => {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [type, setType] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [isValidMail, setValidMail] = React.useState(true)
  const [success, setSuccess] = React.useState(false)

  const validEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const send = async () => {
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

  const validate = () => {
    !validEmail() ? setValidMail(!isValidMail) : send()
  }

  React.useEffect(() => {
    console.log(process.env.apiBaseURL)
  })

  return (
    <Layouts.Application pageTitle="Collaboration | Fabian Facinou">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 flex items-center justify-center">
          {success && (
            <div className="text-blue-600 text-4xl" style={{ fontFamily: 'eurostile-bold' }}>
              Votre message a bien été envoyé.
            </div>
          )}
          {!success && (
            <form className="w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                      style={{ fontFamily: 'eurostile' }}
                      htmlFor="grid-password"
                    >
                      Nom du projet
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {!isValidMail && (
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
                      E-mail
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {!isValidMail && (
                      <p className="text-red-500 text-xs italic">Veuillez renseigner un e-mail valide.</p>
                    )}
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
                    Type
                  </label>
                  <Select state={[type, setType]} list={['Web app', 'Mobile app']} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    style={{ fontFamily: 'eurostile' }}
                    htmlFor="grid-password"
                  >
                    Details
                  </label>
                  <textarea
                    onChange={(e) => setDetails(e.target.value)}
                    className="resize-y appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={validate}
                  className="w-56 h-14 py-3 px-6 bg-white hover:bg-blue-500 border-2 border-blue-500 rounded-full font-semibold text-blue-500 hover:text-white transition duration-500 ease-in-out"
                >
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layouts.Application>
  )
}

export default Collaboration
