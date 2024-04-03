import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContextProvider from './providers/AuthContextProvider';
import './assets/css/styles.css';
import ReactRouterProvider from './providers/ReactRouterProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthContextProvider>
			<ReactRouterProvider />
		</AuthContextProvider>
	</React.StrictMode>
);
