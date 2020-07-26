import {MainPanel} from './main-panel.js';
import {MainTitle, MainSection} from '../atoms/atoms.js';

export class CastPanel extends MainPanel
{
	render()
	{
		return MainSection(
		{
			className: 'cast-panel',
			children:
			[
				MainTitle({
					text: 'Cast'
				}),
				{
					tag: 'section',
					className: 'body',
					row:
					{
						className: 'row',
						children:
						[
							{ className: 'col'},
							{ className: 'col'}
						]
					}
				}
			]
		});
	}
}