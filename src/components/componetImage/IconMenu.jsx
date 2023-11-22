import Image from 'next/image'
export function IconMenu () {
  return (
    <Image
      id='hover-container'
      src='/LogoMenu.svg'
      alt='Accessibility mApp Logo'
      width={26}
      height={20}
      priority
    />
  )
}

export function IconMenuClose () {
  return (
    <Image
      id='hover-container'
      src='/LogoMenuClose.svg'
      alt='Accessibility mApp Logo'
      width={26}
      height={20}
      priority
    />
  )
}
