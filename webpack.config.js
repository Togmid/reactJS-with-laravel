// webpack.config.js

var path = require('path');
var webpack = require("webpack");
var babelPresets = {presets: ['react', 'es2015']};

module.exports = {
    context: __dirname,
    entry: [
        "./resources/assets/js/entry.js",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/dev-server"
    ],
    output: {
        path: __dirname,
        filename: "./public/assets/js/bundle.js"
    },
    module: {
        loaders: [
            {
		test: /\.jsx?$/,
		loaders: ["react-hot", "babel?"+JSON.stringify(babelPresets)],
		exclude: /node_modules/
	    },
            {
              test: /\.scss$/,
              loader: "style!css!sass?outputStyle=expanded&imagePath=/assets/images&includePaths[]=" +
              path.resolve(__dirname, "./assets/stylesheets")
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
