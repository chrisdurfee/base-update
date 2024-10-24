import { Div, H5 } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { List } from '@base-framework/organisms';
import { Button } from '../../atoms/buttons/buttons.js';
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

const Item = (item) => Div({ class: 'item flex flex-auto flex-row gap-4' }, [
    Div({ class: 'flex name' }, item.name),
    Div({ class: 'flex flex-auto description' }, item.description)
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
    key: 'name',
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
        class: 'inline-flex flex-auto flex-row gap-2 items-center',
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
	Div({ class: 'flex flex-row' }, [
		H5({ class: 'flex flex-auto text-2xl font-bold mb-2' }, props.title),
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
		Div({ class: 'row flex flex-auto flex-row' }, [
			Div({ class: 'col flex flex-auto flex-col p-4'}, [
                Group({ title: 'Actions' }, [
                    Row([
                        Button({ click: (e, parent) => parent.list.prepend([
                            { name: 'Prepend 1', description: 'This is prepend 1.' },
                            { name: 'Prepend 2', description: 'This is prepend 2.' }
                        ]) }, 'Prepend'),
                        Button({ click: (e, parent) => parent.list.append([
                            { name: 'Append 1', description: 'This is append 1.' },
                            { name: 'Append 2', description: 'This is append 2.' }
                        ]) }, 'Append'),
                        Button({ click: (e, parent) => parent.list.mingle([
                            { name: 'Mingle 1', description: 'This is mingle 1.' },
                            { name: 'Mingle 2', description: 'This is mingle 2.' }
                        ]) }, 'Mingle'),
                    ])
                ]),
				ItemList()
			])
		])
	])
);