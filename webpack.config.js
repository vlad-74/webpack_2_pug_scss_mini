const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const commonPug = require('./webpack/common.pug');
const commonImages = require('./webpack/common.images');
const prodExtractCSS = require('./webpack/prod.css.extract');
const prodUglifyJS = require('./webpack/prod.js.uglify');
const devDevserver = require('./webpack/dev.devserver');
const devSass = require('./webpack/dev.sass');
const devCss = require('./webpack/dev.css');
const devMaps = require('./webpack/dev.maps');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/pages/blog/blog.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({name: 'common'}),
            new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery'})
        ]
    },
    commonPug(),
    commonImages()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            prodExtractCSS(),
            prodUglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devDevserver(),
            devSass(),
            devCss(),
            devMaps()
        ])
    }
};










