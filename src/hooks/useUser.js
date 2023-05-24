import { useCallback, useContext, useState } from 'react'
import fetchLogin from '../services/fetchLogin'
import Context from '../context/userContext'

export default function useUser () {
  const { jwt, setJwt } = useContext(Context)
  const [state, setState] = useState({
    loading: false, error: false
  })

  const login = useCallback((credentials) => {
    setState({ loading: true, error: false })
    fetchLogin(credentials)
      .then(jwt => {
        typeof window !== 'undefined' && window.sessionStorage.setItem('jwt', jwt)
        setState({ loading: false, error: false })
        setJwt(jwt)
      })
      .catch(err => {
        typeof window !== 'undefined' && window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }
  , [setJwt])

  const logout = useCallback(() => {
    typeof window !== 'undefined' && window.sessionStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}
