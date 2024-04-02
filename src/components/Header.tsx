import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../state/context/AuthContext';

interface NavItem {
	path: string;
	name: string;
}

const navItems: NavItem[] = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: 'about',
		name: 'About',
	},
	{
		path: 'login',
		name: 'Login',
	},
];

export default function Header() {
	const { user } = useContext(AuthContext)

	return (
		<header className="px-4 py-3">
			<nav>
				<ul className="flex items-center gap-4">
					{navItems.map((item) => (
						<li key={item.path}>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
					<span className="text-gray-600">Bienvenido! ({ user?.name})</span>
				</ul>
			</nav>
		</header>
	);
}
