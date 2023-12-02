import { MainSection, MainTitle } from '../atoms/atoms.js';
import { MainPanel } from './main-panel.js';

export class CastPanel extends MainPanel
{
	render()
	{
		return MainSection({ class: 'cast-panel'}, [
			MainTitle('Cast'),
			{
				tag: 'section',
				class: 'body',
				row:
				{
					class: 'row',
					nest:
					[
						{ class: 'col'},
						{ class: 'col'}
					]
				}
			}
		]);
	}
}