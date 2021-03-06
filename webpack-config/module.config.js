/**
 * Created by jack.lu on 2016/10/3.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
  rules: [
    // {
    //   test: /\.js$/,
    //   enforce: "pre",
    //   loader: "eslint-loader"
    // },
    {//es6解析
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
      query: {
        presets: ['es2015','react'],
        plugins:[
          'transform-runtime','syntax-dynamic-import'
        ],
      }
    },
    {
      //将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif|jpeg)$/,
      loader: 'url-loader?limit=8192&name=static/images/[hash].[ext]',
    },
    {
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?name=static/fonts/[name].[ext]',
    },
    {
      test: /.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          "css-loader"
          //"postcss-loader"
        ],
        publicPath: "/static/css"
      })
    }
  ]
}
