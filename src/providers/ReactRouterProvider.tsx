import { useContext } from 'react'
import { AuthRouter } from '../routes/AuthRouter'
import { PublicRouter } from '../routes/PublicRouter'
import { AuthContext } from '../state/context/AuthContext'

export default function ReactRouterProvider() {
  const { user } = useContext(AuthContext)

  if (user) {
    return <AuthRouter />
  }

  return <PublicRouter />
}