import { Main } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Links } from './links.js';
import { AppControl } from './navigation/app-control.js';
import { MobileHeader } from './navigation/mobile-header.js';
import { Routes } from './routes.js';

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const AppContainer = Atom((props, children) =>
{
	return {
		class: 'app-container flex relative sm:h-screen',
		...props,
		children
	};
});

/**
 * This will create the active panel container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const ActivePanelContainer = Atom((props, children) =>
{
	return Main({
		class: 'active-panel-container flex flex-auto flex-col relative z-0 pb-[80px] md:pb-0',
		...props,
		children
	});
});

/**
 * AppShell
 *
 * This will create the app shell.
 *
 * @returns {object}
 */
export const AppShell = () => (
	AppContainer([
		MobileHeader(),

		/**
		 * This will add the desktop and mobile navigation.
		 */
		new AppControl({ options: Links() }),

		/**
		 * This will add the active panel container that will hold the main body.
		 */
		ActivePanelContainer({
			switch: Routes(),
			cache: 'mainBody'
		})
	])
);