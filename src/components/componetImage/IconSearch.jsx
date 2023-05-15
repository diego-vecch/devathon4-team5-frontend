import Image from 'next/image'

function IconSearch () {
  return (
    <Image
      src='/searchIcon.svg'
      alt='Accessibility mApp Logo'
      width={40}
      height={40}
      priority
      className='divide-light-lth'
    />
  )
}

export default IconSearch
