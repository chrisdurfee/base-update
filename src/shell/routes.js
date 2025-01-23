/**
 * This will create a dynamic route object.
 *
 * @param {string} uri
 * @param {function} callBack
 * @param {string} title
 * @param {boolean} [persist=true]
 * @returns {object}
 */
const DynamicRoute = (uri, callBack, title, persist = true) =>
{
	return {
		uri,
		import: callBack,
		title,
		persist: true
	};
};

/**
 * This will get the routes.
 *
 * @return {Array<object>}
 */
export const Routes = () => [
	DynamicRoute('/', () => import('../components/pages/home/home-page.js'), 'Example'),

	/**
	 * Music routes
	 */
	DynamicRoute('/music/album/:album?*', () => import('../components/pages/music/album-page/album-page.js'), 'Album'),
	DynamicRoute('/music*', () => import('../components/pages/music/music-page/music-page.js'), 'Music'),

	/**
	 * Orders routes
	 */
	DynamicRoute('/orders/orders-dashboard/:orderId?*', () => import('../components/pages/orders/orders-dashboard/orders-dashboard.js'), 'Orders'),

	/**
	 * Settings routes
	 */
	DynamicRoute('/settings/:page?*', () => import('../components/pages/settings/settings-page.js'), 'Settings'),

	/**
	 * Messages routes
	 */
	DynamicRoute('/messages/:page?/video/:roomId?*', () => import('../components/pages/video/video-chat-page.js'), 'Video Chat'),
	DynamicRoute('/messages/:page?/:messageId?*', () => import('../components/pages/messages/messages-page.js'), 'Messages'),

	/**
	 * Dashboard routes
	 */
	DynamicRoute('/dashboard/:page?*', () => import('../components/pages/dashboard/dashboard-page.js'), 'Messages'),

	/**
	 * Blog routes
	 */
	DynamicRoute('/blog/posts/:postId?*', () => import('../components/pages/blog/posts/post-page.js'), 'Post'),
	DynamicRoute('/blog*', () => import('../components/pages/blog/blog-page.js'), 'Blog'),

	/**
	 * Inbox routes
	 */
	DynamicRoute('/inbox/:page?/:messageId?*', () => import('../components/pages/inbox/inbox-page.js'), 'Inbox'),
];