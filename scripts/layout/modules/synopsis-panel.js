import { MainSection, MainTitle } from '../atoms/atoms.js';
import { ButtonGroup } from '../controls/button-group.js';
import { Panel } from '../controls/panel.js';
import { Tab } from '../controls/tab.js';
import { MainPanel } from './main-panel.js';

const TabPanel = (props) =>
{
    return {
        label: props.label,
        href: props.link,
        component: new Panel(
        {
            text: props.text
        })
    };
};

export class SynopsisPanel extends MainPanel
{
	render()
	{
        const route = this.route;

		return MainSection(
            {
                class: 'synopsis-panel'
            },
            [
                MainTitle(['Synopsis [[page]]', route]),
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
                                        TabPanel({
                                            label: 'Story',
                                            link: 'synopsis/story',
                                            text: 'this would tell about the story'
                                        }),
                                        TabPanel({
                                            label: 'Book',
                                            link: 'synopsis/book',
                                            text: 'dud this come from a book?'
                                        }),
                                        TabPanel({
                                            label: 'Concepts',
                                            link: 'synopsis/concepts',
                                            text: ''
                                        }),
                                        TabPanel({
                                            label: 'More',
                                            link: 'synopsis/more',
                                            text: 'More...'
                                        }),
                                        {
                                            label: 'Super Tab',
                                            href: 'synopsis/super',
                                            uri: 'synopsis/super*',
                                            component: new Panel(
                                            {
                                                nest:
                                                [
                                                    {
                                                        text: 'before tab',
                                                        buttons: new ButtonGroup()
                                                    },
                                                    new Tab(
                                                    {
                                                        options: [
                                                            TabPanel({
                                                                label: 'Story',
                                                                link: 'synopsis/super/first',
                                                                text: 'First'
                                                            }),
                                                            TabPanel({
                                                                label: 'Book',
                                                                link: 'synopsis/super/second',
                                                                text: 'Second'
                                                            })
                                                        ]
                                                    }),
                                                    {
                                                        text: 'after tab'
                                                    },
                                                    new Tab(
                                                    {
                                                        options: [
                                                            TabPanel({
                                                                label: 'Third',
                                                                link: 'synopsis/super/third',
                                                                text: 'Third'
                                                            }),
                                                            TabPanel({
                                                                label: 'Fourth',
                                                                link: 'synopsis/super/fourth',
                                                                text: 'Fourth'
                                                            })
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
        );
    }
}