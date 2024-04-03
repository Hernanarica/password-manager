import { useContext } from 'react'
import { AuthContext } from '../../state/context/AuthContext'

export default function ButtonLogout() {
  const { user, logout } = useContext(AuthContext)

  return (
    <>
      <button className="ml-auto bg-red-600 text-white px-3 py-1 rounded" onClick={ () => logout() }>Logout { user?.name }</button>
    </>
  )
}