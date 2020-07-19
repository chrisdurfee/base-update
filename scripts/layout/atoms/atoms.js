import {Atom} from '../../base/base.js'; 

export const Tag = Atom.extend((props) =>
{
	return { 
		className: props.className || null,
		onState: props.onState || null,
		onSet: props.onSet || null,
		bind: props.bind || null,
		watch: props.watch || null,
		innerHTML: props.innerHTML || null,
		text: props.text || null,
		children: props.children
	};
});

export const Video = Tag.extend((props) =>
{
	return { 
		tag: 'video',
		innerHTML: '<source src="' + props.src + '"></source>',
		autoplay: true,
		muted: true,
		loop: true
	};
}); 

export const Button = Tag.extend((props) =>
{
	return { 
		tag: 'button',
		className: props.className || 'bttn',
		click: props.click || null
	};
});

export const MainSection = Tag.extend((props) =>
{
	return { 
		tag: 'section',
		className: 'main-panel ' + (props.className || ''),
	};
});

export const Header = Tag.extend(
{ 
	tag: 'header'
});

export const H1 = Tag.extend(
{ 
	tag: 'h1'
});

export const H2 = Tag.extend(
{ 
	tag: 'h2'
}); 

export const Span = Tag.extend((props) =>
{
	return {
		tag: 'span'
	};
});

export const Br = function()
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

export const P = Tag.extend(
{ 
	tag: 'p'
});

export const A = Tag.extend((props) =>
{
	return { 
		tag: 'a', 
		href: props.href || null, 
		watch: props.watch || null
	};
});

export const Label = Tag.extend((props) =>
{
	return { 
		tag: 'label'
	};
});

export const Input = Tag.extend((props) =>
{
	return { 
		tag: 'input', 
		type: props.type || 'text',
		placeholder: props.placeholder || null
	};
});