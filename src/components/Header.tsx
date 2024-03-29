import { Link } from 'react-router-dom'

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
]

export default function Header() {
	return (
		<header className="px-4 py-3">
			<nav>
				<ul className="flex items-center gap-4">
					{navItems.map(item => (
						<li>
							<Link to={ item.path }>{ item.name }</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
