const path = require('path');

module.exports = {
	entry: {
		main: './src/index.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							// 解析JSX语法时用createElement代替React.createElement
							plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement'}]]
						}
					}
				]
			}
		]
	},
	mode: 'development'
}