import { useState } from 'react'
import dataAcces from '../../mock/infoAcces.json'

export default function InfoCard ({ selectPosition }) {
  const [acces, setAcces] = useState(false)
  const namePosition = selectPosition?.name
  const hasDataAcces = dataAcces.result.wheelchair_accessible_entrance
  const viewAcces = () => {
    setAcces(hasDataAcces)
  }

  return (
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
  )
}
