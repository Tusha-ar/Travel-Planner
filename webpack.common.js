const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill','./src/client/main.js']
    },
    output: {
        library: 'client',
        filename: '[name].[hash].js'
    },
    module: {
        rules:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
        },
        {
            test: /\.(jpg|png|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "assets"
                }
            }
        }
    ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/client/views/index.html'
        }),
        new CleanWebpackPlugin(),
        new WorkboxPlugin.GenerateSW()
    ]

}