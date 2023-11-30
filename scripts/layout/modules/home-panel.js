import { Atom, Data, Model } from '../../base/base.js';
import { A, Button, H2, Input, Label, MainSection, MainTitle, P } from '../atoms/atoms.js';
import { ButtonGroup } from '../controls/button-group.js';
import { MainPanel } from './main-panel.js';

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
 * HomePanel
 *
 * This will create a home panel.
 * @class
 */
export class HomePanel extends MainPanel
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
			class: 'home-panel',
			onState: [
				['loaded', {
					loaded: true
				}],
				['loaded', (ele, val) =>
				{
					if(val === false)
					{
						return P({
							text: 'Not Loaded',
							nest: [
								Row({
									nest: [
										Button({
											text: 'Change Loaded',
											click: () =>
											{
												this.toggleLoaded();
											}
										})
									]
								})
							]
						});
					}

					return [
						MainTitle({
							text: 'Title'
						}),
						{
							tag: 'section',
							class: 'body',
							row: Row(
							{
								nest:
								[
									{ class: 'col'},
									{
										class: 'col',
										nest: [
											new ButtonGroup(),
											{
												class: 'container',
												nest: [
													Row({
														nest: [
															H2({
																watch: '[[firstName]] [[lastName]] is so cool.'
															})
														]
													}),
													Row({
														nest: [
															Label({
																text: 'First Name'
															}),
															Input({
																bind: 'firstName'
															})
														]
													}),
													Row({
														nest: [
															Label({
																text: 'Last Name'
															}),
															Input({
																bind: 'lastName'
															})
														]
													}),
													Row({
														nest: [
															A({
																bind: ['href:firstName', 'https://google.com/[[value]]'],
																watch: 'Search [[firstName]] [[lastName]]'
															})
														]
													}),
													Row({
														nest: [
															P({
																bind: ['lastName', (value) =>
																{
																	return ' I like the last name: ' + value;
																}]
															})
														]
													}),
													Row({
														nest: [
															Button({
																text: 'Change Name',
																click: () =>
																{
																	this.updateName();
																}
															})
														]
													}),
													Row({
														nest: [
															Button({
																text: 'Change Loaded',
																click: () =>
																{
																	this.toggleLoaded();
																}
															})
														]
													}),
													Row({
														nest: [
															Button({
																text: 'Call Service',
																click: () =>
																{
																	console.log(this.testModel)
																	this.testModel.xhr.add('', (response) =>
																	{
																		console.log(response);
																	});
																}
															})
														]
													})
												]
											}
										]
									}
								]
							})
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

	addButton(label, value)
	{
		return Button({
			text: label,
			click: () =>
			{
				this.state.set('performance', value)
			}
		});
	}
}