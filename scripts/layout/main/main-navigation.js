import { base } from '../../base/base.js';
import { A } from '../atoms/atoms.js';
import { DeepNavigation } from '../controls/navigation.js';

export class MainNavigation extends base.Component
{
	render()
	{
		return {
			className: 'main-navigation nav-container',
			children:
			[
				{
					className: 'logo-container',
					link: this.addLogo()
				},
				{
					className: 'nav-container',
					nav: this.addPrimaryNav()
				}
			]
		};
	}

	addLogo()
	{
		return A(
		{
			className: 'logo',
			href: './',
			children:
			[
				{
					tag: 'img',
					src: 'images/life-logo.svg'
				}
			]
		});
	}

	addPrimaryNav()
	{
		return new DeepNavigation(
		{
			options: this.options,
			appNav: this.parent.panel
		});
	}
}