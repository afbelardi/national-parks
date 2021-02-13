import App from '../pages/App';
import Show from '../pages/Show';
import Favorites from '../pages/Favorites';

const routes = [
	{
		Component: Show,
		key: 'Show',
		path: '/park/:id'
	},
	{
		Component: Favorites,
		key: 'Favorites',
		path: '/favorites'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
