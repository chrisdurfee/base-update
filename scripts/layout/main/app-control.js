import { Component } from '../../base/base.js';
import { MainNavigation } from './main-navigation.js';

export class AppControl extends Component
{
    onCreated()
    {
        this.timer = null;
    }

	render()
	{
		return {
			class: 'app-nav-container',
			onState: ['ignoreHover', {
				ignoreHover: true
            }],
            mouseout: () => {
                this.removeIgnore();
            },
			primary: new MainNavigation({
                options: this.options
            })
		};
    }

    removeIgnore()
    {
        window.clearTimeout(this.timer);

        this.timer = window.setTimeout(() =>
        {
            this.state.set('ignoreHover', false);
        }, 600);
    }

	setupStates()
	{
		this.stateTargetId = 'app-control';

		return {
            pinned: false,
            ignoreHover: false
		};
	}
}