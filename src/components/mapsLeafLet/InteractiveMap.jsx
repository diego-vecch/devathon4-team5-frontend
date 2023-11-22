import { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import PositionContext from '../../context/userPositionContext'
import { ResetCenterView } from './ResetCenterView'
import CoordinatePlaces from './CoordinatePlaces'
import SearchText from '@/context/searchTextContext'

const icon = L.icon({
  iconUrl: './placeholder.png',
  iconSize: [38, 38]
})

function InteractiveMap ({ selectPosition }) {
  const { userPosition } = useContext(PositionContext)
  const { searchText } = useContext(SearchText)

  const myLatitude = selectPosition?.lat || userPosition[0]
  const myLongitude = selectPosition?.lon || userPosition[1]
  const locationSelection = [myLatitude, myLongitude]
  /* w-[98] */
  return (
    <MapContainer
      className='h-full w-full'
      center={locationSelection} zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {locationSelection && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            {searchText}
          </Popup>
        </Marker>
      )}
      <ResetCenterView
        latitudinalPosition={selectPosition?.lat}
        longitudinalPosition={selectPosition?.lon}
      />
      <CoordinatePlaces />
    </MapContainer>
  )
}

export default InteractiveMap
