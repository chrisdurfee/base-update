import { base, Builder } from "@base-framework/base";
import { Configs } from "./configs.js";
import { setupServiceWorker } from "./service.js";
import { AppShell } from "./shell/app-shell.js";
import { UserData } from "./shell/models/user-data.js";
import { setHtmlThemeBySettings } from "./theme.js";

/**
 * AppController
 *
 * This will setup the main app controller.
 *
 * @class
 */
export class AppController
{
	/**
	 * @member {object} router
	 */
	router = null;

	/**
	 * @member {object} appShell
	 */
	appShell = null;

	/**
	 * @member {object} data
	 */
	data = {};

	/**
	 * @member {object|null} root
	 */
	root = null;

	/**
	 * This will setup the main controller.
	 */
	constructor()
	{
		setHtmlThemeBySettings();
		this.setupService();
		this.setupRouter();
		this.setData();

		// TODO: remove this if you are setting up the sign in
		this.setUserData();
	}

	/**
	 * This will set the data.
	 *
	 * @protected
	 * @returns {void}
	 */
	setData()
	{
		this.data = {
			user: new UserData()
		};
	}

	/**
	 * This will setup the service worker.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupService()
	{
		setupServiceWorker();
	}

	/**
	 * This will setup the router.
	 *
	 * @protected
	 * @return {void}
	 */
	setupRouter()
	{
		const { baseUrl, title } = Configs.router;
		const router = this.router = base.router;
		router.setup(baseUrl, title);
	}

	/**
	 * This will navigate to the uri.
	 *
	 * @param {string} uri
	 * @param {object} [data]
	 * @param {boolean} [replace=false]
	 * @return {void}
	 */
	navigate(uri, data, replace)
	{
		this.router.navigate(uri, data, replace);
	}

	/**
	 * This will setup the app shell.
	 *
	 * @protected
	 * @return {void}
	 */
	render()
	{
		const main = AppShell();
		this.appShell = Builder.render(main, document.body);

		/**
		 * This will create an alias to make accessing the app shell root panel easier.
		 *
		 * This property should be used to add popovers, modals, overlays, etc.
		 */
		this.root = this.appShell.panel;
	}

	/**
	 * This will sign the user in.
	 *
	 * @returns {void}
	 */
	signIn()
	{
		this.appShell.state.isSignedIn = true;
		this.setUserData();
	}

	/**
	 * This will sign the user out.
	 *
	 * @returns {void}
	 */
	signOut()
	{
		this.appShell.state.isSignedIn = false;

		// TODO: remove this comment after the sign in is set up
		//window.location = Configs.router.baseUrl;
	}

	/**
	 * This will set the user data.
	 *
	 * @protected
	 * @param {object|null} [data]
	 * @returns {void}
	 */
	setUserData(data = null)
	{
		// TODO: Set the user data from the API
		data = data ?? {
			name: "John Doe", // Example default user name
			image: "https://github.com/shadcn.png", // Example avatar image
			status: "online", // Default status
		};

		this.data.user.set(data);
	}

	/**
	 * This will add a notification.
	 *
	 * @param {object} props
	 * @returns {void}
	 */
	notify(props)
	{
		this.appShell.notifications.addNotice(props);
	}
}