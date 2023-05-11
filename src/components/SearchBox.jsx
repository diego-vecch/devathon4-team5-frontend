import { useState } from 'react'
import Image from 'next/image'
import fetchSearchPlace from '@/services/fetchSerchPlace'

/* const input = typeof document !== 'undefined' && document.getElementById('text')
typeof addEventListener !== 'undefined' && input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    console.log('hey')
    searchPlace()
  }
}
)

function searchPlace ({ searchText, setListPlace }) {
  // Search
  const params = {
    q: searchText,
    format: 'json',
    addressdetails: 1,
    polygon_geojson: 0
  }
  const queryString = new URLSearchParams(params).toString()
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  fetchSearchPlace({ NOMINATIM_BASE_URL, queryString, requestOptions, setListPlace })
} */

export default function SearchBox (props) {
  const { /* selectPosition, */ setSelectPosition } = props
  const [searchText, setSearchText] = useState('')
  const [listPlace, setListPlace] = useState([])

  return (
    <>
      <div className='flex'>
        <div>
          <button
            className='bg-light-btn text-light-bg1 rounded-sm h-6 w-16'
            onClick={() => {
            // Search
              const params = {
                q: searchText,
                format: 'json',
                addressdetails: 1,
                polygon_geojson: 0
              }
              const queryString = new URLSearchParams(params).toString()
              fetchSearchPlace({ queryString, setListPlace })
            }}
          >
            Search
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <input
            type='text'
            id='text'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value)
            }}
            className='w-64 px-1 focus:outline-none bg-light-lth'
            placeholder='Buenos Aires...'
          />
        </div>
      </div>

      <div>
        <div className='pt-1 w-96' component='nav' aria-label='main mailbox folders'>
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <button
                  onClick={() => {
                    setSelectPosition(item)
                  }}
                >
                  <div className='flex'>
                    <div>
                      <Image
                        src='/placeholder.png'
                        alt='Placeholder'
                        style={{ width: 20, height: 20 }}
                        width={38}
                        height={38}
                      />
                    </div>
                    <div className=' w-[98%] text-sm' primary={item?.display_name}>{item?.display_name}</div>

                  </div>
                </button>

                <div />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
