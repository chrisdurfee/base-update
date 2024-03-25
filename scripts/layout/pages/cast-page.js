import { Div, Section } from '@base-framework/atoms';
import { MainSection, MainTitle } from '../atoms/atoms.js';
import { Page } from './page.js';

export class CastPage extends Page
{
	render()
	{
		return MainSection({ class: 'cast-page page'}, [
			MainTitle('Cast'),
			Section({ class: 'body' }, [
				Div({ class: 'row' }, [
					{ class: 'col'},
					{ class: 'col'}
				])
			])
		]);
	}
}