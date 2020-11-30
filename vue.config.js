const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/',
  outputDir: 'dist',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },

  configureWebpack: config => {
    config.output.filename = 'index.js'
    config.output.chunkFilename = '[name].[chunkhash:8].js'
    console.log(config);
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
  },
  chainWebpack: config => {
    config.resolve.alias.set('@v-feelui', resolve("./src/types"))
  }

}