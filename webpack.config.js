module.exports = {
    plugins: [
        require('unplugin-vue-components/webpack')({ 
            dirs: [
                'src/components',
            ]
        })
    ]
}