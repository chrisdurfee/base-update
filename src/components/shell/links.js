
/**
 * This will get the nav links.
 *
 * @return {array}
 */
export const Links = () => [
	{
		label: 'EXPLORE',
		href: './',
		icon: 'blank'
	},
	{
		label: 'SYNOPSIS',
		icon: 'blank',
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
		href: 'cast',
		icon: 'blank'
	},
	{
		label: 'List',
		href: 'list',
		icon: 'blank'
	},
	{
		group: 'Mail',
		options:
		[
			{
				label: 'INBOX',
				href: 'mail/inbox',
				icon: 'blank'
			},
			{
				label: 'SENT',
				href: 'mail/sent',
				icon: 'blank'
			},
			{
				label: 'SPAM',
				href: 'mail/spam',
				icon: 'blank'
			}
		]
	}
];