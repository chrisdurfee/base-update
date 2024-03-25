import { Div, H5, Section } from '@base-framework/atoms';
import { Atom, Data } from '@base-framework/base';
import { Button, MainSection, MainTitle } from '../../atoms/atoms.js';
import { Card } from '../../organisms/organisms.js';
import { Page } from '../page.js';
import { SectionCards } from './cards.js';

/**
 * This will create a row.
 *
 * @param {object} props
 * @return {object}
 */
const Row = Atom((props, children) =>
{
	return {
		class: 'row',
		...props,
		children
	};
});

/**
 * LoadingCard
 *
 * This will create a loading card.
 *
 * @param {object} props
 * @return {object}
 */
const LoadingCard = Atom((props) =>
{
	return Card([
		H5('Loading...'),
		Row([
			Button({ click: () => props.loadedCallBack() }, 'Change Loaded')
		])
	]);
});

/**
 * HomePage
 *
 * This will create a home page.
 *
 * @class
 */
export class HomePage extends Page
{
	onCreated()
	{
		this.data = new Data({
			firstName: 'Bruce',
			lastName: 'W'
		});
	}

	render()
	{
		return MainSection({ class: 'home-page page', onState: ['loaded', { loaded: true }]}, [
			MainTitle('Title'),
			Section({ class: 'body' }, [
				Row([
					{ class: 'col'},
					Div({
						class: 'col',
						onState: ['loaded', (val) =>
						{
							if (val === false)
							{
								return LoadingCard({
									loadedCallBack: () => this.toggleLoaded()
								});
							}

							return Div({ class: 'container [[firstName]]' }, [
								SectionCards({
									loadedCallBack: () => this.toggleLoaded(),
								})
							]);
						}]
					})
				])
			])
		]);
	}

	setupStates()
	{
		return {
			loaded: true
		};
	}

	toggleLoaded()
	{
		this.state.toggle('loaded');
	}

	updateName()
	{
		this.data.set({
			firstName: 'Jeff',
			lastName: 'Bezos'
		});
	}
}