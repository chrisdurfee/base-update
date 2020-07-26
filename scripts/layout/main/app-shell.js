import {base} from '../../base/core.js';
import {AppControl} from './app-control.js';

export class AppShell extends base.Component
{
	render()
	{
		return {
			className: 'app-container',
			children:
			[
				new AppControl({
					options: this.options
				}),
				{
					className: 'active-panel-container',
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