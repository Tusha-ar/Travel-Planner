const common = require('./webpack.common')
const merge = require('webpack-merge')
const miniCssEctractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common,{ 
    mode: 'production',
    module: {
        rules:[
        {
            test: /\.scss$/,
            loader: [miniCssEctractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
    },
    plugins: [
        new miniCssEctractPlugin({
            filename: '[name].[hash].css'
        })
    ]
    
})