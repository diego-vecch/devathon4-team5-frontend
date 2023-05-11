import '@/styles/globals.css'
import { UserContextProvider } from '../context/userContext'
// eslint-disable-next-line camelcase
import { Lexend_Deca } from 'next/font/google'

const inter = Lexend_Deca(
  {
    subsets: ['latin'],
    weight: ['200', '300']
  }
)

export default function App ({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <main className={inter.className}><Component {...pageProps} /></main>
    </UserContextProvider>
  )
}
