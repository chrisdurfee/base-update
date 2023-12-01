import { Atom } from '../../base/base.js';

export const Tag = Atom((props, children) =>
{
	return {...props, children};
});

export const Video = Atom((props) =>
{
	return Tag({
		tag: 'video',
		html: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true
	});
});

export const Button = Atom((props, children) =>
{
	return Tag({
		tag: 'button',
		...props,
	}, children);
});

export const MainSection = Atom((props, children) =>
{
	return Tag({
		tag: 'section',
		class: 'main-panel ' + (props.class || ''),
		...props
	}, children);
});

export const Header = Atom((props, children) => Tag(
{
	tag: 'header',
	...props,
}, children));

export const H1 = Atom((props, children) =>
{
	return Tag(
	{
		tag: 'h1',
		...props,
	}, children);
});

export const H2 = Atom((props, children) => Tag(
{
	...props,
	tag: 'h2',
}, children));

export const Span = Atom((props, children) =>
{
	return Tag({
		tag: 'span',
		...props
	}, children);
});

export const Br = () =>
{
	return {
		tag: 'br'
	};
};

export const MainTitle = (props) =>
{
	return Header([
		H1(props)
	]);
};

export const P = Atom((props, children) => Tag(
{
	tag: 'p',
	...props,
}, children));

export const A = Atom((props, children) =>
{
	return Tag({
		tag: 'a',
		...props,
	}, children);
});

export const Label = Atom((props, children) =>
{
	return Tag({
		tag: 'label',
		...props,
	}, children);
});

export const Input = Atom((props, children) =>
{
	return Tag({
		tag: 'input',
		...props,
	}, children);
});