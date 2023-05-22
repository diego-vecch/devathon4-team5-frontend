import { useEffect, useContext } from 'react'
import PositionContext from '../../context/userPositionContext'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

export function ResetCenterView ({ latitudinalPosition, longitudinalPosition }) {
  const map = useMap()
  const { userPosition } = useContext(PositionContext)

  const myLatitude = latitudinalPosition || userPosition[0]
  const myLongitude = longitudinalPosition || userPosition[1]

  useEffect(() => {
    if (myLatitude || myLongitude) {
      map.setView(
        L.latLng(myLatitude, myLongitude),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [map, myLatitude, myLongitude])

  return null
}
