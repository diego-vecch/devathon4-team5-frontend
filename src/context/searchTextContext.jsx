import { createContext, useState } from 'react'

const SearchText = createContext()

export function SearchPlaceProvider ({ children }) {
  const [searchText, setSearchText] = useState('')

  return (
    <SearchText.Provider
      value={{ searchText, setSearchText }}
    >
      {children}
    </SearchText.Provider>
  )
}

export default SearchText
