import Image from 'next/image'

function IconUser () {
  return (
    <Image
      src='/IconUser.svg'
      alt='Accessibility mApp Logo'
      width={17}
      height={10}
      priority
      className='divide-light-btn'
    />
  )
}

export default IconUser
