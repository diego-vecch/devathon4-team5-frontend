import Icon from '@/components/componetImage/Icon'
import Login from '@/components/login/Login'
import React from 'react'

export default function LoginPage() {
  return (
    <div className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2'>
      <div className='flex flex-col items-center mt-10'>
        <Icon />
      </div>
      <Login />
    </div>
  )
}
