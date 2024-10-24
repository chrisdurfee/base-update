import { H1, Header, P, Section } from '@base-framework/atoms';
import { Atom, Component } from '@base-framework/base';
import { MainSection } from '../atoms/atoms.js';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = Atom(({ title, description}) => (
	Header({ class: 'sm:py-8 px-4 flex flex-col' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description),
	])
));

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
			PageHeader({
				title: this.getTitle(),
				description: this.description
			}),
			Section({ class: 'body full-container flex flex-auto flex-col ' }, this.children)
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