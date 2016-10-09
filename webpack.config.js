'use strict'

const webpack = require('webpack');

const ignoreNativeRequire = (function () {
		const IGNORES = [
		'electron',
		'remote',
		'fs'
		];
		return function (context, request, callback) {
			if (IGNORES.indexOf(request) >= 0) {
				return callback(null, "require('" + request + "')");
			}
			return callback();
		};
	})();

process.env.NODE_ENV = 'production'

module.exports = [{
	entry: "./src/ui/main.js",
	output: {
		path: './dist',
		filename: "ui.js",
		sourceMapFilename: "ui.js.map"
	},
	devtool: "source-map",
	module: {
		loaders: [
		{ test: /\.jsx$/, loader: 'babel', exclude: /node_modules/},
		{ test: /\.js$/, loader: 'babel', exclude: /node_modules/},
		{ test: /\.scss$/, loaders: ["style", "css", "sass"] }
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	externals: [ ignoreNativeRequire ]
},
{
	entry: "./src/app/main.js",
	output: {
		path: './dist',
		filename: "app.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/},
		]
	},
	target: 'node',
	node: {
		__dirname: false
	},
	externals: [ ignoreNativeRequire ]
}]