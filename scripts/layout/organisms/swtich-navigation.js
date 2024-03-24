import { base } from '../../base/base.js';

/**
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 */
export class SwitchLink extends base.Component
{
	/**
	 * This will configure the link active class.
	 *
	 * @protected
	 */
	beforeSetup()
	{
		this.selectedClass = this.activeClass || 'selected';
	}

	render()
	{
		var href = this.href,
		text = this.label;

		var watchers = this.setupWatchers(href, text);

		var onState = {};
		onState[this.selectedClass] = true;

		return {
			tag: 'li',
			class: 'option',
			a: {
				tag: 'a',
				class: this.className || null,
				onState: ['selected', onState],
				href: this.getString(href),
				text: this.getString(text),
				nest: this.children,
				watch: watchers,
				cache: 'link'
			}
		};
	}

	/**
	 * This will get string.
	 *
	 * @param {string} string
	 * @return {(string|null)}
	 */
	getString(string)
	{
		return typeof string !== 'object'? string : null;
	}

	/**
	 * This will setup the watchers.
	 *
	 * @protected
	 * @param {string} href
	 * @param {string} text
	 * @return {array}
	 */
	setupWatchers(href, text)
	{
		var watchers = [];

		if(href && typeof href === 'object')
		{
			watchers.push(
			{
				attr: 'href',
				value: href
			});
		}

		if(text && typeof text === 'object')
		{
			watchers.push(
			{
				attr: 'text',
				value: text
			});
		}
		return watchers;
	}

	setupStates()
	{
		return {
			selected: false
		};
	}

	update(selected)
	{
		this.state.set('selected', selected);
	}
}

export class SwitchNavigation extends base.Component
{
	beforeSetup()
	{
        this.data = base.router.data;
		this.links = [];
	}

	beforeDestroy()
	{
		this.links = [];
	}

	render()
	{
		return {
			tag: 'nav',
			ul:
			{
				tag: 'ul',
                watch:
                {
					value: ['[[path]]', this.data],
					callBack: base.bind(this, this.updateLinks)
				},
				nest: this.addLinks()
			}
		};
	}

	afterSetup()
	{
		var path = this.data.get('path');
		this.updateLinks(null, path);
	}

	updateLinks(ele, value)
	{
		var check = false,
		links = this.links,
		firstLink = null;

		for(var i = 0, length = links.length; i < length; i++)
		{
			var link = links[i];
			if(link.rendered === false)
			{
				continue;
			}

			/* we want to save the first route in the switch
			so it can be selected if no route is active */
			if(i === 0)
			{
				firstLink = link;
			}

			if(check === true)
			{
				this.updateLink(link, false);
				continue;
			}

			check = value.indexOf(link.link.pathname) !== -1;
			this.updateLink(link, check);
		}

		if(check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	}

	updateLink(link, selected)
	{
		link.update(selected);
	}

	addLinks()
	{
		var links = [],
		options = this.options || [];

		for(var i = 0, length = options.length; i < length; i++)
		{
			var link = this.addLink(options[i]);
			this.links.push(link);
			links.push(link);
		}
		return links;
	}

	addLink(option)
	{
		return new SwitchLink(
        {
			text: option.text,
            href: option.href,
            children: option.children
		});
    }
}