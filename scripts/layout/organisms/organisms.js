
import { Atom } from "@base-framework/base";

/**
 * This will create a card.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Card = Atom((props, children) => ({
    class: 'card',
    ...props,
    children
}));