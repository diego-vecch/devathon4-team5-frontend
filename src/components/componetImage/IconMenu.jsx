import Image from 'next/image'
function IconMenu () {
  return (
    <Image
      id='hover-container'
      src='/LogoMenu.svg'
      alt='Accessibility mApp Logo'
      width={20}
      height={20}
      priority
    />
  )
}

export default IconMenu
