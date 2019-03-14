

/*
 * Additional ESLint's style rules for Node.js
 *
 * https://github.com/mysticatea/eslint-plugin-node#stylistic-issues
 */


export default {
    rules: {

        /*
         * Enforce either module.exports or exports
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
         */
        "node/exports-style": [
            "error",
            "module.exports"
        ],

        /*
         * Enforce either Buffer or require("buffer").Buffer
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
         */
        "node/prefer-global/buffer": "error",

        /*
         * Enforce either console or require("console")
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
         */
        "node/prefer-global/console": "error",

        /*
         * Enforce either process or require("process")
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
         */
        "node/prefer-global/process": "error",

        /*
         * Enforce either TextDecoder or require("util").TextDecoder
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
         */
        "node/prefer-global/text-decoder": "error",

        /*
         * Enforce either TextEncoder or require("util").TextEncoder
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
         */
        "node/prefer-global/text-encoder": "error",

        /*
         * Enforce either URL or require("url").URL
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
         */
        "node/prefer-global/url": "error",

        /*
         * Enforce either URLSearchParams or require("url").URLSearchParams
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
         */
        "node/prefer-global/url-search-params": "error"
    }
};
