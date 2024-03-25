import { H5 } from '@base-framework/atoms';
import { Atom, Data, Model } from '@base-framework/base';
import { A, Button, H2, Input, Label, MainSection, MainTitle, P } from '../atoms/atoms.js';
import { ButtonGroup } from '../organisms/button-group.js';
import { Card } from '../organisms/organisms.js';
import { Page } from './page.js';

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
		nest: children
	};
});

var urlBase = 'https://google.com/';

const ParentModel = Model.extend(
{
	url: urlBase + 'parent',

	xhr:
	{
		add(instanceParams, callBack)
		{
			let params = 'op=add' +
				'&' + this.setupObjectData();

			return this.request(params, instanceParams, callBack);
		}
	}
});

const TestModel = ParentModel.extend(
{
	url: urlBase + 'test',

	xhr:
	{
		add(instanceParams, callBack)
		{
			let params = 'op=addTest' +
				'&' + this.setupObjectData();

			return this.request(params, instanceParams, callBack);
		}
	}
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
		const name = {
			firstName: 'Bruce',
			lastName: 'W'
		};

		this.data = new Data(name);
		this.testModel = new TestModel(name);
	}

	render()
	{
		return MainSection(
		{
			class: 'home-page page',
			onState: [
				['loaded', {
					loaded: true
				}],
				['loaded', (val) =>
				{
					if(val === false)
					{
						return P({
							text: 'Not Loaded',
							nest: [
								Row([
									Button({
										click: () =>
										{
											this.toggleLoaded();
										}
									}, 'Change Loaded')
								])
							]
						});
					}

					return [
						MainTitle('Title'),
						{
							tag: 'section',
							class: 'body',
							row: Row([
								{ class: 'col'},
								{
									class: 'col',
									nest: [
										{
											class: 'container [[firstName]]',
											nest: [
												Card([
													H5('Property Watching'),
													Row([
														H2('[[firstName]] [[lastName]] is so cool.')
													])
												]),
												Card([
													H5('Property Bindnig'),
													Row([
														Label('First Name'),
														Input({ bind: 'firstName' })
													]),
													Row([
														Label('Last Name'),
														Input({ bind: 'lastName' })
													])
												]),
												Card([
													H5('State Component'),
													new ButtonGroup()
												]),
												Card([
													H5('Multi Property Watching'),
													Row([
														// new way
														A({href: 'https://google.com/[[firstName]]+[[lastName]]', target: '_blank'}, 'Saerch for: [[firstName]] [[lastName]] on Google')
													]),
													Row([
														// text watching
														P('I like the last name: [[lastName]] and the first name: [[firstName]]')
													])
												]),
												Card([
													H5('Filter Property Watching'),
													Row([
														// bind
														P({ bind: ['lastName', (value) => ' I like the last name: ' + value] })
													]),
												]),
												Card([
													H5('Actions'),
													Row([
														Button({ click: () => this.updateName() }, 'Change Name')
													]),
													Row([
														Button({ click: () => this.toggleLoaded() }, 'Change Loaded')
													]),
													Row([
														Button({ click: () => this.testModel.xhr.add('', (response) => console.log(response))}, 'Call Service')
													])
												])
											]
										}
									]
								}
							])
						}
					]
				}]
			]
		});
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