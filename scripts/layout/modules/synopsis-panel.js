import { MainSection, MainTitle } from '../atoms/atoms.js';
import { ButtonGroup } from '../controls/button-group.js';
import { Panel } from '../controls/panel.js';
import { Tab } from '../controls/tab.js';
import { MainPanel } from './main-panel.js';

export class SynopsisPanel extends MainPanel
{
	render()
	{
        var route = this.route;

		return MainSection(
		{
			class: 'synopsis-panel',
			nest:
			[
				MainTitle({
                    text: 'Synopsis',
					watch: {
                        value: ['Synopsis [[page]]', route]
                    }
                }),
				{
					tag: 'section',
					class: 'body',
					row:
					{
						class: 'row',
						nest:
						[
							{ class: 'col'},
							{
                                class: 'col',
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