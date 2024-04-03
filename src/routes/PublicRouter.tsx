import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrublicLayout from '../layouts/PublicLayout'
import Login from '../pages/Login'
import About from '../pages/About'

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrublicLayout />,
		children: [
			{
				index: true,
				element: <Login />
			},
			{
				path: 'about',
				element: <About />,
			},
		]
	},
])

export function PublicRouter() {
  return <RouterProvider router={ router } />
}
