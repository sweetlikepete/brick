

const babelLoader = (env) => ({
    loader: "babel-loader",
    options: {
        babelrc: false,
        comments: true,
        plugins: [
            "react-loadable/babel",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    modules: env === "client" ? false : "auto",
                    targets: {
                        esmodules: true
                    }
                }
            ],
            "@babel/preset-react"
        ]
    }
});


export default babelLoader;
