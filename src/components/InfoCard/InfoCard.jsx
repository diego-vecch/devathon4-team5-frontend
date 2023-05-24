'use-client'
import { useState, useContext } from 'react'
// import dataAcces from '../../mock/infoAcces.json'
import dataAcces from '@/services/dataAcces'
import SearchText from '../../context/searchTextContext'

export default function InfoCard ({ selectPosition }) {
  const [acces/*, setAcces */] = useState(false)
  const { searchText } = useContext(SearchText)
  /*  const namePosition = selectPosition?.name */
  // const hasDataAcces = item.result.wheelchair_accessible_entrance
  const viewAcces = () => {
    dataAcces(searchText)
    // setAcces(hasDataAcces)
  }

  return (
    <div className='mt-4'>
      {/* <p>{namePosition}</p> */}
      <>{searchText}</>
      <span className='flex mt-4'>
        <button
          className='bg-light-btn text-light-lth h-8 w-24'
          onClick={viewAcces}
        >
          infoAcces :
        </button>
        <ol>
          {acces && (
            <li className='ml-3 px-2 text-light-green h-16 pt-1 lg:h-8 border-r-light-green border-l-2 bg-light-softgreen bg-opacity-90'>
              <p> wheelchair accessible entrance</p>
            </li>)}
        </ol>
      </span>
    </div>
  )
}
