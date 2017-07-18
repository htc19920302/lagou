/**
 * Created by jack.lu on 2016/10/3.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars = require('./base-config/dir.config.js');
const evn = process.env.NODE_ENV;
const configPlugins=[
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: false,
    allChunks: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename:"./js/common.[hash].js",
      minChunks:3
  }),
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template:path.resolve(__dirname,'../index.html')
  })
]
let productOption = {};//生产环境对应选项

if(evn == 'production'){
  let configProduct = [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,//压缩映射源最小代码
      compress: {
        warnings: false//不显示压缩警告
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ];
  configPlugins.push.apply(configPlugins,configProduct);
  productOption= {
    hash: true, // 为静态资源生成hash值
    minify: {
      removeComments: true,//去注释
      collapseWhitespace: true//去空格
    },//压缩
    xhtml: true,//是否渲染link为自闭合的标签，true则为自闭合标签
  }
}
module.exports=configPlugins;