import { base } from '../../base/base.js';
import { P } from '../atoms/atoms.js';

export class Panel extends base.Component
{
	render()
	{
		return {
            class: 'panel',
            text: P(this.text),
            nest: this.children
        };
	}
}