import {base, NavLink, Atom} from '../../base/base.js';
import {Span, H2} from '../atoms/atoms.js'; 

/**
 * MainLink
 * 
 * This will setup a navigation link. 
 * @class
 */
export class MainLink extends base.Component
{
	render()
	{
		return { 
			tag: 'li',  
			className: 'option' + (this.options? ' sub' : ''),
			a: this.addLink(), 
			click: !this.options? this.callBack : null
		};
	} 
	
	addLink()
	{
		return this.cache('link', new NavLink(
		{ 
			href: this.href, 
			activeClass: 'selected', 
			exact: (this.options)? false : true,
			children: 
			[
				Span({
					className: 'icon ' + (this.icon || '')
				}), 
				{
					className: 'label', 
					text: this.label || ''
				}
			]
		})); 
	}
} 

/**
 * This will return a navigation group. 
 * @params {object} props
 * @return {object}
 */
const NavigationGroup = Atom.extend(function(props)
{
	return {
		className: 'navigation-group',
		text: H2({
			text: props.text
		}),
		children: props.children || null 
	};
}); 

/**
 * Navigation
 * 
 * This will create a navigation component. 
 * @class
 */
export class Navigation extends base.Component
{
	render() 
	{ 
		return { 
			tag: 'nav', 
			className: 'navigation', 
			ul: 
			{ 
				tag: 'ul', 
				children: this.addLinks(this.options)
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
			text: option.group,
			children: childLinks
		}); 
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
			className: 'navigation' + (this.sub? ' sub' : ''), 
			onState: this.onState(),
			ul: 
			{ 
				tag: 'ul', 
				children: this.addLinks(this.options)
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