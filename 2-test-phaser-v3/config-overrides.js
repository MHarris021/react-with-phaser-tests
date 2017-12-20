/* config-overrides.js */

module.exports = {
    webpack: function (config, env) {
        //do stuff with the webpack config...
        return config;
    },
    plugins: function (config, env) {
        let phaserPlugin = new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        });
        config.plugins += phaserPlugin;
        return config;
    }
};