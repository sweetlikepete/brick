

/*
 * SCSS specific linting rules: // comment
 *
 * https://github.com/kristerkari/stylelint-scss#-comment
 */


export default {
    rules: {

        /*
         * Require or disallow an empty line before //-comments (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/double-slash-comment-empty-line-before": null,

        /*
         * Require or disallow //-comments to be inline comments.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/double-slash-comment-inline": "never",

        /*
         * Require or disallow whitespace after the // in //-comments
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/double-slash-comment-whitespace-inside": "always"

    }
};
