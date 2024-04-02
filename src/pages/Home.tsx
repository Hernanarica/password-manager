import { useContext } from 'react'
import { AuthContext } from '../state/context/AuthContext'

export default function Home() {
  const { logout } = useContext(AuthContext)

  return  (
    <>
      <h2>Home</h2>
      <button className="bg-red-600 text-white px-4 py-1 rounded" onClick={ () => logout() }>Logout</button>
    </>
  )
}