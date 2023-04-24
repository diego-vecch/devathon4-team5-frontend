
export default function Login () {
  return (
    <div className='fixed flex w-full items-center'>
      <div className='relative mx-6 md:mx-auto w-full  bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Sign in to your account </h1>
          {/* Login */}
          <form className='pt-6 pb-2 my-2'>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-2' for='email'>
                Your Email
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker' id='email' type='text' placeholder='Email Address' />
            </div>
            <div class='mb-6'>
              <label className='block text-sm font-bold mb-2' for='password'>
                Your password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='password' type='password' placeholder='Password' />
            </div>
            <div className='flex items-center'>
              <input type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
              <label className='ml-2 text-sm font-bold dark:text-gray-300'>Remeber Me</label>
              <label className='ml-40 text-sm font-bold text-light-selec dark:text-gray-300'>Forgot Password?</label>
            </div>
            <div className='flex flex-col m-6 items-center'>
              <button type='submit' className='bg-light-btn  text-light-bg1 rounded-lg m-2 h-7 w-36 content-center'>Sign In</button>
            </div>
            <label className='ml-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Not registered?</label>
            <label className='ml-2 gap-4 text-sm font-bold text-light-selec dark:text-gray-300'>Create acount.</label>
          </form>
        </div>
      </div>
    </div>
  )
}
