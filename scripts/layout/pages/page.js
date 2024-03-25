import { Section } from '@base-framework/atoms';
import { Component } from '@base-framework/base';
import { MainSection, MainTitle } from '../atoms/atoms.js';

/**
 * Page
 *
 * This will create a base page.
 *
 * @class
 */
export class Page extends Component
{
	/**
	 * This will render the component.
	 *
	 * @return {object}
	 * @override
	 */
	render()
	{
		return MainSection({ class: `${this.mainClass} page`}, [
			MainTitle(this.getTitle()),
			Section({ class: 'body' }, this.children)
		]);
	}

	/**
	 * This will setup the states.
	 *
	 * @return {object}
	 */
	setupStates()
	{
		return {
			loaded: true
		};
	}

	/**
	 * This will add a title.
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return this.title;
	}

	/**
	 * This will be called every time the route
	 * is activated.
	 *
	 * @param {object} params
	 */
	update(params)
	{

	}
}