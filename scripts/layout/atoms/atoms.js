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
		class: props.class || 'bttn',
		click: props.click || null
	}, children);
});

export const MainSection = Atom((props, children) =>
{
	return Tag({
		tag: 'section',
		class: 'main-panel ' + (props.class || ''),
	}, children);
});

export const Header = Atom((props, children) => Tag(
{
	tag: 'header'
}, children));

export const H1 = Atom((props, children) => Tag(
{
	tag: 'h1',
}, children));

export const H2 = Atom((props, children) => Tag(
{
	tag: 'h2',
	...props,
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
	return Header({
		nest: [
			H1({
				text: props.text,
				watch: props.watch
			})
		]
	});
};

export const P = Atom((props, children) => Tag(
{
	tag: 'p'
}, children));

export const A = Atom((props, children) =>
{
	return Tag({
		tag: 'a',
		href: props.href || null,
		watch: props.watch || null
	}, children);
});

export const Label = Atom((props, children) =>
{
	return Tag({
		tag: 'label'
	}, children);
});

export const Input = Atom((props, children) =>
{
	return Tag({
		tag: 'input',
		type: props.type || 'text',
		placeholder: props.placeholder || null
	}, children);
});