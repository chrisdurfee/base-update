import { Component } from '../../base/base.js';
import { Button, P } from '../atoms/atoms.js';

export class ButtonGroup extends Component
{
	render()
	{
		return {
			class: 'button-group',
			nest:
			[
				P({
					onState: ['performance', (ele, state) =>
					{
						switch (state)
						{
							case 'fair':
								return 'This is just Fair';
							case 'good':
								return 'So Good!';
							case 'bad':
								return 'This is bad';
						}
					}]
				}),
				this.addButton('Bad', 'bad'),
				this.addButton('Good', 'good'),
				this.addButton('Fair', 'fair')
			]
		};
	}

	addButton(label, value)
	{
		return Button({
			click: () =>
			{
				this.state.set('performance', value)
			},
			label
		});
	}

	setupStates()
	{
		return {
			performance: 'fair'
		};
	}
}