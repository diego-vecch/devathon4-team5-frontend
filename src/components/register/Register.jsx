import { useState, useCallback } from 'react'
import Link from 'next/link'
import * as Yup from 'yup'
import dataRegister from '@/services/dataRegister'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('The email is not valid').required('Email is required'),
  password: Yup.string().min(6, 'The password must be at least 6 characters').required('Password is required'),
  confirm_password: Yup.string().min(6, 'The password must be at least 6 characters').required('Password is required')
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

export default function Register () {
  const [datos, setDatos] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [errors, setErrors] = useState({})
  const [succes, setSucces] = useState(false)

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
        const url = await dataRegister(datos)
        if (!url.ok) {
          throw new Error(url.statusText)
        }

        const content = await url.json()
        console.log(content)
        setSucces(true)
        setDatos({
          name: '',
          username: '',
          email: '',
          password: '',
          confirm_password: ''
        })
      } catch (err) {
        console.log('Error, revisar error:', err)
      }
    } else {
      setErrors(errors)
    }
  }, [datos])

  return (
    <div className='flex w-full items-center'>
      <div className=' mx-6 md:mx-auto w-full pt-6 bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg px-8'>
          <h1 className='text-2xl text-center text-light-btn'>Create an account</h1>
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
              {errors.name && <p className='text-light-rose bg-light-rose bg-opacity-10 border-l-2 border-light-rose pl-2'>{errors.name}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-1' htmlFor='username'>
                User Name
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.username ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='username'
                name='username'
                type='text'
                placeholder='User Name'
                value={datos.username}
              />
              {errors.username && <p className='text-light-rose bg-light-rose bg-opacity-10 border-l-2 border-light-rose pl-2'>{errors.username}</p>}
            </div>
            <div className='mb-4'>
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
                placeholder='email@email.com'
                value={datos.email}
              />
              {errors.email && <p className='text-light-rose bg-light-rose bg-opacity-10 border-l-2 border-light-rose pl-2'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-1' htmlFor='password'>
                Password
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.password ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='password'
                name='password'
                type='password'
                placeholder='password'
                value={datos.password}
              />
              {errors.password &&
                <p className='text-light-rose bg-light-rose bg-opacity-10 border-l-2 border-light-rose pl-2'>
                  {errors.password}
                </p>}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-1' htmlFor='confirm_password'>
                Confirm password
              </label>
              <input
                className={`rounded w-full py-2 px-3 text-grey-darker ${errors.confirm_password ? 'border-red-500' : ''}`}
                required
                onChange={handleChange}
                id='confirm_password'
                name='confirm_password'
                type='password'
                placeholder='confirm_password'
                value={datos.confirm_password}
              />
              {errors.confirm_password &&
                <p className='text-light-rose bg-light-rose bg-opacity-10 border-l-2 border-light-rose pl-2'>
                  {errors.confirm_password}
                </p>}
            </div>
            {!succes && (
              <div className='flex flex-col m-6 items-center'>
                <button
                  type='submit' onClick={enviarDatos}
                  className='bg-light-btn text-light-bg1 rounded-lg m-2 h-8 w-32 content-center'
                >
                  Create Account
                </button>
              </div>)}
            {succes && (
              <div className='mb-4 py-2 text-light-green bg-light-softgreen bg-opacity-80 border-l-4 border-light-green pl-3'>Your account has been created successfully!!
                <br /> Check your email to validate your account
              </div>)}
            <div className='flex justify-center items-center'>
              <label className='ml-1 mb-3 text-sm font-bold dark:text-gray-300'>you have an account?
                <font color='blue'>
                  <Link
                    href='/login'
                    className='ml-2 gap-4 text-sm font-bold text-light-selec dark:text-gray-300'
                  >Login.
                  </Link>
                </font>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
