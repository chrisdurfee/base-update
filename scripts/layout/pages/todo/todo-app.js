import { Button, Div, Form, H1, Input, Li, Ul } from '@base-framework/atoms';
import { Component, Data } from '@base-framework/base';

/**
 * Pods
 *
 * Pods are components that are created using a shorthand method.
 *
 * @author Chris Durfee
 * @author Cayon Christiansen
 */
const getDefaultMethods = () => (
{
    created() {},
    setData() {
        return null;
    },
    onCreated() {
        this.created();

        if (this.data)
        {
            return;
        }

        const data = this.setData();
        if (data)
        {
            this.data = data;
        }
    },

    setStates() {},
    setupStates () {
        return this.setStates();
    },

    events() {
        return [];
    },
    setupEvents() {
        return this.events();
    },

    before() {},
    beforeSetup() {
        this.before();
    },

    after() {},
    afterSetup() {
        this.after();
    },

    destroy() {},
    beforeDestroy() {
        this.destroy();
    }
});

/**
 * This will modify the methods to convert the shorthand
 * methods to the full methods.
 *
 * @param {object} component
 * @returns {object}
 */
const modifyMethods = (component) =>
{
    const methods = Object.assign(getDefaultMethods(), component);
    Object.assign(component.prototype, methods);

    return component;
};

/**
 * This will create a class.
 *
 * @param {object} Base
 * @returns {object}
 */
const createClass = (Base) =>
{
    return class extends Base {}
};

/**
 * This will create a pod component.
 *
 * @param {function} callBack
 * @returns {object}
 */
export const Pod = (callBack) =>
{
    if (!callBack)
    {
        return null;
    }

    const component = createClass(Component);

    /**
     * This will call the callback function and pass the component
     * to set up the component.
     *
     * The result is the render method.
     */
    const render = callBack(component);

    /**
     * This will modify the methods to convert the shorthand
     * methods to the full methods.
     */
    modifyMethods(component);

    component.prototype.render = render;
    return component;
};

export const PodToDoApp = Pod((self) =>
{
	self.created = () =>
    {
        console.log('created');
	};

    self.setData = () => new Data({ items: [] });

	self.setStates = () => ({
		loaded: true
	});

	self.before = () =>
	{
		console.log('before');
	};

	self.after = () =>
	{
		console.log('after');
	};

	self.destroy = () =>
	{
		console.log('destroy');
	};

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