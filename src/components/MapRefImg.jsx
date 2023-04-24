import Image from 'next/image'

function MapRefImg () {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src='/mapRef.svg'
        alt='Accessibility mApp Image of Referencie'
        width={320}
        height={100}
        priority
      />
    </a>
  )
}

export default MapRefImg
