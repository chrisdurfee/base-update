
import { Atom } from "@base-framework/base";

/**
 * This will create a card.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Card = Atom((props, children) => ({
    class: 'flex flex-auto flex-col rounded-lg border bg-card text-card-foreground shadow-sm my-4 mx-5 p-4',
    ...props,
    children
}));