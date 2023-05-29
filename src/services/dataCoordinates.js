const urlCoordinatesInfo = process.env.NEXT_PUBLIC_URL_COORDINATES_INFO

export function dataCoordinates (coordinates) {
  return (fetch(urlCoordinatesInfo, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(coordinates)

  })).then(res => {
    if (!res.ok) throw new Error(' Response is not ok')
    return res.json()
  })
}

const urlInfoNearbyPlace = process.env.NEXT_PUBLIC_URL_NEARBY_PLACE

export function visibilityInfoNearby (coordinates, radio) {
  return (
    fetch(`${urlInfoNearbyPlace}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lat: coordinates.lat,
        lng: coordinates.lng,
        radio
      })
    })).then(res => {
    if (!res.ok) throw new Error(' Response is not ok')
    return res.json()
  })
}
