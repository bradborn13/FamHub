const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            loader: 'style!css!sass'
        }]

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};