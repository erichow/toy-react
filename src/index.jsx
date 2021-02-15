// es6 语法
for (const item of ['hello', 'world!']) {
	document.body.append(item);
}

// 自制render
function render(el, parentElement) {
	parentElement.appendChild(el)
}

// 自制createElement
function createElement(tagName, attrs, ...children) {
	const el = document.createElement(tagName)
	for (const k in attrs) {
		el.setAttribute(k, attrs[k]);
	}
	el.append.apply(el, children);
	return el;
}

export const ReactDOM = {
	render
};

export const React = {
	createElement
};

ReactDOM.render(<div id="slogen">toy react</div>, document.getElementById('root'));