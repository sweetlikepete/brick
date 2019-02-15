

/*
 * SCSS specific linting rules: @import
 *
 * https://github.com/kristerkari/stylelint-scss#-import
 */


export default {
    rules: {

        /*
         * Disallow leading underscore in partial names in @import.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-import-no-partial-leading-underscore": true,

        /*
         * Specify blacklist of disallowed file extensions for partial names in @import commands.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-import-partial-extension-blacklist": null,

        /*
         * Specify whitelist of allowed file extensions for partial names in @import commands.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-import-partial-extension-whitelist": null

    }
};
