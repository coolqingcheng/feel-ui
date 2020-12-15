const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname,"../src/packages/Index.ts"),
    output: {
        path: path.resolve(__dirname, '../bin'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'feelui',
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this',
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
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../src/packages/types/index.d.ts"),
                    to: path.resolve(__dirname, "../bin/index.d.ts")
                },
                {
                    from: path.resolve(__dirname, "../public/icons"),
                    to:path.resolve(__dirname,"../bin/icons")
                }
                //打包部分类
                ,
                {
                    from: path.resolve(__dirname, "../src/packages/utils/FUtils.d.ts"),
                    to:path.resolve(__dirname,"../bin/utils/FUtils.d.ts")
                },
                {
                    from: path.resolve(__dirname, "../src/packages/utils/FUtils.js"),
                    to: path.resolve(__dirname, "../bin/utils/FUtils.js")
                }
            ]
        }),
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}