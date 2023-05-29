import { useState, useCallback, useEffect } from 'react'


export default function About () {

  }

  return (
    <div className='fixed flex w-full items-center'>
      <div className='relative mx-6 md:mx-auto w-full  bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Sign in to your account </h1>
         
           
          {
            hasLoginError && <strong className='text-light-rose'>Invalid data</strong>
          }
        </div>
      </div>
    </div>
  )
}
