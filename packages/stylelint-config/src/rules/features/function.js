

/*
 * Limit language features Function
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Specify a blacklist of disallowed functions.
         *
         * https://stylelint.io/user-guide/rules/function-blacklist/
         */
        "function-blacklist": null,

        /*
         * Disallow scheme-relative urls.
         *
         * https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
         */
        "function-url-no-scheme-relative": null,

        /*
         * Specify a blacklist of disallowed url schemes.
         *
         * https://stylelint.io/user-guide/rules/function-url-scheme-blacklist/
         */
        "function-url-scheme-blacklist": null,

        /*
         * Specify a whitelist of allowed url schemes.
         *
         * https://stylelint.io/user-guide/rules/function-url-scheme-whitelist/
         */
        "function-url-scheme-whitelist": [
            "data",
            "/^http/"
        ],

        /*
         * Specify a whitelist of allowed functions.
         *
         * https://stylelint.io/user-guide/rules/function-whitelist/
         */
        "function-whitelist": null

    }
};
