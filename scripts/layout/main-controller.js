import { base } from '../base/base.js';
import { AppShell } from './main/app-shell.js';

/**
 * MainController
 *
 * This will setup the main app controller.
 * @class
 */
export class MainController
{
	constructor()
	{
		/**
		 * @member {object} router
		 */
		this.router = null;

		/**
		 * @member {object} appShell
		 */
		this.appShell = null;
	}

	setupService()
	{
		return;
	}

	/**
	 * This will get the router settings.
	 * @return {object}
	 */
	getRouterSettings()
	{
		return {
			baseUrl: '/',
			title: 'Dashr'
		};
	}

	/**
	 * This will setup the router.
	 * @protected
	 */
	setupRouter()
	{
		var settings = this.getRouterSettings(),
		baseUrl = settings.baseUrl;

		var router = this.router = base.router;
		router.setup(baseUrl, settings.title);

		/* this will modify the base tag to ref from
		the base url for all xhr */
		this.updateBaseTag(baseUrl);
	}

	updateBaseTag(url)
	{
		/* this will modify the base tag to ref from
		the base url for all xhr */
		var ele = document.getElementsByTagName('base');
		if(ele.length)
		{
			ele[0].href = url;
		}
	}

	getRoutes()
	{
		return [

		];
	}

	/**
	 * This will navigate to the uri.
	 *
	 * @param {string} uri
	 * @param {object} [data]
	 * @param {bool} [replace=false]
	 */
	navigate(uri, data, replace)
	{
		this.router.navigate(uri, data, replace);
	}

	/**
	 * This will setup the app shell.
	 */
	setupAppShell()
	{
		var options = this.getNavOptions();
		var main = this.appShell = new AppShell(
		{
			options: options,
			routes: this.getRoutes()
		});
		main.setup(document.body);
	}

	/**
	 * This will get the main body element.
	 *
	 * @return {object}
	 */
	getMainBody()
	{
		return this.appShell.getBodyPanel();
	}

	setup()
	{
		this.setupService();
		this.setupRouter();
		this.setupAppShell();
	}
}