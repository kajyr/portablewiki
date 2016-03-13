var webpack = require('webpack');

module.exports = {
	entry: "./app/main.jsx",
	output: {
		path: './dist',
		filename: "app.js",
		sourceMapFilename: "app.js.map"
	},
	devtool: "source-map",
	module: {
		loaders: [
		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,   query: { presets: ['react', 'es2015'] } },
		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
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