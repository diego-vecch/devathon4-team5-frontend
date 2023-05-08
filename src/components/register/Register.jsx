import { useState, useCallback } from 'react'

export default function Register () {
  const [datos, setDatos] = useState({
    email: '',
    first_name: '',
    last_name: '',
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
    const content = await url.json()
    console.log(content)
  }, [datos])

  return (
    <div className='fixed flex w-full items-center'>
      <div className='relative mx-6 md:mx-auto w-full bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Create an account </h1>
          {/* Register */}
          <form className='pt-6 pb-2 my-2' method='post' onSubmit={enviarDatos}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='first_name'>
                  First Name
                </label>
                <input className='rounded w-48 py-2 px-3 text-grey-darker' onChange={handleChange} id='first_name' name='first_name' type='text' placeholder='First Name' />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='last_name'>
                  Last Name
                </label>
                <input className='rounded w-48 py-2 px-3 text-grey-darker' onChange={handleChange} id='last_name' name='last_name' type='text' placeholder='Last Name' />
              </div>
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='email'>
                Your email
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' onChange={handleChange} id='email' type='email' name='email' placeholder='Email' />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='password'>
                Your password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' onChange={handleChange} id='password' type='password' name='password' placeholder='Password' />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' htmlFor='confirm_password'>
                Confirm password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='confirm_password' type='password' name='confirm_password' placeholder='Confirm password' />
            </div>
            <div className='flex items-center'>
              <input type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
              <label className='ml-2 text-sm font-bold dark:text-gray-300'>I accept the Terms and Conditions</label>
            </div>
            <div className='flex flex-col m-6 items-center'>
              <button type='submit' onClick={enviarDatos} className='bg-light-btn text-light-bg1 rounded-lg m-2 h-7 w-auto content-center'>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
