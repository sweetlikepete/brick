

/*
 * Extra rules for Eslint
 *
 * https://www.npmjs.com/package/eslint-plugin-more
 */


export default {
    plugins: ["more"],
    rules: {

        /*
         * Prohibits an empty line at the beggining of a class body
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/classbody-starts-with-newline.md
         */
        "more/classbody-starts-with-newline": ["error", "always"],

        /*
         * Forces the use of native methods instead of lodash/underscore
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/force-native-methods.md
         */
        "more/force-native-methods": "error",

        /*
         * Prohibits the use of 'For loop' with ++ or +=
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-c-like-loops.md
         */
        "more/no-c-like-loops": "error",

        /*
         * Prohibits the duplication of long chains like this.props.user.name
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-duplicated-chains.md
         */
        "more/no-duplicated-chains": "error",

        /*
         * Prohibits using Array.prototype.filter to find one element and asks to use 'find' instead.
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-filter-instead-of-find.md
         */
        "more/no-filter-instead-of-find": "error",

        /*
         * Prohibits the use of variables that end in numerics.
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-numeric-endings-for-variables.md
         */
        "more/no-numeric-endings-for-variables": "error",

        /*
         * Forces the use of async / await instead of then
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-then.md
         */
        "more/no-then": "error",

        /*
         * Prohibits the use of array.map without variable or property
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-void-map.md
         */
        "more/no-void-map": "error",

        /*
         * Prohibits the usage of window global
         *
         * Off because we need to use window
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/no-window.md
         */
        "more/no-window": "off",

        /*
         * Prohibits the use of comparison array.indexOf() == -1 and ask to use 'includes' instead
         *
         * https://github.com/WebbyLab/eslint-plugin-more/blob/HEAD/docs/prefer-includes.md
         */
        "more/prefer-includes": "error"

    }
};
