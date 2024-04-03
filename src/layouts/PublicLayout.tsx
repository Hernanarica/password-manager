import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import publicRoutes from '../routes/public.routes'

export default function PrivateLayout() {
  return (
    <>
      <header className="px-4 py-3">
        <Navigation routes={ publicRoutes } />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Mi footer publico</footer>
    </>
  )
}