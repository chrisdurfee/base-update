import { Div, H5 } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { List } from '@base-framework/organisms';
import { Button } from '../../atoms/atoms.js';
import { Card } from '../../organisms/organisms.js';
import { Page } from '../page.js';

const Items = [
    {
        name: 'Item 1',
        description: 'This is the first item.'
    },
    {
        name: 'Item 2',
        description: 'This is the second item.'
    },
    {
        name: 'Item 3',
        description: 'This is the third item.'
    }
];

const Item = (item) => Div({ class: 'item flex' }, [
    Div({ class: 'name' }, item.name),
    Div({ class: 'description' }, item.description)
]);

/**
 * ItemList
 *
 * This will create the list of items.
 *
 * @returns {object}
 */
const ItemList = () => new List({
    cache: 'list',
    items: Items,
    rowItem: Item
});

/**
 * This will create a row.
 *
 * @param {object} props
 * @return {object}
 */
const Row = Atom((props, children) =>
{
	return {
		class: 'row',
		...props,
		children
	};
});

/**
 * This will create a group.
 *
 * @param {object} props
 * @returns {object}
 */
const Group = Atom((props, children) => (
	Card([
		H5(props.title),
		...children
	])
));

/**
 * ListPage
 *
 * This will create the cast page.
 *
 * @param {object} props
 * @returns {object}
 */
export const ListPage = (props) => (
	new Page({ title: 'List' }, [
		Div({ class: 'row' }, [
			Div({ class: 'col'}),
			Div({ class: 'col'}, [
                Group({ title: 'Actions' }, [
                    Row([
                        Button({ click: (e, parent) => parent.list.prepend(Items) }, 'Prepend'),
                        Button({ click: (e, parent) => parent.list.append(Items) }, 'Append'),
                        Button({ click: (e, parent) => parent.list.mingle(Items) }, 'Mingle'),
                    ])
                ]),
				ItemList()
			])
		])
	])
);