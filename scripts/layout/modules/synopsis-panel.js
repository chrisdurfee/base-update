import {MainPanel} from './main-panel.js';
import {MainTitle, MainSection} from '../atoms/atoms.js';
import {Tab} from '../controls/tab.js';
import {Panel} from '../controls/panel.js';
import {ButtonGroup} from '../controls/button-group.js';

export class SynopsisPanel extends MainPanel
{
	render()
	{
        var route = this.route;

		return MainSection(
		{
			className: 'synopsis-panel',
			children:
			[
				MainTitle({
                    text: 'Synopsis',
					watch: {
                        value: ['Synopsis [[page]]', route]
                    }
                }),
				{
					tag: 'section',
					className: 'body',
					row:
					{
						className: 'row',
						children:
						[
							{ className: 'col'},
							{
                                className: 'col',
                                tab: new Tab(
                                {
                                    options: [
                                        //this.createTab('Synopsis', 'synopsis', 'what would be the Synopsis?'),
                                        this.createTab('Story', 'synopsis/story', 'this would tell about the story'),
                                        this.createTab('Book', 'synopsis/book', 'did thhis come from a book?'),
                                        this.createTab('Concepts', 'synopsis/concepts', ''),
                                        this.createTab('More', 'synopsis/more', 'More...'),
                                        {
                                            label: 'Super Tab',
                                            href: 'synopsis/super',
                                            uri: 'synopsis/super*',
                                            component: new Panel(
                                            {
                                                children:
                                                [
                                                    {
                                                        text: 'before tab',
                                                        buttons: new ButtonGroup()
                                                    },
                                                    new Tab(
                                                    {
                                                        options: [
                                                            this.createTab('Story', 'synopsis/super/first', 'First'),
                                                            this.createTab('Book', 'synopsis/super/second', 'Second')
                                                        ]
                                                    }),
                                                    {
                                                        text: 'after tab'
                                                    },
                                                    new Tab(
                                                    {
                                                        options: [
                                                            this.createTab('Third', 'synopsis/super/thirds', 'another tab'),
                                                            this.createTab('Fourth', 'synopsis/super/fourth', 'too many tabs')
                                                        ]
                                                    }),
                                                    {
                                                        text: 'after both tabs'
                                                    }
                                                ]
                                            })
                                        }
                                    ]
                                })
                            }
						]
					}
				}
			]
		});
    }

    createTab(label, link, text)
    {
        return {
            label,
            href: link,
            component: new Panel(
            {
                text: text
            })
        };
    }
}