

/*
 * Limit language features Keyframes
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


import { idPattern } from "../../config";


export default {
    rules: {

        /*
         * Specify a pattern for keyframe names.
         *
         * https://stylelint.io/user-guide/rules/keyframes-name-pattern/
         */
        "keyframes-name-pattern": idPattern

    }
};
