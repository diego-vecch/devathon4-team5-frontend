import { useState, useContext } from 'react'
import Image from 'next/image'
import fetchSearchPlace from '@/services/fetchSerchPlace'
import IconSearch from './componetImage/IconSearch'
import SearchText from '../context/searchTextContext'

export default function SearchBox ({ setSelectPosition }) {
  const { searchText, setSearchText } = useContext(SearchText)
  const [listPlace, setListPlace] = useState([])
  const [optionPlace, setOptionPlace] = useState(false)

  const searchPlace = () => {
    fetchSearchPlace({ searchText, setListPlace })
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
              if (event.target.value === '') {
                setOptionPlace(true)
              }
            }}
            className='w-96 px-1 py-1 focus:outline-none bg-light-lth'
            placeholder='Buenos Aires...'
          />
        </div>
      </div>

      <div>
        <div className='pt-1 w-96' component='nav' aria-label='main mailbox folders'>
          {!optionPlace && listPlace.map((item) => {
            const namePosition = item?.locality
            const latitudinalPosition = item?.location.lat
            const longitudinalPosition = item?.location.lng
            const idPosition = item?.place_id
            return (
              <div key={idPosition}>
                <div
                  onClick={() => {
                    setSelectPosition({ lat: latitudinalPosition, lon: longitudinalPosition, name: namePosition })
                    setOptionPlace(true)
                    setSearchText(`${namePosition.trim()}`)
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
                    <button className=' w-[98%] text-sm text-left pl-1' primary={namePosition}>
                      {namePosition.trim().length > 34
                        ? namePosition.trim().slice(0, 36) + ' ...'
                        : namePosition.trim().slice(0, 40)}
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
