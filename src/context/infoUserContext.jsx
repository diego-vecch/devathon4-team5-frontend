import { createContext, useState } from 'react'

const InfoUser = createContext()

export function InfoUserProvider ({ children }) {
  const [infoUser, setInfoUser] = useState(() => typeof window !== 'undefined' && window.sessionStorage.getItem('name'))

  return (<InfoUser.Provider value={{ infoUser, setInfoUser }}>{children}</InfoUser.Provider>)
}

export default InfoUser
