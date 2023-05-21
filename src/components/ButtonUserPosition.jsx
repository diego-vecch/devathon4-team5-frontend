import { useContext } from 'react'
import PositionContext from '../context/userPositionContext'
import SearchText from '../context/searchTextContext'

export default function ButtonUserPosition ({ setSelectPosition }) {
  const { userPosition, setUserPosition } = useContext(PositionContext)
  const { setSearchText } = useContext(SearchText)

  const searchMyPositon = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(
          'latitude is',
          position.coords.latitude,
          'longitude is',
          position.coords.longitude)
        console.log(userPosition)
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
        className='bg-light-btn text-light-bg1 rounded-sm h-8 w-48'
        onClick={searchMyPositon}
      >
        Go to my Position
      </button>
    </div>
  )
}
