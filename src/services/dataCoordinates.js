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
