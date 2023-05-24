import Image from 'next/image';

function Icon() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', top: '-20px', marginRight: '10px' }}>
        <Image
          src="/logo.jpeg"
          alt="Access map"
          width={50}
          height={10}
          priority
        />
      </div>
      <h2 style={{ textAlign: 'center', marginLeft: '10px' }} className='pb-3 pl-2 text-lg text-center animate-pulse-text'>
        Access Map
      </h2>
    </div>
  );
}

export default Icon;
