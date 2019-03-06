

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
            plugins: [

                /*
                 * Allow parsing of import()
                 *
                 * https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
                 */
                "@babel/plugin-syntax-dynamic-import",

                /*
                 * This plugin transforms static class properties as well as properties
                 * declared with the property initializer syntax
                 *
                 * https://www.npmjs.com/package/@babel/plugin-proposal-class-properties
                 */
                "@babel/plugin-proposal-class-properties"
            ],
            presets: [

                /*
                 * A Babel preset for each environment.
                 *
                 * https://www.npmjs.com/package/@babel/preset-env
                 */
                [
                    "@babel/preset-env",
                    {
                        modules: options.target === "web" ? false : "auto",
                        targets: {
                            esmodules: true
                        }
                    }
                ],

                /*
                 * Babel preset for all React plugins.
                 *
                 * https://www.npmjs.com/package/@babel/preset-react
                 */
                "@babel/preset-react"
            ]
        }
    };

}
