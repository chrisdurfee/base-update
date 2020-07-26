import {MainController} from './main-controller.js';
import {HomePanel} from './modules/home-panel.js';
import {SynopsisPanel} from './modules/synopsis-panel.js';
import {CastPanel} from './modules/cast-panel.js';

/**
 * This will create a route object.
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
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
 * AppController
 *
 * This will extend the main class to override
 * the app settings.
 * @class
 */
export class AppController extends MainController
{
	/**
	 * This will get the router settings.
	 * @return {object}
	 */
	getRouterSettings()
	{
		return {
			baseUrl: '/base-update/',
			title: 'Dashr'
		};
	}

	/**
	 * This will get the routes that will be used in
	 * the app shell.
	 *
	 * @return {array}
	 */
	getRoutes()
	{
		return [
			addRoute('/', HomePanel, 'Example'),
			addRoute('/synopsis/:page?*', SynopsisPanel, 'Synopsis'),
			addRoute('/cast', CastPanel, 'Cast')
		];
	}

	/**
	 * This will get the options to create the app
	 * navigation.
	 *
	 * @return {array}
	 */
	getNavOptions()
	{
		return [
			{
				label: 'EXPLORE',
				href: './'
			},
			{
				label: 'SYNOPSIS',
				href: 'synopsis',
				options:
				[
					{
						label: 'STORY',
						href: 'synopsis/story'
					},
					{
						label: 'BOOK',
						href: 'synopsis/book'
					},
					{
						label: 'CONCEPTS',
						href: 'synopsis/concepts'
					}
				]
			},
			{
				label: 'CAST',
				href: 'cast'
			},
			{
				label: 'GALLERY',
				href: 'gallery'
			},
			{
				group: 'Mail',
				options:
				[
					{
						label: 'INBOX',
						href: './mail/inbox'
					},
					{
						label: 'SENT',
						href: './mail/sent'
					},
					{
						label: 'SPAM',
						href: './mail/spam'
					}
				]
			}
		];
	}
}