

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
         * https://github.com/BrainMaestro/eslint-plugin-optimize-regex#usage
         */
        "optimize-regex/optimize-regex": "error"

    }
};
