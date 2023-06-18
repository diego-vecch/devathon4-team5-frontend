import Navbar from '@/components/Navbar'
import InteractiveMap from '@/components/mapsLeafLet/Index'
import InfoCard from '@/components/InfoCard/InfoCard'
import SearchBox from '@/components/SearchBox'
import { useState } from 'react'
import ButtonUserPosition from '@/components/ButtonUserPosition'

export default function Home () {
  const [selectPosition, setSelectPosition] = useState(null)
  return (
    <main className=' h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <div className='z-20 absolute w-full'>
        <Navbar />
      </div>
      <div className='grid place-items-center h-full'>
        <section className=' h-[92%] w-[100%] md:max-h-screen mt-9'>
          <section className='grid grid-cols-3 h-full w-full'>
            <div className='px-4 w-ful h-full'>
              <h2 className='pb-3 pl-2 text-lg text-center animate-pulse-text'>Check the accessibility of places of interest</h2>
              <div style={{ width: '16vw' }}>
                <SearchBox setSelectPosition={setSelectPosition} />
              </div>
              <div className='mt-1'><ButtonUserPosition setSelectPosition={setSelectPosition} /></div>
              <InfoCard selectPosition={selectPosition} />
            </div>
            <div className='col-span-2 z-10 h-full'>
              <InteractiveMap selectPosition={selectPosition} />
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
