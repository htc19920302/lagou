/**
 * Created by jack.lu on 2016/10/3.
 */
const dirVars = require('./base-config/dir.config.js');
module.exports = {
  extensions: ['.jsx','.js'],
  alias: {
      'css': dirVars.cssDir,
      'components' : dirVars.componentsDir,
      'js' : dirVars.jsDir,
      'images' : dirVars.imagesDir,
      'mock' : dirVars.mockDir
  }
}