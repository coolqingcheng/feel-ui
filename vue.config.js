module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  outputDir: 'doc',
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

    config["performance"] = {
      hints: false
    }
  },

}