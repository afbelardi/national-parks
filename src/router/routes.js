import App from '../pages/App';
import Show from '../pages/Show';
import Favorites from '../pages/Favorites';
import ShowFavorite from '../pages/ShowFavorite';
import UpdateNote from '../pages/UpdateNote';

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
		Component: UpdateNote,
		key: 'UpdateNote',
		path: '/note/:id'
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
