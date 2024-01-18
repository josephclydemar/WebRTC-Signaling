const path = require('path');

module.exports = {
    watch: true,
    entry: './dist/client/private/js/*',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist', 'client', 'public', 'js')
    },
    mode: 'production'
};