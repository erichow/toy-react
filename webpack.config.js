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
							plugins: ['@babel/plugin-transform-react-jsx']
						}
					}
				]
			}
		]
	},
	mode: 'development'
}