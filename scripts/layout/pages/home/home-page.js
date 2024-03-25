import { Div, H5 } from '@base-framework/atoms';
import { Atom, Data } from '@base-framework/base';
import { Button } from '../../atoms/atoms.js';
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
 * This will create the page data.
 *
 * @returns {object}
 */
const data = () => (new Data({
	firstName: 'Bruce',
	lastName: 'W'
}));

/**
 * This will create the home page.
 *
 * @param {object} props
 * @returns {object}
 */
export const HomePage = (props) => (
	new Page({ mainClass: 'home-page', title: 'Title', data: data()}, [
		Div({ class: 'row' }, [
			Div({ class: 'col'}),
			Div({
				class: 'col',
				onState: ['loaded', (val, ele, parent) =>
				{
					const props = { loadedCallBack: () => parent.state.toggle('loaded') };

					if (val === false)
					{
						return LoadingCard(props);
					}

					return Div({ class: 'container [[firstName]]' }, [
						SectionCards(props)
					]);
				}]
			})
		])
	])
);