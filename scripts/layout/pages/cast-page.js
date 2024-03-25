import { Div } from '@base-framework/atoms';
import { Page } from './page.js';

/**
 * CastPage
 *
 * This will create the cast page.
 */
export const CastPage = (props) => (
	new Page({ title: 'Cast' }, [
		Div({ class: 'row' }, [
			{ class: 'col'},
			{ class: 'col'}
		])
	])
);