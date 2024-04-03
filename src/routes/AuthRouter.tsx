import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	},
])

export function AuthRouter() {
  return <RouterProvider router={ router } />
}
