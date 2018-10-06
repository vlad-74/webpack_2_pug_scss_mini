const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['css-loader?minimize', 
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 8', 'last 4 version']
                                        })
                                    ],
                                    sourceMap: true
                                }  
                            }, 
                            'sass-loader'
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader?minimize', 
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 8', 'last 4 version']
                                        })
                                    ],
                                    sourceMap: true
                                }  
                            }
                        ],
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('./css/[name].css'),
        ],
    };
};