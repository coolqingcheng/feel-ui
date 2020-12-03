const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "development",
    entry: "./src/web/main.ts",
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "../public"),
        compress: true,
        open: true,
        overlay: {
            errors: true
        },
        inline: true
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/, use: ['vue-loader']
            },
            {
                test: /\.(js|ts)x$/, use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    }

                ]
            },
            {
                test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|gif|jpge|jpg|svg|eot|ttf|woff|woff2)$/, use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: require.resolve("../src/packages/utils/docs-loader.js")
                    },
                    {
                        loader: require.resolve("../src/packages/utils/md-loader.ts")
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': path.resolve('src')
        }
    },
    // externals: [
    //     {
    //         vue: 'vue'
    //     }
    // ],
    plugins: [
        new HtmlWebpackPlugin({
            title: '标题',
            template: './src/web/index.html'
        }),
        new VueLoaderPlugin(),
    ],
    performance: {
        hints: "warning",
        maxAssetSize: 300000,
        maxEntrypointSize: 500000,
    }
}