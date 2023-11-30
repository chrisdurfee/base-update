import { MainSection, MainTitle } from '../atoms/atoms.js';
import { MainPanel } from './main-panel.js';

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