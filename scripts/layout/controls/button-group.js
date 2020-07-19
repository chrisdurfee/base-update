import {base} from '../../base/base.js';
import {Button, P} from '../atoms/atoms.js';

export class ButtonGroup extends base.Component
{
	render()
	{
		return {
			className: 'button-group', 
			children: 
			[
				P({
					onState: ['performance', (ele, state) =>
					{
						switch(state)
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
			text: label,
			click: () =>
			{
				this.state.set('performance', value)
			}
		});
	} 

	setupStates()
	{
		return {
			performance: 'fair'
		};
	}
}