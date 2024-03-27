import { Button, Div, Form, H1, Input, Li, Ul } from '@base-framework/atoms';
import { Data, Pod } from '@base-framework/base';

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

	return () => Div([
        H1('To-Do App'),
        Form({ submit: handleSubmit }, [
            Input({ placeholder: 'Add a new item' }),
            Button({ type: 'submit' }, 'Add')
        ]),
        Ul({
            for: ['items', (text, index) => Li({
                text,
                button: Button({ click: (e, { data }) => handleRemove(index, data) }, 'Remove')
            })]
        })
    ])
});