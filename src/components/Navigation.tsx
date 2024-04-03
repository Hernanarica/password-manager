import { Link } from 'react-router-dom'
import { Route } from '../models/route.model'

interface Props {
  routes: Route[]
}

export default function Navigation({ routes }: Props) {
	return (
    <nav>
      <ul className="flex items-center gap-4">
        {
          routes.map(route => (<li key={ route.path }><Link to={ route.path }>{ route.name }</Link></li>))
        }
      </ul>
    </nav>
  )
}
