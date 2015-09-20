var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    entry: ["./main.jsx"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/', // for webpack-dev-server
        filename: "app.js"
    },
    devServer: {
        contentBase: 'public'
    },
    plugins: [commonsPlugin],

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    }
};