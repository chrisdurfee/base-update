import { Button, Div, Form, H1, Input, Li, Ul } from '@base-framework/atoms';
import { Data, Pod } from '@base-framework/base';

export const PodToDoApp = Pod((self) =>
{
	self.data = new Data({ items: [] });

	self.created = () => {

	};

	self.setStates = () => ({
		loaded: true
	});

	self.before = () =>
	{
		console.log('Mounted');
	};

	self.after = () =>
	{
		console.log('after');
	};

	self.destroy = () =>
	{
		console.log('after');
	};

    // handle form submission
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');

        // add the new to-do item to the array of items
        self.data.push('items', input.value);
        input.value = '';
    };

    // handle item removal
    const handleRemove = (index) => self.data.splice('items', index);

	return () => Div([
		H1('To-Do App'),
		Form({ submit:handleSubmit }, [
			Input({ placeholder: 'Add a new item' }),
			Button({ type: 'submit' }, 'Add')
		]),
		Ul({
			for: [self.data, 'items', (text, index) => Li({
				text,
				button: Button({ click: () => handleRemove(index) }, 'Remove')
			})]
		})
	])
});