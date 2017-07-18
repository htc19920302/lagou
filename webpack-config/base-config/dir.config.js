const path = require('path');
const moduleExports = {};
//项目根目录
moduleExports.RootDir = path.resolve(__dirname, '../../');
//项目源代码目录
moduleExports.srcDir = path.resolve(moduleExports.RootDir, './src');
//项目打包目录
moduleExports.distDir = path.resolve(moduleExports.RootDir, './dist');
//热更新目录
moduleExports.serverDir = path.resolve(moduleExports.RootDir, './webpack-dev-server');
//css,scss位置
moduleExports.cssDir = path.resolve(moduleExports.srcDir, './css');
//组件位置
moduleExports.componentsDir = path.resolve(moduleExports.srcDir, './components');
//静态资源存放位置
moduleExports.staticDir = path.resolve(moduleExports.RootDir, './static');
//js第三方库或不常用代码存放
moduleExports.jsDir = path.resolve(moduleExports.staticDir, './js');
//图片位置
moduleExports.imagesDir = path.resolve(moduleExports.staticDir, './images');
//公共css存放位置
moduleExports.cssDir = path.resolve(moduleExports.staticDir, './css');
//模拟数据位置
moduleExports.mockDir = path.resolve(moduleExports.staticDir, './mock');

module.exports = moduleExports;