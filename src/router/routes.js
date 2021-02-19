import App from '../pages/App';
import Show from '../pages/Show';
import Favorites from '../pages/Favorites';
import ShowFavorite from '../pages/ShowFavorite';

const routes = [
	{
		Component: Favorites,
		key: 'Favorites',
		path: '/favorites'
	},
	{
		Component: Show,
		key: 'Show',
		path: '/park/:id'
	},
	{
		Component: ShowFavorite,
		key: 'ShowFavorite',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
