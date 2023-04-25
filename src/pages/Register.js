import Icon from '@/components/Icon'
import Register from '@/components/register/Register'
import React from 'react'

export default function RegisterPage () {
  return (
    <div className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2'>
      <div className='flex flex-col items-center'>
        {/* Icon App */}
        <Icon />
      </div>
      <Register />
    </div>
  )
}
