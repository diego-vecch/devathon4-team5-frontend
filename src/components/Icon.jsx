import Image from 'next/image'

function Icon () {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src='/icon-acces-maap.svg'
        alt='Accessibility mApp Logo'
        width={180}
        height={50}
        priority
      />
    </a>
  )
}

export default Icon
