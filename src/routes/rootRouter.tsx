import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'login',
				element: <Login />,
			}
		]
	},
])
