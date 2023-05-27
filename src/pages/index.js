import Navbar from '@/components/Navbar'
import InteractiveMap from '@/components/mapsLeafLet/Index'
import InfoCard from '@/components/InfoCard/InfoCard'
import SearchBox from '@/components/SearchBox'
import { useState } from 'react'
import ButtonUserPosition from '@/components/ButtonUserPosition'

export default function Home () {
  const [selectPosition, setSelectPosition] = useState(null)
  return (
    <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <div className='z-10'> <Navbar /></div>
      <div className='grid place-items-center mt-3'>
        <section className=' h-[100%] w-[96%] mt-1 md:max-h-screen'>
          <section className='grid grid-cols-3'>
            <div className='p-4'>
              <h2 className='pb-3 pl-2 text-lg text-center animate-pulse-text'>Check the accessibility of places of interest</h2>
              <div style={{ width: '16vw' }}>
                <SearchBox setSelectPosition={setSelectPosition} />
              </div>
              <div className='mt-1'><ButtonUserPosition setSelectPosition={setSelectPosition} /></div>
              <InfoCard selectPosition={selectPosition} />
            </div>
            <div className='col-span-2 p-4 z-10'>
              <InteractiveMap selectPosition={selectPosition} />
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
