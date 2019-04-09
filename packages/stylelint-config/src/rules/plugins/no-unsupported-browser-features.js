

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
         * This is off for now because we use postcss to fix most of the issues
         * this would flag.
         *
         * https://www.npmjs.com/package/stylelint-no-unsupported-browser-features#options
         */
        "plugin/no-unsupported-browser-features": null

    }
};
