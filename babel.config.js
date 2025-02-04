module.exports = function (api) {
    api.cache(true);
    const presets= [
        "@babel/preset-env",
        ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]
    ];
    const plugins= [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties"
    ];

    return {
        presets,
        plugins,
      };
}