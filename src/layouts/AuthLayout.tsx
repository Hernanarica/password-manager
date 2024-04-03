import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import authRoutes from '../routes/auth.routes'
import ButtonLogout from '../components/shared/ButtonLogout'

export default function AuthLayout() {
  return (
    <>
      <header className="px-4 py-3">
        <div className="flex items-center">
          <Navigation routes={ authRoutes } />
          <ButtonLogout />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Mi footer auth</footer>
    </>
  )
}