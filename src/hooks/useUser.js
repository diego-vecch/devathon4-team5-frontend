import { useCallback, useContext, useState } from 'react'
import fetchLogin from '../services/fetchLogin'
import Context from '../context/userContext'
import InfoUser from '@/context/infoUserContext'

export default function useUser () {
  const { jwt, setJwt } = useContext(Context)
  const { setInfoUser } = useContext(InfoUser)
  const [state, setState] = useState({
    loading: false, error: false
  })

  const login = useCallback((credentials) => {
    setState({ loading: true, error: false })
    fetchLogin(credentials)
      .then(user => {
        typeof window !== 'undefined' && window.sessionStorage.setItem('jwt', user.token)
        setState({ loading: false, error: false })
        setJwt(user.token)
        typeof window !== 'undefined' && window.sessionStorage.setItem('name', user.name)
        setInfoUser(
          user.name
        )
      })
      .catch(err => {
        typeof window !== 'undefined' && window.sessionStorage.removeItem('jwt')
        typeof window !== 'undefined' && window.sessionStorage.removeItem('name')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }
  , [setJwt, setInfoUser])

  const logout = useCallback(() => {
    typeof window !== 'undefined' && window.sessionStorage.removeItem('jwt')
    setJwt(null)
    typeof window !== 'undefined' && window.sessionStorage.removeItem('name')
    setInfoUser(
      {
        id: '',
        name: '',
        username: ''
      }
    )
  }, [setJwt, setInfoUser])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}
