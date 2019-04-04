

/*
 * Stylelint rule for preventing the use of low performance animation and transition properties.
 *
 * https://www.npmjs.com/package/stylelint-high-performance-animation
 */


export default {
    plugins: [
        "stylelint-high-performance-animation"
    ],
    rules: {

        /*
         * Stylelint rule for preventing the use of low performance animation and transition properties.
         *
         * https://www.npmjs.com/package/stylelint-high-performance-animation#usage
         */
        "plugin/no-low-performance-animation-properties": true

    }
};
