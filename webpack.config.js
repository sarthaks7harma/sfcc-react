var path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]

            }
        ]
    },
    output: {
        path : path.resolve('../static/default/js/'),
        filename: 'plp.bundle.js'
    }
}
