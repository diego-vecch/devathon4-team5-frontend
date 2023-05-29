import Image from 'next/image'

function IconMenu () {
  return (
    <Image
      src='/menu.svg'
      alt='Accessibility mApp Logo'
      width={18}
      height={25}
      priority
      className='hover:stroke-light-selec'
    />
  )
}

export default IconMenu
