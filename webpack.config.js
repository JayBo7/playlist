const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	entry: path.join(__dirname, '/src/client/index.jsx'),
	mode: 'development',
	module: {
		rules: [
			{
				test: [/\.jsx?$/],
	      exclude: /node_modules/,
	      use: {
	      	loader: 'babel-loader',
	      	options: {
	      		presets: ['@babel/preset-env', '@babel/preset-react']
	      	}
	      }
			}
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'files/dist')
	},
	plugins: [
        new BundleTracker({filename: './app/webpack-stats.json'}),
    ],
}