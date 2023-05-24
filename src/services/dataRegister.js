const urlRegister = process.env.NEXT_PUBLIC_URL_REGISTER

export default function dataRegister (datos) {
  return fetch(urlRegister, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
}
