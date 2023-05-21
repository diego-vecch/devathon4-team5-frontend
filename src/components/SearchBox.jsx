import { useState, useContext } from 'react'
import Image from 'next/image'
import fetchSearchPlace from '@/services/fetchSerchPlace'
import IconSearch from './componetImage/IconSearch'
import SearchText from '../context/searchTextContext'

export default function SearchBox ({ setSelectPosition }) {
  // const [searchText, setSearchText] = useState('')
  const { searchText, setSearchText } = useContext(SearchText)
  const [listPlace, setListPlace] = useState([])
  const [optionPlace, setOptionPlace] = useState(false)

  const searchPlace = () => {
    const params = {
      q: searchText,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0
    }
    const queryString = new URLSearchParams(params).toString()
    fetchSearchPlace({ queryString, setListPlace })
  }

  return (
    <>
      <div className='flex'>
        <div>
          <button
            className='bg-light-btn rounded-sm h-8 w-8 p-1 '
            onClick={searchPlace}
          ><IconSearch />
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <input
            type='text'
            id='text'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value)
              searchPlace(event.target.value)
              setOptionPlace(false)
            }}
            className='w-64 px-1 py-1 focus:outline-none bg-light-lth'
            placeholder='Buenos Aires...'
          />
        </div>
      </div>

      <div>
        <div className='pt-1 w-96' component='nav' aria-label='main mailbox folders'>
          {!optionPlace && listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <div
                  onClick={() => {
                    // el item es lo mismo que devuelve el fetchSearchPlace
                    setSelectPosition(item)
                    setOptionPlace(true)
                    console.log('item que usa setSelectPo', item, 'hasta acá', optionPlace)
                    setSearchText(`${item?.display_name.trim().slice(0, 24) + ' ...'}`)
                  }}
                >
                  <div className='flex py-2'>
                    <div>
                      <Image
                        src='/placeholder.png'
                        alt='Placeholder'
                        style={{ width: 16, height: 17 }}
                        width={38}
                        height={38}
                      />
                    </div>
                    <button className=' w-[98%] text-sm text-left pl-1' primary={item?.display_name}>
                      {item?.display_name.trim().length > 34
                        ? item?.display_name.trim().slice(0, 36) + ' ...'
                        : item?.display_name.trim().slice(0, 40)}
                    </button>
                  </div>
                </div>
                <div />
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}
