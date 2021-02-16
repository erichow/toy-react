import isClass from 'is-class';

function render(el, parentElement) {
	let range = document.createRange();
	range.setStart(parentElement, 0);
	range.setEnd(parentElement, parentElement.childNodes.length);
	range.deleteContents();
	range.insertNode(el)
	// parentElement.appendChild(el);
}

function createElementByHooks(Hooks, props, children) {
	props = props || Object.create(null);
	props.children = children;
	return Hooks(props);
}

function createElementByClass(Klass, props, children) {
	props = props || Object.create(null);
	props.children = children;
	const el = new Klass(props).render();
	return el;
}

function createElementByTagName(tagName, attrs, children) {
	const el = document.createElement(tagName);
	for (const k in attrs) {
		el.setAttribute(k, attrs[k]);
	}
	el.append.apply(el, children);
	return el;
}

// 长函数（超过十行）-- 代码之丑  https://time.geekbang.org/column/article/327424
function createElement(type, attrs, ...children) {
	if (typeof type === 'string') {
		return  createElementByTagName(type, attrs, children);
	}
	if (isClass(type)) {
		return createElementByClass(type, attrs, children);
	}
	if (typeof type === 'function') {
		return createElementByHooks(type, attrs, children);
	}
}

class Component {
	constructor(props) {
		this.props = props;
		this.state = {};
	}
}

export const ReactDOM = {
	render
};

export const React = {
	createElement,
	Component,
};




function App(props) {
	return <div>
		{ props.children }
		<HelloWorld id="slogen" />
	</div>
}

function HelloWorld(props) {
	return <div class={props.id}>toy react</div>
}

class MyComponent extends Component {
	render() {
		return <div>
			{this.props.children}
			<Child content="abc" />
		</div>
	}
}

class Child extends Component {
	render() {
		return <div id="slogen">toy react {this.props.content} </div>
	}
}

ReactDOM.render(
	<MyComponent>hi !</MyComponent>, 
	document.getElementById('root')
);
