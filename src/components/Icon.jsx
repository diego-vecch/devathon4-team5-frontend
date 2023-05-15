import Image from 'next/image'

function Icon () {
  return (
    <Image
      src='/iconAccesMaap.svg'
      alt='Accessibility mApp Logo'
      width={180}
      height={50}
      priority
    />
  )
}

export default Icon
