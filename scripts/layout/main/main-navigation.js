import { Component } from '../../base/base.js';
import { A } from '../atoms/atoms.js';
import { DeepNavigation } from '../controls/navigation.js';

export class MainNavigation extends Component
{
	render()
	{
		return {
			class: 'main-navigation nav-container',
			nest:
			[
				{
					class: 'logo-container',
					link: this.addLogo()
				},
				{
					class: 'nav-container',
					nav: this.addPrimaryNav()
				}
			]
		};
	}

	addLogo()
	{
		return A({ class: 'logo', href: './' }, [
			{
				tag: 'img',
				src: 'images/life-logo.svg'
			}
		]);
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