import Image from 'next/image'

function Icon () {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <Image
          src='/logo.jpeg'
          alt='Access map'
          width={37}
          height={10}
          priority
        />
      </div>
      <h2 style={{ textAlign: 'center', marginLeft: '10px' }} className='pb-1 pl-1 text-lg text-center animate-pulse-text'>
        Access Map
      </h2>
    </div>
  )
}

export default Icon
