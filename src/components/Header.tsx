import { useContext } from 'react';
import { AuthContext } from '../state/context/AuthContext';
import ButtonLogout from './shared/ButtonLogout';
import Navigation from './Navigation';

export default function Header() {
	const { user } = useContext(AuthContext)

	return (
		<header className="px-4 py-3">
			<Navigation />
			{/* <nav>
				<ul className="flex items-center gap-4">
					{
						user && <ButtonLogout />
					}
				</ul>
			</nav> */}
		</header>
	);
}
