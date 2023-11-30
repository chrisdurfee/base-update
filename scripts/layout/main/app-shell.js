import { Component } from '../../base/base.js';
import { AppControl } from './app-control.js';

export class AppShell extends Component
{
	render()
	{
		return {
			class: 'app-container',
			nest:
			[
				new AppControl({
					options: this.options
				}),
				{
					class: 'active-panel-container',
					switch: this.routes,
					cache: 'mainBody'
				}
			]
		};
	}

	getBodyPanel()
	{
		return this.mainBody;
	}
}