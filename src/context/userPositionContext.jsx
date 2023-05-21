import { createContext, useState } from 'react'

// 1. Crear el contexto
const PositionContext = createContext()

// 2. Crear el provider para proveer el contexto
export function UserPositionProvider ({ children }) {
  const [userPosition, setUserPosition] = useState([51.505, -0.09])

  return (
    <PositionContext.Provider value={{ userPosition, setUserPosition }}>
      {children}
    </PositionContext.Provider>
  )
}
export default PositionContext
