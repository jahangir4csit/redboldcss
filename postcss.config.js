module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-banner')({
            banner: `RedBold CSS Framework v1.0.0
Author: Jahangir Ahmed
License: MIT
Build Date: ${new Date().toISOString().split('T')[0]}`,
            important: true
        })
    ]
}