module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.coffee$/, exclude: /node_modules/, loader: 'coffee-loader'}
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
      },
}