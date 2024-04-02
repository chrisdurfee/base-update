import { Div } from '@base-framework/atoms';
import { ButtonGroup } from '../../organisms/button-group.js';
import { Panel } from '../../organisms/panel.js';
import { Tab } from '../../organisms/tab.js';
import { Page } from '../page.js';

/**
 * This will create a tab panel.
 *
 * @param {object} props
 * @returns {object}
 */
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

/**
 * This will create the section tabs.
 *
 * @returns {object}
 */
const SectionTabs = () =>
{
    return new Tab(
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
                component: new Panel([
                    Div('before tab'),
                    new ButtonGroup(),
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
                    Div('after tab'),
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
                    Div('after both tabs')
                ])
            }
        ]
    });
};

/**
 * This will set the title to use the route to watch.
 *
 * @returns {array}
 */
function getTitle()
{
    return ['Synopsis [[page]]', this.route]
}

/**
 * CastPage
 *
 * This will create the cast page.
 *
 * @param {object} props
 * @returns {object}
 */
export const SynopsisPage = (props) => (
	new Page({ mainClass: 'synopsis-page', getTitle }, [
		Div({ class: 'row' }, [
			Div({ class: 'col'}),
			Div({ class: 'col'}, [
                SectionTabs()
            ])
		])
	])
);