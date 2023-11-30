import { base } from '../../base/base.js';
import { MainNavigation } from './main-navigation.js';

export class AppControl extends base.Component
{
    onCreated()
    {
        this.timer = null;
    }

	render()
	{
		return {
			className: 'app-nav-container',
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