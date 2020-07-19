import {base} from '../../base/base.js';
import {P} from '../atoms/atoms.js';

export class Panel extends base.Component
{
	render() 
	{ 
		return { 
            className: 'panel',
            text: P({
                text: this.text
            }), 
            children: this.children
        };
	}
}