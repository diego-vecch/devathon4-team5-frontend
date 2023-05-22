import { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import PositionContext from '../../context/userPositionContext'
import { ResetCenterView } from './ResetCenterView'

const icon = L.icon({
  iconUrl: './placeholder.png',
  iconSize: [38, 38]
})

function InteractiveMap ({ selectPosition }) {
  const { userPosition } = useContext(PositionContext)

  const myLatitude = selectPosition?.lat || userPosition[0]
  const myLongitude = selectPosition?.lon || userPosition[1]
  const locationSelection = [myLatitude, myLongitude]

  return (
    <MapContainer
      className='h-[30rem] w-[98]'
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
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView
        latitudinalPosition={selectPosition?.lat}
        longitudinalPosition={selectPosition?.lon}
      />
    </MapContainer>
  )
}

export default InteractiveMap
