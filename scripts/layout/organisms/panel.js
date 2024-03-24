import { Div, P } from '@base-framework/atoms';
import { Component } from '@base-framework/base';

/**
 * Panel
 *
 * This will create a panel.
 *
 * @class
 * @extends Component
 */
export class Panel extends Component
{
    /**
     * This will render the component.
     *
     * @return {object}
     */
	render()
	{
		return Div( { class: 'panel' }, [
            P(this.text),
            ...(this.children || this.nest || [])
        ]);
	}
}