import { Div } from '@base-framework/atoms';
import { Page } from './page.js';
import { ToDoApp } from './todo/todo-app.js';

/**
 * CastPage
 *
 * This will create the cast page.
 *
 * @param {object} props
 * @returns {object}
 */
export const CastPage = (props) => (
	new Page({ title: 'Cast' }, [
		Div({ class: 'row' }, [
			Div({ class: 'col'}),
			Div({ class: 'col'}, [
				new ToDoApp()
			])
		])
	])
);