import { useState, useCallback } from 'react'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  subject: Yup.string().required('Subject is required'),
  email: Yup.string().email('The email is not valid').required('Email is required'),
  message: Yup.string().required('Message is required')
})

const validate = (values) => {
  const errors = {}
  try {
    schema.validateSync(values, { abortEarly: false })
  } catch (err) {
    err.inner.forEach((e) => {
      errors[e.path] = e.message
    })
  }
  return errors
}

export default function formContact () {
  const [datos, setDatos] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const enviarDatos = useCallback(async (event) => {
    event.preventDefault()

    const errors = validate(datos)

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('URL_DEL_ENDPOINT', {
          method: 'POST',
          body: JSON.stringify(datos),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const content = await response.json()
        console.log(content)
        setSuccess(true)
      } catch (err) {
        console.log('Error, revisar error:', err)
      }
    } else {
      setErrors(errors)
    }
  }, [datos])

  return (
    <div className='flex w-full items-center'>
      <div className='mx-6 md:mx-auto w-full pt-6 bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg px-8'>
          <h1 className='text-2xl text-center text-light-btn'>Contact us</h1>
          <form className='pt-4 pb-1 my-2' id='formulario' method='post' onSubmit={enviarDatos}>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-1' htmlFor='name'>
                Name
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.name ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                value={datos.name}
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}

              <label className='block text-sm font-bold mb-1' htmlFor='subject'>
                Subject
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.subject ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='subject'
                name='subject'
                type='text'
                placeholder='Subject'
                value={datos.subject}
              />
              {errors.subject && <p className='text-red-500'>{errors.subject}</p>}

              <label className='block text-sm font-bold mb-1' htmlFor='email'>
                Email
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.email ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                value={datos.email}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}

              <label className='block text-sm font-bold mb-1' htmlFor='message'>
                Message
              </label>
              <textarea
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.message ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='message'
                name='message'
                placeholder='Message'
                value={datos.message}
              />
              {errors.message && <p className='text-red-500'>{errors.message}</p>}
            </div>
            {!success
              ? (
                <div className='flex flex-col m-6 items-center'>
                  <button type='submit' className='bg-light-btn text-light-bg1 rounded-lg m-2 h-8 w-32 content-center'>
                    Send
                  </button>
                  {errors.general && <p className='text-red-500'>{errors.general}</p>}
                </div>
                )
              : (
                <div className='text-center mt-6 mb-4'>
                  <p className='text-light-btn'>Thanks for sending your message.</p>
                </div>
                )}
          </form>
        </div>
      </div>
    </div>
  )
}
