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
	new Page({ title: '' }, [
		Div({ class: 'row flex flex-auto flex-col' }, [
			Div({ class: 'col flex flex-auto flex-col p-4'}, [
				new ToDoApp()
			])
		])
	])
);