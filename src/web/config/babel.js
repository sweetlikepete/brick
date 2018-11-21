

export default function generateConfig(env){

    return {
        babelrc: false,
        comments: env === "client",
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
    };

};