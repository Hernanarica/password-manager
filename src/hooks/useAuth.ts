import { useCallback, useMemo, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

interface UseAuthReturn {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export default function useAuth(initialState: User | null = null): UseAuthReturn {
  const [ user, setUser ] = useState<User | null>(initialState)

  const login = useCallback((user: User) => {
    setUser(user)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return useMemo(() => ({ user, login, logout }), [user, login, logout])
}
