// import { ENDPOINT } from './const'
const urlLogin = process.env.NEXT_PUBLIC_URL_LOGIN

export default function fetchLogin (credentials) {
  return fetch(urlLogin, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(credentials)
  }).then(res => {
    if (!res.ok) throw new Error(' Response is not ok')
    return res.json()
  }).then(res => {
    return res.data.token
  })
}
