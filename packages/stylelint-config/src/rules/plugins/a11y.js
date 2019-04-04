

/*
 * A plugin pack of accessibility related linting rules for stylelint.
 *
 * https://www.npmjs.com/package/stylelint-a11y
 */


export default {
    plugins: [
        "stylelint-a11y"
    ],
    rules: {

        /*
         * Disallow unaccessible CSS generated content in pseudo-elements
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/content-property-no-static-value/README.md
         */
        "a11y/content-property-no-static-value": true,

        /*
         * Disallow font sizes less than 15px
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/font-size-is-readable/README.md
         */
        "a11y/font-size-is-readable": true,

        /*
         * Disallow not vertical rhythmed line-height
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/line-height-is-vertical-rhythmed/README.md
         */
        "a11y/line-height-is-vertical-rhythmed": true,

        /*
         * Require implementation of certain styles for selectors with colors.
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/media-prefers-color-scheme/README.md
         */
        "a11y/media-prefers-color-scheme": null,

        /*
         * Require certain styles if the animation or transition in media features
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/media-prefers-reduced-motion/README.md
         */
        "a11y/media-prefers-reduced-motion": null,

        /*
         * Disallow content hiding with display: none property
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-display-none/README.md
         */
        "a11y/no-display-none": null,

        /*
         * Disallow obsolete attribute using
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-obsolete-attribute/README.md
         */
        "a11y/no-obsolete-attribute": true,

        /*
         * Disallow obsolete selectors using
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-obsolete-element/README.md
         */
        "a11y/no-obsolete-element": true,

        /*
         * Disallow outline clearing
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-outline-none/README.md
         */
        "a11y/no-outline-none": null,

        /*
         * Require width of text in a comfortable range
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-spread-text/README.md
         */
        "a11y/no-spread-text": null,

        /*
         * Disallow content with text-align: justify
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/no-text-align-justify/README.md
         */
        "a11y/no-text-align-justify": true,

        /*
         * Require or disallow a pseudo-element to the selectors with :hover
         *
         * https://github.com/YozhikM/stylelint-a11y/blob/HEAD/src/rules/selector-pseudo-class-focus/README.md
         */
        "a11y/selector-pseudo-class-focus": true

    }
};
