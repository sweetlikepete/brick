

export default function loader(config, options){

    /*
     * This loader transpiles JavaScript files using Babel.
     *
     * https://github.com/babel/babel-loader
     */
    return {
        loader: "babel-loader",
        options: {
            babelrc: false,

            /*
             * Leave comments in the transpiled code. This is important because
             * webpack uses comment to resolve dynamic imports.
             */
            comments: true,
            presets: [
                "@sweetlikepete/babel-preset",
                {
                    modules: options.target === "web" ? false : "auto",
                    targets: {
                        esmodules: true
                    }
                }
            ]
        }
    };

}
