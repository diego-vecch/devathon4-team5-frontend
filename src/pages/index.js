import SearchButton from '@/components/SearchButton'
import Navbar from '@/components/Navbar'
import MapRefImg from '@/components/MapRefImg'

export default function Home () {
  return (
    <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <Navbar />
      <div className='grid place-items-center'>
        <section className='bg-light-form bg-opacity-25 h-96 w-11/12 mt-10'>
          <section className='grid grid-cols-2 m-1'>
            <div>
              <input placeholder='Buenos Aires...' />
              <SearchButton name='Search' />
            </div>
            <div> You are currently viewing : Buenos Aires</div>
          </section>
          <section className='grid grid-cols-2'>
            <div>
              <p>Description provided by markers</p>
              <ol><li>◾️ Information provided by markers</li>
                <li>◾️ Information provided by markers</li>
              </ol>

            </div>
            <div>
              Interactive map reference image
              <MapRefImg />
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
