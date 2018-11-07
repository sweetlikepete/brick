

module.exports = {
    plugins: [
        "universal-import",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
    ],
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: true
                }
            }
        ]
    ]
};
