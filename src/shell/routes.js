import { CastPage } from '../components/pages/cast-page.js';
import { HomePage } from '../components/pages/home/home-page.js';
import { ListPage } from '../components/pages/list/list-page.js';
import { AlbumPage } from '../components/pages/music/album-page/album-page.js';
import { MusicPage } from '../components/pages/music/music-page/music-page.js';
import { SynopsisPage } from '../components/pages/synopsis/synopsis-page.js';

/**
 * This will create a route object.
 *
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
 * @return {object}
 */
const Route = (uri, component, title) =>
{
	return {
		uri,
		component,
		title,
		persist: true
	};
};

/**
 * This will get the routes.
 *
 * @return {array}
 */
export const Routes = () => [
	Route('/', HomePage(), 'Example'),
	Route('/music/album/:album?*', AlbumPage(), 'Example'),
	Route('/music*', MusicPage(), 'Music'),
	Route('/synopsis/:page?*', SynopsisPage(), 'Synopsis'),
	Route('/cast', CastPage(), 'Cast'),
	Route('/list', ListPage(), 'Cast'),
];