import { ENDPOINT } from './const'
export default function fetchLogin (credentials) {
  console.log(credentials)
  return fetch(`${ENDPOINT}/login`, {
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
