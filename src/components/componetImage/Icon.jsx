import Image from 'next/image'

function Icon () {
  return (
    <div className='flex justify-center'>
      <div>
        <Image
          src='/accesLogo.svg'
          alt='Access map'
          width={35}
          height={10}
          priority
        />
      </div>
      <h2 style={{ textAlign: 'center', marginLeft: '6px' }} className='pt-[1.9px] lg:pl-1 text-lg text-center animate-pulse-text'>
        Access Map
      </h2>
    </div>
  )
}

export default Icon
