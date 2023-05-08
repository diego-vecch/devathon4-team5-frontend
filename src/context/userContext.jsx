import { createContext, useState } from 'react'

// 1. Crear el contexto
const UserContext = createContext()

// 2. Crear el provider para proveer el contexto
export function UserContextProvider ({ children }) {
  const [jwt, setJwt] = useState(() => typeof window !== 'undefined' && window.sessionStorage.getItem('jwt'))
  console.log(jwt)

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
