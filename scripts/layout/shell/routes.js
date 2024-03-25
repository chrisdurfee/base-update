import { CastPage } from '../pages/cast-page.js';
import { HomePage } from '../pages/home/home-page.js';
import { SynopsisPage } from '../pages/synopsis-page.js';

/**
 * This will create a route object.
 *
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
 * @return {object}
 */
const addRoute = (uri, component, title) =>
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
	addRoute('/', new HomePage(), 'Example'),
	addRoute('/synopsis/:page?*', new SynopsisPage(), 'Synopsis'),
	addRoute('/cast', CastPage(), 'Cast')
];