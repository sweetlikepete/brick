

/*
 * Additional ESLint rules for stylistic issues in ESLint directive comments
 * (e.g. //eslint-disable-line).
 *
 * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Disallow eslint-disable comments about specific rules
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
         */
        "eslint-comments/no-unlimited-disable": "error",

        /*
         * Disallow ESLint directive-comments
         *
         * Off for now because sometimes we have a good reason to use these
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
         */
        "eslint-comments/no-use": "off"

    }
};
