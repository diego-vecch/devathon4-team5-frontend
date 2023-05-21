import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

export function useLocation (props) {
  const { selectPosition } = props
  const map = useMap()
  console.log('esto es...', selectPosition?.lat)
  const myLatitude = selectPosition?.lat
  const myLongitude = selectPosition?.lon
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(myLatitude, myLongitude),
        console.log(
          'el mapa muestra una Latitud de:',
          myLatitude,
          'y una Longitud de:',
          myLongitude),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition, map, myLatitude, myLongitude])

  return null
}
