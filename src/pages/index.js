import Navbar from '@/components/Navbar'
import InteractiveMap from '@/components/mapsLeafLet/Index'
import InfoCard from '@/components/InfoCard/InfoCard'
import SearchBox from '@/components/SearchBox'
import { useState } from 'react'
import ButtonUserPosition from '@/components/ButtonUserPosition'
import Icon from '../components/componetImage/Icon'

export default function Home () {
  const [selectPosition, setSelectPosition] = useState(null)
  return (
    <main className=' h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <div className=' z-30 w-full flex items-center top-0 p-0 justify-center max-w-[1500px]'>
        <Navbar />
      </div>
      <div className='grid place-items-center h-full'>
        <section className='h-full w-full'>
          <section className='grid h-full w-full'>
            <div className='absolute px-1 sm:px-4 top-0 sm:top-4 left-0 sm:left-14 2xl:left-28 z-20  w-full sm:w-[450px] pt-4 bg-gradient-to-t to-light-bg1 from-light-bg2 rounded-xl pb-6'>
              <div className='pl-1 pb-4'>
                <Icon />
              </div>
              <h2 className='pb-3 pl-0 text-lg text-center animate-pulse-text font-extralight'>Check the accessibility of places of interest</h2>
              <div className='w-full'>
                <SearchBox setSelectPosition={setSelectPosition} />
              </div>
              <div className='mt-1'><ButtonUserPosition setSelectPosition={setSelectPosition} /></div>
              <InfoCard selectPosition={selectPosition} />
            </div>
            <div className='col-span-2 z-0 h-full w-full '>
              <InteractiveMap selectPosition={selectPosition} />
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
