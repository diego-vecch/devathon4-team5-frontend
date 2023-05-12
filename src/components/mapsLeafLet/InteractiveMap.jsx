import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: './placeholder.png',
  iconSize: [38, 38]
})

const position = [51.505, -0.09]

function ResetCenterView (props) {
  const { selectPosition } = props
  const map = useMap()
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition, map])

  return null
}

function InteractiveMap (props) {
  const { selectPosition } = props
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]
  return (
    <MapContainer
      className='h-[30rem] w-[98]'
      center={position} zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}

export default InteractiveMap
