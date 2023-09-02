const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        publicPath: '/',
    },
    // output: {
    //     path: path.resolve(__dirname, 'build'),
    //     filename: 'main-[hash].js'
    // }
}