

/*
 * Disallow features that aren't supported by your target browser audience
 *
 * https://www.npmjs.com/package/stylelint-no-unsupported-browser-features
 */


export default {
    plugins: [
        "stylelint-no-unsupported-browser-features"
    ],
    rules: {

        /*
         * Disallow features that aren't supported by your target browser audience
         *
         * https://www.npmjs.com/package/stylelint-no-unsupported-browser-features#options
         */
        "plugin/no-unsupported-browser-features": true

    }
};
