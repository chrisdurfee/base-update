import { Atom } from '../../base/base.js';

export const Tag = Atom((props, children) =>
{
	return {
		class: props.class,
		nest: children,
	};
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
		className: props.className || 'bttn',
		click: props.click || null
	});
});

export const MainSection = Atom((props, children) =>
{
	return Tag({
		tag: 'section',
		className: 'main-panel ' + (props.className || ''),
	});
});

export const Header = Atom((props, children) => Tag(
{
	tag: 'header'
}));

export const H1 = Atom((props, children) => Tag(
{
	tag: 'h1'
}));

export const H2 = Atom((props, children) => Tag(
{
	tag: 'h2'
}));

export const Span = Atom((props, children) =>
{
	return Tag({
		tag: 'span'
	});
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
		children: [
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
}));

export const A = Atom((props, children) =>
{
	return Tag({
		tag: 'a',
		href: props.href || null,
		watch: props.watch || null
	});
});

export const Label = Atom((props, children) =>
{
	return Tag({
		tag: 'label'
	});
});

export const Input = Atom((props, children) =>
{
	return Tag({
		tag: 'input',
		type: props.type || 'text',
		placeholder: props.placeholder || null
	});
});