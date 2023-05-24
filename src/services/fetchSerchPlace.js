/* const urlSearch = `${process.env.NEXT_PUBLIC_URL_INFO}`
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

export default function fetchSearchPlace ({ queryString, setListPlace }) {
    const params = {
      q: searchText,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0
    }
    const queryString = new URLSearchParams(params).toString()

  console.log(urlSearch)
  return fetch(`${urlSearch}${queryString}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result))
      setListPlace(JSON.parse(result))
    })
    .catch((err) => console.log('err: ', err))
}
 */

const urlSearch = `${process.env.NEXT_PUBLIC_URL_MAP_AUTOCOMPLETE}`

export default function fetchSearchPlace ({ searchText, setListPlace }) {
  const requestOptions = {
    method: 'POST',
    // redirect: 'follow',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: searchText
    })
  }
  return fetch(urlSearch, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      setListPlace(JSON.parse(result))
    })
    .catch((err) => console.log('err: ', err))
}
