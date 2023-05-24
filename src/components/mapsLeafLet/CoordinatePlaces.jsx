import { useMapEvent } from 'react-leaflet'
import { useContext } from 'react'
import { dataCoordinates } from '../../services/dataCoordinates'
import SearchText from '../../context/searchTextContext'
export default function CoordinatePlaces () {
  const { setSearchText } = useContext(SearchText)
  const map = useMapEvent('click', () => {
    map.on('click', (e) => {
      const coordinates = e.latlng
      dataCoordinates(coordinates)
        .then(coordi => {
          setSearchText(coordi)
        })
    })
  })
  return (
    null
  )
}
