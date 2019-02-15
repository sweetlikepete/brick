

/*
 * Possible errors Declaration block
 *
 * https://stylelint.io/user-guide/rules/#possible-errors
 */


export default {
    rules: {

        /*
         * Disallow duplicate properties within declaration blocks.
         *
         * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
         */
        "declaration-block-no-duplicate-properties": true,

        /*
         * Disallow shorthand properties that override related longhand
         * properties within declaration blocks.
         *
         * https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
         */
        "declaration-block-no-shorthand-property-overrides": true

    }
};
