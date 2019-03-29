

/*
 * React specific linting rules for ESLint
 *
 * https://www.npmjs.com/package/eslint-plugin-react-ssr
 */


export default {
    plugins: ["react-ssr"],
    rules: {

        /*
         * Prevent usage of window/document in constructor
         *
         * https://github.com/ytanruengsri/eslint-plugin-react-ssr/#list-of-supported-rules
         */
        "react-ssr/no-constructor-dom": "error",

        /*
         * Prevent usage of window/document in componentWillMount
         *
         * https://github.com/ytanruengsri/eslint-plugin-react-ssr/#list-of-supported-rules
         */
        "react-ssr/no-will-mount-dom": "error"

    }
};
