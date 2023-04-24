
export default function Register () {
  return (
    <div className='fixed flex w-full items-center'>
      <div className='relative mx-6 md:mx-auto w-full  bg-light-bg2 rounded-lg md:w-1/2 lg:w-1/3 z-20 m-8'>
        <div className='shadow-lg bg-white rounded-lg p-8'>
          <h1 className='text-2xl text-green-400'>Create an account </h1>
          {/* Register */}
          <form className='pt-6 pb-2 my-2'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' for='first_name'>
                  First Name
                </label>
                <input className='rounded w-48 py-2 px-3 text-grey-darker' id='first_name' type='text' placeholder='First Name' />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' for='last_name'>
                  Last Name
                </label>
                <input className='rounded w-48 py-2 px-3 text-grey-darker' id='last_name' type='text' placeholder='Last Name' />
              </div>
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' for='email'>
                Your email
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='email' type='email' placeholder='Email' />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' for='password'>
                Your password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='password' type='password' placeholder='Password' />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-bold mb-2' for='confirm_password'>
                Confirm password
              </label>
              <input className='rounded w-full py-2 px-3 text-grey-darker mb-3' id='confirm_password' type='password' placeholder='Confirm password' />
            </div>
            <div className='flex items-center'>
              <input type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded' />
              <label className='ml-2 text-sm font-bold dark:text-gray-300'>I accept the Terms and Conditions</label>
            </div>
            <div className='flex flex-col m-6 items-center'>
              <button type='submit' className='bg-light-btn  text-light-bg1 rounded-lg m-2 h-7 w-36 content-center'>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
