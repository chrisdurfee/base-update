import { Atom, Component, NavLink, base } from '../../base/base.js';
import { H2, Span } from '../atoms/atoms.js';

/**
 * MainLink
 *
 * This will setup a navigation link.
 * @class
 */
export class MainLink extends Component
{
	render()
	{
		return {
			tag: 'li',
			class: 'option' + (this.options? ' sub' : ''),
			a: this.addLink(),
			click: !this.options? this.callBack : null
		};
	}

	addLink()
	{
		return new NavLink(
		{
			cache: 'link',
			href: this.href,
			activeClass: 'selected',
			exact: (this.options)? false : true,
			children:
			[
				Span({
					class: 'icon ' + (this.icon || '')
				}),
				{
					class: 'label',
					text: this.label || ''
				}
			]
		});
	}
}

/**
 * This will return a navigation group.
 * @params {object} props
 * @return {object}
 */
const NavigationGroup = Atom((props, children) =>
{
	return {
		class: 'navigation-group',
		text: H2(props.text),
		nest: children
	};
});

/**
 * Navigation
 *
 * This will create a navigation component.
 * @class
 */
export class Navigation extends Component
{
	render()
	{
		return {
			tag: 'nav',
			class: 'navigation',
			ul:
			{
				tag: 'ul',
				nest: this.addLinks(this.options)
			}
		};
	}

	addLinks(options)
	{
		var links = [];
		var option;

		for(var i = 0, length = options.length; i < length; i++)
		{
			option = options[i];
			if(!option.group)
			{
				links.push(this.addLink(option));
				continue;
			}

			links.push(this.addGroup(option));

		}
		return links;
	}

	addGroup(option)
	{
		var childLinks = this.addLinks(option.options);

		return NavigationGroup({
			text: option.group
		}, childLinks);
	}

	addLink(option)
	{
		return new MainLink(option);
	}
}

/**
 * DeepNavigation
 *
 * This will create a navigation that has sub
 * navigations.
 *
 * @class
 * @augments Navigation
 */
export class DeepNavigation extends Navigation
{
	beforeSetup()
	{
		this.subs = [];
	}

	render()
	{
		return {
			tag: 'nav',
			class: 'navigation' + (this.sub? ' sub' : ''),
			onState: this.onState(),
			ul:
			{
				tag: 'ul',
				nest: this.addLinks(this.options)
			}
		};
	}

	afterSetup()
	{
		var subs = this.subs;
		if(!subs.length)
		{
			return false;
		}

		for(var i = 0, length = subs.length; i < length; i++)
		{
			var sub = subs[i];
			sub.setup(this.appNav);
		}
	}

	onState()
	{
		if(!this.sub)
		{
			return null;
		}

		return ['selected', {
			active: true
		}];
	}

	addSubNav(link)
	{
		this.subs.push(new DeepNavigation(
		{
			appNav: this.appNav,
			sub: true,
			parentLink: link,
			options: link.options
		}));
	}

	addLink(option)
	{
		option.callBack = function(e)
		{
			base.state.set('app-control', 'ignoreHover', true);
		};

		var link = new MainLink(option);
		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}

	setupStates()
	{
		if(!this.sub)
		{
			return {};
		}

		return {
			selected:
			{
				targetId: this.parentLink.link.getId()
			}
		};
	}
}