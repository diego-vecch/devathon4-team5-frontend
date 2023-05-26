import '@/styles/globals.css'
import { UserContextProvider } from '../context/userContext'
// eslint-disable-next-line camelcase
import { Lexend_Deca } from 'next/font/google'
import { UserPositionProvider } from '@/context/userPositionContext'
import { SearchPlaceProvider } from '../context/searchTextContext'
import { PlaceIdProvider } from '@/context/placeIdContext'

const inter = Lexend_Deca(
  {
    subsets: ['latin'],
    weight: ['200', '300']
  }
)

export default function App ({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <UserPositionProvider>
        <SearchPlaceProvider>
          <PlaceIdProvider>
            <main
              className={inter.className}
            >
              <Component {...pageProps} />
            </main>
          </PlaceIdProvider>
        </SearchPlaceProvider>
      </UserPositionProvider>
    </UserContextProvider>
  )
}
