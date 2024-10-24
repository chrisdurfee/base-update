import { Icons } from '../../components/icons/icons.js';

/**
 * This will get the nav links.
 *
 * @return {array}
 */
export const Links = () => [
	{ label: 'Home', href: './', icon: Icons.home, mobileOrder: 1, exact: true },
    { label: 'Synopsis', href: 'synopsis', icon: Icons.chat.text, mobileOrder: 2 },
    { label: 'Cast', href: 'cast', icon: Icons.calendar.default, mobileOrder: 3 },
    { label: 'List', href: 'list', icon: Icons.star, mobileOrder: 4 },
    { label: 'Map', href: 'full', icon: Icons.map },
    { label: 'Help', href: 'full-contain', icon: Icons.help },
    { label: 'Music', href: 'messages', icon: Icons.music },
    {
        label: 'Photo',
        icon: Icons.photo,
        options: [
            {
                group: 'Synopsis',
                options: [
                    { label: 'Story', href: 'synopsis/story' },
                    {
                        label: 'Book',
                        options: [
                            { label: 'irure nostrud 1', href: 'synopsis/Book/irure-nostrud' },
                            { label: 'ipsum dolore 2', href: 'synopsis/Book/ipsum-dolore' },
                            { label: 'enim consectetur 3', href: 'synopsis/Book/enim-consectetur' }
                        ]
                    },
                    {
                        label: 'Concepts',
                        options: [
                            { label: 'irure nostrud', href: 'synopsis/concepts/irure-nostrud' },
                            { label: 'ipsum dolore', href: 'synopsis/concepts/ipsum-dolore' },
                            { label: 'enim consectetur', href: 'synopsis/concepts/enim-consectetur' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: 'Settings',
        icon: Icons.adjustments.veritical,
        options: [
            { label: 'irure nostrud', href: 'gallery/irure-nostrud' },
            { label: 'ipsum dolore', href: 'gallery/ipsum-dolore' },
            { label: 'enim consectetur', href: 'gallery/enim-consectetur' }
        ]
    },
    {
        group: 'Mail',
        options: [
            { label: 'Inbox', href: 'mail/inbox', icon: Icons.archive.box.default },
            { label: 'Sent', href: 'mail/sent', icon: Icons.archive.box.arrow },
            { label: 'Spam', href: 'mail/spam', icon: Icons.archive.box.x }
        ]
    }
];