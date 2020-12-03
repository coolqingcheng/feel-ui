const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')




const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "production",
    entry: "./src/packages/Index.ts",
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "../bin")
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/, use: ['style-loader', 'css-loader']
            // },
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
                test: /\.less$/, use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../bin/',
                    },
                }, 'css-loader', 'less-loader']
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
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': path.resolve('src')
        }
    },
    externals: [
        {
            vue: 'vue'
        },
        {
            router: 'vue-router'
        },
        {
            axios: 'axios'
        },
        {
            moment: 'moment'
        },
        {
            prismjs: 'prismjs'
        }
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../src/packages/types/index.d.ts"),
                    to: path.resolve(__dirname, "../bin/index.d.ts")
                },
            ]
        }),
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}