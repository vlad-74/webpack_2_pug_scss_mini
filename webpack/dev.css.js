const autoprefixer = require('autoprefixer');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader',
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
                    ]
                }
            ]
        }
    };
};