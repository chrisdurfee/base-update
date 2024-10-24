import { Div, Form, H1, Input, Li, Ul } from '@base-framework/atoms';
import { Data, Pod } from '@base-framework/base';
import { Button } from '../../atoms/buttons/buttons.js';

export const ToDoApp = Pod((self) =>
{
	self.setData = () => new Data({ items: [] });

	// handle form submission
    const handleSubmit = (event, { data }) =>
    {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');

        // add the new to-do item to the array of items
        data.push('items', input.value);
        input.value = '';
    };

    // handle item removal
    const handleRemove = (index, data) => data.splice('items', index);

	return () => Div({ class: 'flex flex-auto flex-col' }, [
        H1({ class: 'flex text-2xl font-bold tracking-tight mb-4' }, 'To-Do App'),
        Form({ class: 'flex flex-row gap-4', submit: handleSubmit }, [
            Input({ placeholder: 'Add a new item' }),
            Button({ type: 'submit' }, 'Add')
        ]),
        Ul({
            for: ['items', (text, index) => Li({
                class: 'flex flex-row justify-between items-center max-w-72 m-2 p-2',
                text,
                button: Button({ click: (e, { data }) => handleRemove(index, data) }, 'Remove')
            })]
        })
    ])
});