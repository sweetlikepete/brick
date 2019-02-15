

/*
 * Additional ESLint rules for best practices in ESLint directive comments
 * (e.g. //eslint-disable-line).
 *
 * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/#best-practices
 */


export default {
    rules: {

        /*
         * Require a eslint-enable comment for every eslint-disable comment
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
         */
        "eslint-comments/disable-enable-pair": "error",

        /*
         * Disallow a eslint-enable comment for multiple eslint-disable comments
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
         */
        "eslint-comments/no-aggregating-enable": "error",

        /*
         * Disallow duplicate eslint-disable comments
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
         */
        "eslint-comments/no-duplicate-disable": "error",

        /*
         * Disallow eslint-disable comments without rule names
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
         */
        "eslint-comments/no-restricted-disable": "error",

        /*
         * Disallow unused eslint-disable comments
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
         */
        "eslint-comments/no-unused-disable": "error",

        /*
         * Disallow unused eslint-enable comments
         *
         * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
         */
        "eslint-comments/no-unused-enable": "error"

    }
};
