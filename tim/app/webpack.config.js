var webpack = require("webpack");
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	compress:{
		warnings:false
	}
});
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
	name:"vendor"
});
module.exports = {
	//entry:'./main.js',配置项目入口文件
	entry:{
		mian:'./main.js',
		vendor:['react']
	},
	output:{
		path:__dirname + "/dist",//__dirname当前项目的根目录，nodejs的全局变量
		filename:"[name].bundle.js" //[name] webpack的全局参数，就是entry入口的key
	},
	module:{//配置loader的地方
		rules:[
			{
				test:/\.(css|less)$/,
				use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'less-loader'}]//告诉webpack.css文件用css-loader来处理，loader处理的顺序是从右到左	
			},
			{
				test:/\.(png|jpg)$/,
				use:[{
					loader:'url-loader',
					options:{
						'limit':10000
					}
				}]
			},
			{
				test:/\.js|jsx$/,
				exclude:/node-modules/,
				use:'babel-loader'
			}
		]
		
	},
	plugins:[//在这里配置插件
		CommonsChunkPlugin
	],
	devtool:'sourec-map',
	resolve:{
		extensions:['.js','.css','.vue','.less']//去掉后缀
	},
	devServer:{//配置服务器
		port:9090,
		contentBase:'./',
		historyApiFallback:true //告诉程序，当url发生变化 的时候永远指向index.html
	}
}