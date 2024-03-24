import { A, Br, Button, Div, H1, H2, Header, Input, Label, Li, Nav, P, Span, Ul } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

export { A, Atom, Br, Button, Div, H1, H2, Header, Input, Label, Li, Nav, P, Span, Ul };

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

export const MainSection = Atom((props, children) =>
{
	return Tag({
		tag: 'section',
		class: 'main-panel ' + (props.class || ''),
		...props
	}, children);
});

export const MainTitle = (props) =>
{
	return Header([
		H1(props)
	]);
};