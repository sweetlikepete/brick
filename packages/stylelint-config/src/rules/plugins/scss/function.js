

/*
 * SCSS specific linting rules: Function
 *
 * https://github.com/kristerkari/stylelint-scss#-function
 */


export default {
    rules: {

        /*
         * Disallow quoted strings inside the quote function (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
         */
        "scss/function-quote-no-quoted-strings-inside": true,

        /*
         * Disallow unquoted strings inside the unquote function (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
         */
        "scss/function-unquote-no-unquoted-strings-inside": true

    }
};
