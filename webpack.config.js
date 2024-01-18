const path = require('path');

module.exports = {
    watch: true,
    entry: './dist/public/js/scripts_rtc_connection.js',
    output: {
        filename: 'scripts_rtc_connection.js',
        path: path.join(__dirname, 'dist', 'public', 'js', 'bundled')
    },
    mode: 'production'
};