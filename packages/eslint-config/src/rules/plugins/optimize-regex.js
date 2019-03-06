

/*
 * Optimize regex literals
 *
 * https://github.com/BrainMaestro/eslint-plugin-optimize-regex
 */


export default {
    plugins: ["optimize-regex"],
    rules: {

        /*
         * Disallow unoptimized regex literals
         *
         * This is off for now because there is a bug that conflicts with
         * require-unicode-regexp because this plugin can't parse unicode regex.
         *
         * https://github.com/BrainMaestro/eslint-plugin-optimize-regex#usage
         */
        "optimize-regex/optimize-regex": "off"

    }
};
