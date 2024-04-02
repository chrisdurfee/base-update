import { Button, Div, Form, H1, Input, Li, Ul } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';

export const ToDoApp = Jot(
{
	setData(){ new Data({ items: [] })},

	// handle form submission
    handleSubmit(event)
    {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');

        // add the new to-do item to the array of items
        this.data.push('items', input.value);
        input.value = '';
    },

    // handle item removal
    handleRemove(index){ this.data.splice('items', index)},

	render()
    {
        return Div([
            H1('To-Do App'),
            Form({ submit: (e) => this.handleSubmit(e) }, [
                Input({ placeholder: 'Add a new item' }),
                Button({ type: 'submit' }, 'Add')
            ]),
            Ul({
                for: ['items', (text, index) => Li({
                    text,
                    button: Button({ click: () => this.handleRemove(index) }, 'Remove')
                })]
            })
        ]);
    }
});