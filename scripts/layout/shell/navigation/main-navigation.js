import { A, Div } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import { PrimaryNavigation } from "../../components/organisms/navigation/primary-navigation.js";

/**
 * This will create the main navigation.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const Navigation = Atom((props, children) =>
{
	props.class = 'main-navigation nav-container';

	return {
		...props,
		children
	};
});

/**
 * This will create a logo.
 *
 * @param {object} props
 * @return {object}
 */
const Logo = Atom((props, children) =>
{
	return A(
	{
		class: 'logo',
		href: './',
		...props,
		children
	});
});

/**
 * MainNavigation
 *
 * This will create the main navigation.
 *
 * @class
 */
export class MainNavigation extends Component
{
	/**
	 * This will render the component.
	 *
	 * @return {object}
	 */
	render()
	{
		return Navigation([
			Logo(),
			Div({ class: 'nav-container' }, [
				new PrimaryNavigation(
				{
					options: this.options,
					appNav: this.parent.panel
				})
			])
		]);
	}
}