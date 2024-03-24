import { Atom, Component } from '@base-framework/base';
import { CastPage } from '../pages/cast-page.js';
import { HomePage } from '../pages/home-page.js';
import { SynopsisPage } from '../pages/synopsis-page.js';
import { AppControl } from './navigation/app-control.js';

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
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const AppContainer = Atom((props, children) =>
{
	return {
		class: 'app-container',
		...props,
		children
	};
});

/**
 * This will create the active panel container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const ActivePanelContainer = Atom((props, children) =>
{
	return {
		class: 'active-panel-container',
		...props,
		children
	};
});

/**
 * This will get the nav options.
 *
 * @return {array}
 */
const getNavOptions = () => [
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

/**
 * This will get the routes.
 *
 * @return {array}
 */
const getRoutes = () => [
	addRoute('/', new HomePage(), 'Example'),
	addRoute('/synopsis/:page?*', new SynopsisPage(), 'Synopsis'),
	addRoute('/cast', new CastPage(), 'Cast')
];

/**
 * AppShell
 *
 * This will create the app shell.
 *
 * @class
 * @extends Component
 */
export class AppShell extends Component
{
	/**
	 * This will render the component.
	 *
	 * @return {object}
	 */
	render()
	{
		return AppContainer([
			new AppControl({ options: getNavOptions() }),
			ActivePanelContainer({
				switch: getRoutes(),
				cache: 'mainBody'
			})
		]);
	}

	/**
	 * This will get the body panel.
	 *
	 * @returns {object}
	 */
	getBodyPanel()
	{
		return this.mainBody;
	}
}