import Icon from '@/components/Icon'
import Register from '@/components/register/Register'
import React from 'react'

export default function RegisterPage () {
  return (
    <div className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2'>
      <div className='flex flex-col items-center mt-12'>
        {/* Borrar este comentario arriba de Icon App */}
        {/* Icon App */}
        <Icon />
      </div>
      <Register />
    </div>
  )
}
