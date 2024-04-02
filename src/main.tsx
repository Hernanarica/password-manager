import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/rootRouter';
import AuthContextProvider from './providers/AuthContextProvider';
import './assets/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthContextProvider>
			<RouterProvider router={ router } />
		</AuthContextProvider>
	</React.StrictMode>
);
