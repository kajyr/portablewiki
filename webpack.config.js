var webpack = require('webpack');

var ignoreNativeRequire = (function () {
		var IGNORES = [
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

module.exports = [{
	entry: "./src/ui/main.jsx",
	output: {
		path: './dist',
		filename: "ui.js",
		sourceMapFilename: "ui.js.map"
	},
	devtool: "source-map",
	module: {
		loaders: [
		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,   query: { presets: ['react', 'es2015'] } },
		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		{ test: /\.scss$/, loaders: ["style", "css", "sass"] }
		]
	},
	plugins: [],
	externals: [ ignoreNativeRequire ]
},
{
	entry: "./src/app/main.js",
	output: {
		path: './dist',
		filename: "app.js"
	},
	node: {
		__dirname: false
	},
	externals: [ ignoreNativeRequire ]
}]

/*
	new webpack.optimize.UglifyJsPlugin({
			minimize: false,
			sourceMap: true
		})
*/