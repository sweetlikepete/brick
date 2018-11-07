

module.exports = {
    client: {
        babelrc: false,
        comments: true,
        plugins: [
            "universal-import",
            "react-loadable/babel",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        esmodules: true
                    }
                }
            ],
            "@babel/preset-react"
        ]
    },
    server: {
        babelrc: false,
        plugins: [
            "universal-import",
            "react-loadable/babel",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        esmodules: true
                    }
                }
            ],
            "@babel/preset-react"
        ]
    }
};
