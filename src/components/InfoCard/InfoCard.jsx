'use-client'
import { useState, useContext, useEffect } from 'react'
// import dataAcces from '../../mock/infoAcces.json'
import dataAcces from '@/services/dataAcces'
import SearchText from '../../context/searchTextContext'
import Valoration from '@/components/InfoCard/Valoration'
import useUser from '@/hooks/useUser'
import useValoration from '../../hooks/useValoration'

export default function InfoCard ({ selectPosition }) {
  const [acces/*, setAcces */] = useState(false)
  const { searchText } = useContext(SearchText)
  const { isLogged } = useUser()
  const { isSelectPlace } = useValoration()
  const [valoration, setValoration] = useState(null)
  useEffect(() => setValoration(<div className='mt-5'><Valoration /></div>), [])
  const namePosition = selectPosition?.name
  // const hasDataAcces = item.result.wheelchair_accessible_entrance
  const viewAcces = () => {
    dataAcces(searchText)
    // setAcces(hasDataAcces)
  }

  return (
    <div>
      <div className='mt-4'>
        <p>{namePosition}</p>
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
      <div>
        {isLogged && isSelectPlace && (valoration)}
      </div>
    </div>
  )
}
