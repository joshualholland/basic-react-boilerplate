var path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {    
    entry: ['@babel/polyfill', './client/src/index.js'],
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};