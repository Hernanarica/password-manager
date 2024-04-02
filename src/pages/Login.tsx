import { useContext } from 'react'
import { AuthContext } from '../state/context/AuthContext'

export default function Login() {
  const { user, login } = useContext(AuthContext)

  return  (
    <>
      <button
        className={ `bg-green-600 text-white px-4 py-1 rounded ${ user !== null && 'cursor-not-allowed opacity-85' }` }
        onClick={ () => login() }
        // disabled={ user !== null }
      >Login with Google</button>
    </>
  )
}