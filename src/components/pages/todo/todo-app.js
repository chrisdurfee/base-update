import { Div, Form, H1, I, Input, Li, Ul } from '@base-framework/atoms';
import { Data, Pod } from '@base-framework/base';
import { Button } from '@base-framework/ui/atoms';
import { Icons } from '@base-framework/ui/icons';

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
        H1({ class: 'flex flex-auto text-2xl font-bold tracking-tight mb-4' }, 'To-Do App'),
        Form({ class: 'flex flex-auto flex-row gap-4 mb-6', submit: handleSubmit }, [
            Input({ class: 'flex flex-auto', placeholder: 'Add a new item' }),
            Button({ type: 'submit' }, 'Add')
        ]),
        Ul({
            class: 'flex flex-auto flex-col gap-2',
            for: ['items', (text, index) => Li({
                class: 'flex flex-auto flex-row justify-between items-center border rounded-md p-2 text-muted-foreground',
                text,
                button: Button({ variant: 'outline', click: (e, { data }) => handleRemove(index, data) }, [
                    I({ html: Icons.trash })
                ])
            })]
        })
    ])
});