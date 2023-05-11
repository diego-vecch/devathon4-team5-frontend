import Navbar from '@/components/Navbar'
import InteractiveMap from '@/components/mapsLeafLet/Index'
import InfoCard from '@/components/InfoCard/InfoCard'
import SearchBox from '@/components/SearchBox'
import { useState } from 'react'

export default function Home () {
  const [selectPosition, setSelectPosition] = useState(null)
  return (
    <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <Navbar />
      <div className='grid place-items-center'>
        <h2 className='pt-5 text-lg animate-pulse-text'>Check the accessibility of the places of your interest</h2>
        <section className='bg-light-form bg-opacity-25 h-[96%] w-[96%] mt-5 md:max-h-screen'>
          <section className='grid grid-cols-3'>
            <div className='p-4'>
              <div style={{ width: '16vw' }}>
                <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
              </div>
              <InfoCard />
            </div>
            <div className='col-span-2 p-4'>
              <InteractiveMap selectPosition={selectPosition} />
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
