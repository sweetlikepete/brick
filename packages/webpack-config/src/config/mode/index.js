

/*
 * Providing the mode configuration option tells webpack to use its built-in
 * optimizations accordingly.
 *
 * https://webpack.js.org/concepts/mode/
 */
export default function configure(config, options){

    const modes = {

        /*
         * Set common development options.
         *
         * https://webpack.js.org/concepts/mode/#mode-development
         */
        development: "development",

        /*
         * Set common production options.
         *
         * https://webpack.js.org/concepts/mode/#mode-production
         */
        production: "production"
    };

    return {
        mode: modes[options.mode] || modes.development
    };

}
