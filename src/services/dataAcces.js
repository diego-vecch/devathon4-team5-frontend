const urlDataAcces = process.env.NEXT_PUBLIC_URL_ACCESIBILITY

export default function dataAcces (searchText) {
  console.log('esto llega como searchtext al fetch', searchText)
  fetch(urlDataAcces, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      place: searchText
    })
  })
    .then((response) => response.text())
    .then((result) => {
      (JSON.parse(result))
    })
    .catch((err) => console.log('err: ', err))
}
