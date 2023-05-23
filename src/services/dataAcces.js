export default function dataAcces () {
  fetch('../mock/infoAcces', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      place: 'teatro lopez de avala'
    })
  })
    .then((response) => response.text())
    .then((result) => {
      (JSON.parse(result))
    })
    .catch((err) => console.log('err: ', err))
}
