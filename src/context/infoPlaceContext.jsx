import { createContext, useState } from 'react'

const InfoPlaceNearby = createContext()

export function InfoUserProvider ({ children }) {
  const [infoUser, setInfoUser] = useState(() => typeof window !== 'undefined' && window.sessionStorage.getItem('name'))

  return (<InfoPlaceNearby.Provider value={{ infoUser, setInfoUser }}>{children}</InfoPlaceNearby.Provider>)
}

export default InfoPlaceNearby
