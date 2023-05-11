const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

export default function fetchSearchPlace ({ queryString, setListPlace }) {
  console.log(NOMINATIM_BASE_URL)
  return fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result))
      setListPlace(JSON.parse(result))
    })
    .catch((err) => console.log('err: ', err))
}
