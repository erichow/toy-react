// es6 语法
for (const item of ['hello', 'world!']) {
	document.body.append(item);
}

// 自制render
function render(el, parentElement) {
	parentElement.appendChild(el)
}

// 自制hooks函数
function createHooks(fn, props, children) {
	props = props || Object.create(null);
	props.children = children;
	return fn(props);
}

// 自制createElement
function createElement(tagName, attrs, ...children) {
	const el = typeof tagName === 'function' ? createHooks(tagName, attrs, children) : document.createElement(tagName)
	for (const k in attrs) {
		el.setAttribute(k, attrs[k]);
	}
	el.append.apply(el, children);
	return el;
}

function App() {
	return <HelloWorld id="slogen" />
}

function HelloWorld(props) {
	return <div id={props.id}>toy react</div>
}

export const ReactDOM = {
	render
};

export const React = {
	createElement
};

ReactDOM.render(<App />, document.getElementById('root'));