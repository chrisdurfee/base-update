import { Icons } from '@base-framework/ui/icons';

/**
 * This will get the nav links.
 *
 * @return {Array<object>}
 */
export const Links = () => [
	{ label: 'Home', href: './', icon: Icons.home, mobileOrder: 1, exact: true },
	{ label: 'Music', href: 'music', icon: Icons.music, mobileOrder: 2 },
	{ label: 'Inbox', href: 'inbox', icon: Icons.envelope.default, mobileOrder: 3 },
	{ label: 'Messages', href: 'messages', icon: Icons.chat.text, mobileOrder: 4 },
	{ label: 'Dashboard', href: 'dashboard', icon: Icons.barChart, mobileOrder: 5 },
	{ label: 'Blog', href: 'blog', icon: Icons.newspaper, mobileOrder: 6 },
	{ label: 'Orders', href: 'orders/orders-dashboard', icon: Icons.shoppingCart, mobileOrder: 7 }
];