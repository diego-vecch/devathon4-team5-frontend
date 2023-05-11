import { useState, useCallback } from 'react'
import Link from 'next/link'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('The email is not valid').required('email is required'),
  password: Yup.string().min(6, 'The password must be at least 6 characters').required('password is required')
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
    password: ''
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const enviarDatos = useCallback(async (event) => {
    event.preventDefault()
    const url = await fetch('http://13.36.85.62/api/v1/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(content => {
        console.log(content)
        // Agregar código de validación aquí
        const errors = validate(datos)
        if (Object.keys(errors).length === 0) {
          // Si no hay errores, enviar el formulario
          <div class='bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative' role='alert'>
            <strong class='font-bold'>Felicidades!</strong>
            <span class='block sm:inline'>Su cuenta se ha creado correctamente.</span>
            <span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 101.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z"/></svg>
            </span>
          </div>

          // ...
        } else {
          // Si hay errores, mostrarlos al usuario
          console.log('error')
          // ...
        }
      })
      .catch((err) => {
      // Si hay errores, mostrarlos al usuario
        console.log('error, revisar error.')
      })
  }, [datos])

  return (
    <div className='fixed flex w-full items-center' >
      <div className='relative mx-6 md:mx-auto w-full bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Create an account </h1>
          {/* Register */} 
          <form className='pt-6 pb-2 my-2' id='formulario' method='post' onSubmit={enviarDatos}>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' required onChange={handleChange} id='name' name='name' type='text' placeholder='Name' />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='username'>
                User Name
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' onChange={handleChange} id='username' name='username' type='text' placeholder='User Name' required />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' onChange={handleChange} id='email' type='email' name='email' placeholder='email@email.com' required />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' onChange={handleChange} id='password' type='password' name='password' placeholder='Password' required />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='confirm_password'>
                Confirm password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='confirm_password' type='password' name='confirm_password' placeholder='Confirm password' required />
            </div>
            <div className='flex items-center'>
              <input type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' required />
              <label className='ml-2 text-sm font-bold dark:text-gray-300'>I accept the <font color='blue'><a href='https://www.example.com' target='_blank'>Terms and Conditions.</a></font> </label>
            </div>
            <div className='flex flex-col m-6 items-center'>
              <button type='submit' onClick={enviarDatos} className='bg-light-btn text-light-bg1 rounded-lg m-2 h-7 w-auto content-center'>Create Account</button>
            </div>
            <div className='flex justify-center items-center'>
              <label className='ml-2 text-sm font-bold dark:text-gray-300'>you have an account? <font color='blue'><Link href='/Login' className='ml-2 gap-4 text-sm font-bold text-light-selec dark:text-gray-300'>Login.</Link></font> </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
