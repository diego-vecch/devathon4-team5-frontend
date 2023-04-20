import SearchButton from '@/components/SearchButton'
import Navbar from '@/components/Navbar'

export default function Home () {
  return (
    <main className='h-screen bg-gradient-to-t to-light-bg1 from-light-bg2 '>
      <Navbar />
      <div className=' grid place-items-center  '>
        <div className='bg-light-form bg-opacity-25 h-96 w-11/12 mt-10'>
          <input placeholder='Buenos Aires...' className='m-1' />
          <SearchButton name='Search' />
        </div>
      </div>
    </main>
  )
}
