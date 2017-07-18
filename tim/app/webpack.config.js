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
	//entry:'./main.js',������Ŀ����ļ�
	entry:{
		mian:'./main.js',
		vendor:['react']
	},
	output:{
		path:__dirname + "/dist",//__dirname��ǰ��Ŀ�ĸ�Ŀ¼��nodejs��ȫ�ֱ���
		filename:"[name].bundle.js" //[name] webpack��ȫ�ֲ���������entry��ڵ�key
	},
	module:{//����loader�ĵط�
		rules:[
			{
				test:/\.(css|less)$/,
				use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'less-loader'}]//����webpack.css�ļ���css-loader������loader�����˳���Ǵ��ҵ���	
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
	plugins:[//���������ò��
		CommonsChunkPlugin
	],
	devtool:'sourec-map',
	resolve:{
		extensions:['.js','.css','.vue','.less']//ȥ����׺
	},
	devServer:{//���÷�����
		port:9090,
		contentBase:'./',
		historyApiFallback:true //���߳��򣬵�url�����仯 ��ʱ����Զָ��index.html
	}
}