var webpack = require('webpack');

module.exports = {
	entry: "./main.js",
	output: {
		path: './dist',
		filename: "bundle.js",
		sourceMapFilename: "bundle.js.map"
	},
	devtool: "source-map",
	module: {
		loaders: [
		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,   query: { presets: ['react', 'es2015'] } },
		{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,   query: { presets: ['es2015'] } },
		{ test: /\.scss$/, loaders: ["style", "css", "sass"] }
		]
	},
	plugins: [
	
	],
	externals: [
	(function () {
		var IGNORES = [
		'electron',
		'remote'
		];
		return function (context, request, callback) {
			if (IGNORES.indexOf(request) >= 0) {
				return callback(null, "require('" + request + "')");
			}
			return callback();
		};
	})()
	]
};

/*
	new webpack.optimize.UglifyJsPlugin({
			minimize: false,
			sourceMap: true
		})
*/