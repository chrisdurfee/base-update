import { Component } from '../../base/base.js';
import { Atom } from '../../base/base.js';
import { Button, P } from '../atoms/atoms.js';

const Buttons = Atom((props, children) =>
{
	return {
		class: 'buttons',
		...props,
		children
	};
});

const StateButton = Atom((props, children) =>
{
	return Button({
		click: (e, {state}) => state.set('performance', props.value),
	}, props.label);
});

export class ButtonGroup extends Component
{
	render()
	{
		return Buttons([
			P({
				onState: ['performance', (state) =>
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
			StateButton({
				label: 'Bad',
				value: 'bad'
			}),
			StateButton({
				label: 'Good',
				value: 'good'
			}),
			StateButton({
				label: 'Fair',
				value: 'fair'
			})
		]);
	}

	setupStates()
	{
		return {
			performance: 'fair'
		};
	}
}