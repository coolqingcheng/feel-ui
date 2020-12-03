const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require('copy-webpack-plugin')

const { CleanWebpackPlugin} =  require('clean-webpack-plugin')




const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: "./src/web/main.ts",
    output: {
        filename: 'index.[hash].js',
        libraryTarget: 'umd',
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
                test: /\.(js|ts)$/, loader: "babel-loader", exclude: /node_modules/
            },
            {
                test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(png|gif|jpge|jpg|svg|eot|ttf|woff|woff2)$/, use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    // externals: [
    //     {
    //         vue: 'vue'
    //     },
    //     {
    //         moment: 'moment'
    //     }
    // ],
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '标题',
            template: './src/web/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../public"),
                    to: path.resolve(__dirname, "../dist")
                },
            ]
        })
    ]
}