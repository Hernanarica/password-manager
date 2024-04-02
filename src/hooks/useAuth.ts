import { useCallback, useEffect, useMemo, useState } from 'react'
import { getUser } from '../services/user.service'
import { logout as logoutService, login as loginService } from '../services/auth.service'
import { User } from '../models/user.model'
import { UseAuthReturn } from '../models/useAuth.model'
import { isActiveSession } from '../services/session.service'

export default function useAuth(initialState: User | null = null): UseAuthReturn {
  const [ user, setUser ] = useState<User | null>(initialState)

  useEffect(() => {
    isActiveSession()
    .then(response => {
      if(response) {
        getUser()
        .then(response => {
          if(response?.status === 'success') {
            setUser(response.user)
          }
        })
        .catch(error => console.error(error))
      } else {
        console.log('no hay sesion activa');
      }
    })
  }, [])

  const login = useCallback(() => {
    loginService()
    .then(() => {})
  }, [])

  const logout = useCallback(() => {
    logoutService()
    .then(() => {
      setUser(null)
    })
    .catch(error => console.error(error))
  }, [])

  return useMemo(() => ({ user, login, logout }), [user, login, logout])
}
