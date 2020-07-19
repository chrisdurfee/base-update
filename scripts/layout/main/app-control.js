import {base} from '../../base/core.js'; 
import {MainNavigation} from './main-navigation.js';

export class AppControl extends base.Component
{ 
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

    timer = null;
    
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