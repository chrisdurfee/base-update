import { H5 } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { A, Button, H2, Input, Label, P } from '../../atoms/atoms.js';
import { ButtonGroup } from '../../organisms/button-group.js';
import { Card } from '../../organisms/organisms.js';
import { TestModel } from './data/test-model.js';

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
 * This will create a group.
 *
 * @param {object} props
 * @returns {object}
 */
const Group = Atom((props, children) => (
	Card([
		H5(props.title),
		...children
	])
));

/**
 * SectionCards
 *
 * This will create the section cards.
 *
 * @param {object} props
 * @return {object}
 */
export const SectionCards = Atom((props) =>
{
	return [
		Group({ title: 'Property Watching' }, [
			Row([
				H2('[[firstName]] [[lastName]] is so cool.')
			])
		]),
		Group({ title: 'Property Bindnig' }, [
			Row([
				Label('First Name'),
				Input({ bind: 'firstName' })
			]),
			Row([
				Label('Last Name'),
				Input({ bind: 'lastName' })
			])
		]),
		Group({ title: 'State Component' }, [
			new ButtonGroup()
		]),
		Group({ title: 'Multi Property Watching' }, [
			Row([
				// new way
				A({href: 'https://google.com/[[firstName]]+[[lastName]]', target: '_blank'}, 'Saerch for: [[firstName]] [[lastName]] on Google')
			]),
			Row([
				// text watching
				P('I like the last name: [[lastName]] and the first name: [[firstName]]')
			])
		]),
		Group({ title: 'Filter Property Watching' }, [
			Row([
				// bind
				P({ bind: ['lastName', (value) => ' I like the last name: ' + value] })
			]),
		]),
		Group({ title: 'Actions' }, [
			Row([
				Button({ click: (e, { data }) => data.set({ firstName: 'Jeff', lastName: 'Bezos' }) }, 'Change Name')
			]),
			Row([
				Button({ click: () => props.loadedCallBack() }, 'Change Loaded')
			]),
			Row([
				Button({
					click: () =>
					{
						const model = new TestModel();
						model.xhr.add('', (response) => console.log(response));
					}
				}, 'Call Service'
				)
			])
		])
	];
});