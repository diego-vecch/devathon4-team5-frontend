import { useEffect, useContext } from 'react'
import PositionContext from '../../context/userPositionContext'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

export function ResetCenterView ({ selectPosition }) {
  const map = useMap()
  const { userPosition } = useContext(PositionContext)
  console.log(userPosition)

  const myLatitude = selectPosition?.lat || userPosition[0]
  const myLongitude = selectPosition?.lon || userPosition[1]

  useEffect(() => {
    if (myLatitude || myLongitude) {
      map.setView(
        L.latLng(myLatitude, myLongitude),
        console.log(
          'el mapa muestra una Latitud de:',
          myLatitude,
          'y una Longitud de:',
          selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition, map, myLatitude, myLongitude])

  return null
}
