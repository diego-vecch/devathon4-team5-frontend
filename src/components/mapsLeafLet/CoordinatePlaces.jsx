import { useMapEvent } from 'react-leaflet'
import { useContext } from 'react'
import { dataCoordinates, visibilityInfoNearby } from '../../services/dataCoordinates'
import SearchText from '../../context/searchTextContext'
import SelectPlaceId from '../../context/placeIdContext'

export default function CoordinatePlaces () {
  const { setSearchText } = useContext(SearchText)
  const { setPlaceId } = useContext(SelectPlaceId)
  const map = useMapEvent('click', () => {
    map.on('click', (e) => {
      const coordinates = e.latlng
      dataCoordinates(coordinates)
        .then(res => {
          setSearchText(res.address)
          setPlaceId(res.placeId)
        })
      const radio = '10000'
      visibilityInfoNearby(coordinates, radio)
        .then(
          res => {
            console.log(res)
          }
        )
    })
  })
  return (
    null
  )
}
