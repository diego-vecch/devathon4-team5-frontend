import { useContext } from 'react'
import PositionContext from '../context/userPositionContext'
import SearchText from '../context/searchTextContext'

export default function ButtonUserPosition ({ setSelectPosition }) {
  const { setUserPosition } = useContext(PositionContext)
  const { setSearchText } = useContext(SearchText)

  const searchMyPositon = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log('estás en tu ubicación')
        const newPosition = [position.coords.latitude, position.coords.longitude]
        setUserPosition(newPosition)
        setSelectPosition()
        setSearchText('')
      }, function (error) {
        console.log(error)
      }
    )
  }
  return (
    <div>
      <button
        className='bg-light-btn text-light-bg1 rounded-sm h-8 w-36'
        onClick={searchMyPositon}
      >
        Go to my Position
      </button>
    </div>
  )
}
