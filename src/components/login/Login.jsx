import { useState, useCallback, useEffect } from 'react'
import useUser from '@/hooks/useUser'
import Router from 'next/router'
import Link from 'next/link'

export default function Login () {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) Router.push('/')
  }, [isLogged])

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault(credentials)
    login(credentials)
  }, [credentials, login])

  return (
    <div className='fixed flex w-full items-center'>
      <div className='relative mx-6 md:mx-auto w-full  bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Sign in to your account </h1>
          {isLoginLoading && <strong className='text-light-green'> Checking credentials...</strong>}
          {!isLoginLoading &&
            <form onSubmit={handleSubmit} className='pt-6 pb-2 my-2'>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'>
                  Your Email
                </label>
                <input name='email' type='email' required onChange={handleChange} className='rounded w-full py-2 px-3 text-grey-darker' id='email' placeholder='123@...com' />
              </div>
              <div className='mb-6'>
                <label className='block text-sm font-bold mb-2' htmlFor='password'>
                  Your password
                </label>
                <input name='password' type='password' required onChange={handleChange} className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='password' placeholder='Password' />
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
                <label className='ml-2 text-sm font-bold dark:text-gray-300'>Remeber Me</label>
                <label className='ml-40 text-sm font-bold text-light-selec dark:text-gray-300'>Forgot Password?</label>
              </div>
              <div className='flex flex-col m-6 items-center'>
                <button type='submit' className='bg-light-btn  text-light-bg1 rounded-lg m-2 h-7 w-36 content-center'>Sign In</button>
              </div>
              <label className='ml-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Not registered?</label>
              <Link href='/register' className='ml-2 gap-4 text-sm font-bold text-light-selec dark:text-gray-300'>Create acount.</Link>
            </form>}
          {
            hasLoginError && <strong className='text-light-rose'>Invalid data</strong>
          }
        </div>
      </div>
    </div>
  )
}
