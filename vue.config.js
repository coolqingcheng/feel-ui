const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  outputDir: 'dist',
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: require.resolve("./src/packages/utils/docs-loader.js")
        },
        {
          loader: require.resolve("./src/packages/utils/md-loader.ts")
        }
      ]
    })
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    config["performance"] = {
      hints: false
    }
    // config.resolve.alias.set('@v-feelui', resolve("./src/types"))
  },
  chainWebpack: config => {
    config.resolve.alias.set('@v-feelui', resolve("./src/types"))
  }

}