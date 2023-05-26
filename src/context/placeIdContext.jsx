import { createContext, useState } from 'react'

const SelectPlaceId = createContext()

export function PlaceIdProvider ({ children }) {
  const [placeId, setPlaceId] = useState('')

  return (
    <SelectPlaceId.Provider value={{ placeId, setPlaceId }}>
      {children}
    </SelectPlaceId.Provider>
  )
}

export default SelectPlaceId
