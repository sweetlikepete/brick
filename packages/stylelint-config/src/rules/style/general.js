

/*
 * Stylistic issues General
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Specify indentation (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/indentation/
         */
        indentation: 4,

        /*
         * Specify unix or windows linebreaks (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/linebreaks/
         */
        linebreaks: "unix",

        /*
         * Limit the number of adjacent empty lines.
         *
         * https://stylelint.io/user-guide/rules/max-empty-lines/
         */
        "max-empty-lines": [
            1,
            {
                ignore: ["comments"]
            }
        ],

        /*
         * Limit the length of a line.
         *
         * https://stylelint.io/user-guide/rules/max-line-length/
         */
        "max-line-length": 320,

        /*
         * Disallow empty first lines. (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/no-empty-first-line/
         */
        "no-empty-first-line": null,

        /*
         * Disallow end-of-line whitespace (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/no-eol-whitespace/
         */
        "no-eol-whitespace": true,

        /*
         * Disallow missing end-of-source newlines (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
         */
        "no-missing-end-of-source-newline": true

    }
};
