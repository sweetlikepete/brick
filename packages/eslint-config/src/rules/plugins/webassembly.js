

/*
 * ESLint plugin for WebAssembly
 *
 * https://www.npmjs.com/package/eslint-plugin-webassembly
 */


export default {
    plugins: ["webassembly"],
    rules: {

        /*
         * Checks that the exports exists
         *
         * https://www.npmjs.com/package/eslint-plugin-webassembly#no-unknown-export
         */
        "webassembly/no-unknown-export": "error"

    }
};
