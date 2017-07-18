/**
 * Created by jack.lu on 2016/10/3.
 */
const path =require('path');
const webpack =require('webpack');
const devServer=require("webpack-dev-server");
module.exports = {
	entry : {
		main : path.resolve(__dirname,'./src/main.js')
	},
	output : {
		path : path.resolve(__dirname,'./dist'),
		filename : 'js/bundle.[hash].js'
	},
	devtool : require('./webpack-config/devtool.config.js'),
	devServer : require('./webpack-config/devserver.config.js'),
	module : require('./webpack-config/module.config.js'),
	resolve : require('./webpack-config/resolve.config.js'),
	plugins : require('./webpack-config/plugins.config.js')
}