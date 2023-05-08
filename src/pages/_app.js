import '@/styles/globals.css'
import { UserContextProvider } from '../context/userContext'

export default function App ({ Component, pageProps }) {
  return <UserContextProvider><Component {...pageProps} /></UserContextProvider>
}
