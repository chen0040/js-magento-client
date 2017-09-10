var path = require('path');
var webpack = require('webpack');

module.exports = {
     entry: [
		'./src/LRUCache.js'
	 ],
     output: {
         path: path.resolve(__dirname, 'webpack_build'),
         filename: 'lrucache.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};