

/*
 * Limit language features Media feature
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Specify a blacklist of disallowed media feature names.
         *
         * https://stylelint.io/user-guide/rules/media-feature-name-blacklist/
         */
        "media-feature-name-blacklist": null,

        /*
         * Disallow vendor prefixes for media feature names.
         *
         * https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
         */
        "media-feature-name-no-vendor-prefix": true,

        /*
         * Specify a whitelist of allowed media feature name and value pairs.
         *
         * https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist/
         */
        "media-feature-name-value-whitelist": null,

        /*
         * Specify a whitelist of allowed media feature names.
         *
         * https://stylelint.io/user-guide/rules/media-feature-name-whitelist/
         */
        "media-feature-name-whitelist": null

    }
};
